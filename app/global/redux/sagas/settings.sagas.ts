import {all} from 'redux-saga/effects';
import {fetchSettingsSaga} from './fetch-settings-saga';

export function* settingsSaga() {
  yield all([fetchSettingsSaga()]);
}
