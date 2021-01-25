import {put, select, takeLatest} from 'redux-saga/effects';
import {Maybe} from '../../../types/interface';
import {AxiosError} from 'axios';
import JodaClockService from '../../../services/clock/JodaClockService';
import LeaveAPI from '../../../services/api/leaveapi/LeaveAPI'
import {Leave} from '../../../services/api/classes/Leave'
import {onFetchLeaveThisMonth, onNextMonth, onPrevMonth} from '../leave/leaveAction'
import {LeaveSelector} from '../leave/leaveSelector'


const api = LeaveAPI.getInstance();
const clock = JodaClockService.getInstance();

function* fetchLeaveForThisMonth() {
  let start = clock.toStartOfThisMonth()
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
    console.log('leave: error', error.message);
    yield put(onFetchLeaveThisMonth.failure(ex));
  }
}

function* fetchNextMonth() {
  const current = yield select(LeaveSelector.getLeaveStartDate);
  console.log("leave: current",current);
  const state = yield select(LeaveSelector.getLeave);
  console.log('leave: state',state);
  let start = clock.addMonthToAPIDate(current);
  let end = clock.finalAPIDateOfMonth(start);
  try {
    let response: Maybe<Leave[]> = yield api.getLeave(start, end);
    if (response) {
      console.log('leave: response', response);
      yield put(
        onNextMonth.success({ leave: response, startDate: start })
      );
    }

  } catch (ex) {
    const error = ex as AxiosError;
    console.log('leave: error', error.message);
    yield put(onNextMonth.failure(ex));
  }
}

function* fetchPreviousMonth() {
  const current = yield select(LeaveSelector.getLeaveStartDate);
  const state = yield select(LeaveSelector.getLeave);
  console.log('leave: state',state)
  let start = clock.subMonthFromAPIDate(current);
  let end = clock.finalAPIDateOfMonth(start);
  try {
    let response: Maybe<Leave[]> = yield api.getLeave(start, end);
    if (response) {
      console.log('leave: response', response);
      yield put(
        onPrevMonth.success({ leave: response, startDate: start })
      );
    }

  } catch (ex) {
    const error = ex as AxiosError;
    console.log('leave: error', error.message);
    yield put(onPrevMonth.failure(ex));
  }
}

export function* fetchLeaveSaga() {
  yield takeLatest(onFetchLeaveThisMonth.request, fetchLeaveForThisMonth);
  yield takeLatest(onNextMonth.request, fetchNextMonth);
  yield takeLatest(onPrevMonth.request, fetchPreviousMonth);
}
