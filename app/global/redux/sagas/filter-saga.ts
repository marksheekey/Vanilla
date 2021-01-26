import {takeLatest} from 'redux-saga/effects'
import {
  onLocationChange,
  onShowAvailabilityChange,
  onShowAvatarChange,
  onShowBreakChange, onShowEmptyDaysChange
} from '../filters/filterAction'

function* locationChange(){

}

export function* filterSaga() {
  yield takeLatest([onLocationChange], locationChange);
  yield takeLatest([onShowAvailabilityChange], locationChange);
  yield takeLatest([onShowBreakChange], locationChange);
  yield takeLatest([onShowAvatarChange], locationChange);
  yield takeLatest([onShowEmptyDaysChange], locationChange);
}
