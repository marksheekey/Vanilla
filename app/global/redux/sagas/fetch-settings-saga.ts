import {put, takeLatest, select} from 'redux-saga/effects';
import {Maybe} from '../../../types/interface';
import {RotaSettings} from '../../../services/api/classes/RotaSettings';
import {onSettings} from '../settings/settingsAction';
import SettingsAPI from '../../../services/api/settingsapi/SettingsAPI';
import {AxiosError} from 'axios';
import {Alert} from 'react-native';
import JodaClockService from '../../../services/clock/JodaClockService';
import {SettingsSelector} from '../settings/settingsSelector';

const api = SettingsAPI.getInstance();
const clock = JodaClockService.getInstance();

function* fetchSettings() {
  try {
    let now = clock.now();
    console.log('settings:', 'now '+now);
    const existingExpiry: number = yield select(
      SettingsSelector.getExpiryValue,
    );
    console.log('settings:', 'expiry '+existingExpiry);
    if (now > existingExpiry) {
      console.log('settings:', 'fetch settings');
      let response: Maybe<RotaSettings> = yield api.getSettings();
      console.log('settings api:', response);
      if (response) {
        console.log('settings:', 'update settings');
        yield put(
          onSettings.success({settings: response, expiry: now + 10000}),
        );
      }
    } else {
      console.log('settings:', 'use cache');
    }
  } catch (ex) {
    const error = ex as AxiosError;
    Alert.alert('Error', error.message);
    yield put(onSettings.failure(ex));
  }
}

export function* fetchSettingsSaga() {
  yield takeLatest([onSettings.request], fetchSettings);
}
