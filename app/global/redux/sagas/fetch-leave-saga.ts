import {put, select, takeLatest} from 'redux-saga/effects';
import {Maybe} from '../../../types/interface';
import {AxiosError} from 'axios';
import JodaClockService from '../../../services/clock/JodaClockService';
import LeaveAPI from '../../../services/api/leaveapi/LeaveAPI'
import {Leave} from '../../../services/api/classes/Leave'
import {LeaveActions, onFetchLeaveThisMonth, onNextMonth, onPrevMonth} from '../leave/leaveAction'
import {LeaveSelector} from '../leave/leaveSelector'


const api = LeaveAPI.getInstance();
const clock = JodaClockService.getInstance();

function* fetchMonth(action: LeaveActions) {
  let start = clock.toStartOfThisMonth()
  if(action.type == 'leave/ON_LEAVE_REQUEST_NEXT_MONTH'){
    const current = yield select(LeaveSelector.getLeaveStartDate);
    console.log("*** NEXT *** ",current);
    start = clock.addMonthToAPIDate(current);
  }
  if(action.type == 'leave/ON_LEAVE_REQUEST_PREV_MONTH'){
    const current = yield select(LeaveSelector.getLeaveStartDate);
    console.log("*** PREV *** ",current);
    start = clock.subMonthFromAPIDate(current);
  }
  let end = clock.finalAPIDateOfMonth(start);
  try {
    let response: Maybe<Leave[]> = yield api.getLeave(start, end);
    if (response) {
      console.log('leave: response', response);
      yield put(
        onFetchLeaveThisMonth.success({ leave: response, startDate: start })
      );
    }
  } catch (ex) {
    const error = ex as AxiosError;
    yield put(onFetchLeaveThisMonth.failure(ex));
  }
}

export function* fetchLeaveSaga() {
  yield takeLatest(onFetchLeaveThisMonth.request, fetchMonth);
  yield takeLatest(onNextMonth.request, fetchMonth);
  yield takeLatest(onPrevMonth.request, fetchMonth);
}
