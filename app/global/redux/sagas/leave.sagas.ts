import {all} from 'redux-saga/effects';
import {fetchLeaveSaga} from './fetch-leave-saga'

export function* leaveSaga() {
  yield all([fetchLeaveSaga()]);
}
