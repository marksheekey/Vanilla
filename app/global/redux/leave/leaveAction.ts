import {ActionType, createAction, createAsyncAction} from 'typesafe-actions';
import {LeaveState} from './leaveReducer'

export const onFetchLeaveForMonth = createAsyncAction(
  'leave/ON_LEAVE_REQUEST',
  'leave/ON_LEAVE_SUCCESS',
  'leave/ON_LEAVE_FAILURE',
)<void, LeaveState, Error>()

export const onNextMonth = createAction('leave/ON_LEAVE_REQUEST_NEXT_MONTH')

export const onPrevMonth = createAction('leave/ON_LEAVE_REQUEST_PREV_MONTH')

export type LeaveActions = ActionType<typeof onFetchLeaveForMonth> | ActionType<typeof onPrevMonth> |  ActionType<typeof onNextMonth>
