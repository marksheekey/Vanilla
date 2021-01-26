import {all} from 'redux-saga/effects';
import {fetchLeaveSaga} from './fetch-leave-saga'
import {filterRotasSaga} from './filter-saga'

export function* filterSaga() {
  yield all([filterRotasSaga()]);
}
