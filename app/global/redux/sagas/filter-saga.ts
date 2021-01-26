import {put, select, takeLatest} from 'redux-saga/effects'
import {
  onDateChange,
  onLocationChange,
  onShowAvailabilityChange,
  onShowAvatarChange,
  onShowBreakChange, onShowEmptyDaysChange
} from '../filters/filterAction'
import {FilterSelector} from '../filters/filterSelector'


function* filterChange(){
  const current = yield select(FilterSelector.getFilters)
  console.log("filters:",current)
}

export function* filterRotasSaga() {
  yield takeLatest([onLocationChange], filterChange);
  yield takeLatest([onShowAvailabilityChange], filterChange);
  yield takeLatest([onShowBreakChange], filterChange);
  yield takeLatest([onShowAvatarChange], filterChange);
  yield takeLatest([onShowEmptyDaysChange], filterChange);
  yield takeLatest([onDateChange], filterChange);
}
