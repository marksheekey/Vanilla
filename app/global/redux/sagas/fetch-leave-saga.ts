import {put, select, takeLatest} from 'redux-saga/effects';
import {Maybe} from '../../../types/interface';
import {AxiosError} from 'axios';
import JodaClockService from '../../../services/clock/JodaClockService';
import LeaveAPI from '../../../services/api/leaveapi/LeaveAPI'
import {Leave} from '../../../services/api/classes/Leave'
import {LeaveActions, onFetchLeaveForMonth, onNextMonth, onPrevMonth} from '../leave/leaveAction'
import {LeaveSelector} from '../leave/leaveSelector'

const api = LeaveAPI.getInstance();
const clock = JodaClockService.getInstance();

function* fetchMonth(start: string) {
  let end = clock.finalAPIDateOfMonth(start);
  try {
    let response: Maybe<Leave[]> = yield api.getLeave(start, end);
    if (response) {
      yield put(
        onFetchLeaveForMonth.success({ leave: response, startDate: start })
      );
    }
  } catch (ex) {
    const error = ex as AxiosError;
    yield put(onFetchLeaveForMonth.failure(ex));
  }
}

function* getThisMonth(){
  let start = clock.toStartOfThisMonth()
  yield fetchMonth(start)
}

function* getNextMonth(){
  const current = yield select(LeaveSelector.getLeaveStartDate);
  let start = clock.addMonthToAPIDate(current);
  yield fetchMonth(start)
}

function* getPrevMonth(){
  const current = yield select(LeaveSelector.getLeaveStartDate);
  let start = clock.subMonthFromAPIDate(current);
  yield fetchMonth(start)
}

export function* fetchLeaveSaga() {
  yield takeLatest([onFetchLeaveForMonth.request], getThisMonth);
  yield takeLatest([onNextMonth], getNextMonth);
  yield takeLatest([onPrevMonth], getPrevMonth);
}
