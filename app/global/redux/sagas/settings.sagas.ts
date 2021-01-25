import {all} from 'redux-saga/effects';
import {fetchSettingsSaga} from './fetch-settings-saga';
import {fetchLeaveSaga} from './fetch-leave-saga'

export function* settingsSaga() {
  yield all([fetchSettingsSaga(), fetchLeaveSaga()]);
}
