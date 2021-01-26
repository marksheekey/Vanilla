import {ActionType, createAction, createAsyncAction} from 'typesafe-actions';
import {LeaveState} from './leaveReducer'

export const onFetchLeaveForMonth = createAsyncAction(
  'leave/ON_LEAVE_REQUEST',
  'leave/ON_LEAVE_SUCCESS',
  'leave/ON_LEAVE_FAILURE',
)<void, LeaveState, Error>()

export const onNextMonth = createAsyncAction(
  'leave/ON_LEAVE_REQUEST_NEXT_MONTH',
  'leave/ON_LEAVE_SUCCESS_NEXT_MONTH',
  'leave/ON_LEAVE_FAILURE_NEXT_MONTH',
)<void, LeaveState, Error>()

export const onPrevMonth = createAsyncAction(
  'leave/ON_LEAVE_REQUEST_PREV_MONTH',
  'leave/ON_LEAVE_SUCCESS_PREV_MONTH',
  'leave/ON_LEAVE_FAILURE_PREV_MONTH',
)<void, LeaveState, Error>()

export type LeaveActions = ActionType<typeof onFetchLeaveForMonth> | ActionType<typeof onNextMonth> | ActionType<typeof onPrevMonth>
