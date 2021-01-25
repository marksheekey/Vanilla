import {put, select, takeLatest} from 'redux-saga/effects';
import {Maybe} from '../../../types/interface';
import {AxiosError} from 'axios';
import JodaClockService from '../../../services/clock/JodaClockService';
import LeaveAPI from '../../../services/api/leaveapi/LeaveAPI'
import {Leave} from '../../../services/api/classes/Leave'
import {onFetchLeave, onNextMonth, onPrevMonth} from '../leave/leaveAction'
import {LeaveSelector} from '../leave/leaveSelector'

const api = LeaveAPI.getInstance();
const clock = JodaClockService.getInstance();

function* fetchLeaveForThisMonth() {
  let start = clock.toStartOfThisMonth()
  yield getLeave(start)
}

function* getLeave(start: string) {
  let end = clock.finalAPIDateOfMonth(start);
  try {
    let response: Maybe<Leave> = yield api.getLeave(start, end);
    if (response) {
      console.log('leave:', 'update settings');
      yield put(
        onFetchLeave.success({ leave: response, startDate: start })
      );
    }

  } catch (ex) {
    const error = ex as AxiosError;
    console.log('leave: error', error.message);
    yield put(onFetchLeave.failure(ex));
  }
}

function* fetchNextMonth() {
  const current = yield select(LeaveSelector.getLeaveStartDate);
  let start = clock.addMonthToAPIDate(current)
  yield getLeave(start)
}

function* fetchPreviousMonth() {
  const current = yield select(LeaveSelector.getLeaveStartDate);
  let start = clock.subMonthFromAPIDate(current)
  yield getLeave(start)
}

export function* fetchLeaveSaga() {
  yield takeLatest([onFetchLeave.request], fetchLeaveForThisMonth);
  yield takeLatest([onNextMonth()], fetchNextMonth);
  yield takeLatest([onPrevMonth()], fetchPreviousMonth);
}
