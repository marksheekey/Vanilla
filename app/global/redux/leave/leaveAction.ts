import {ActionType, createAction, createAsyncAction} from 'typesafe-actions';
import {LeaveState} from './leaveReducer'

export const onFetchLeave = createAsyncAction(
  'leave/ON_LEAVE_REQUEST',
  'leave/ON_LEAVE_SUCCESS',
  'leave/ON_LEAVE_FAILURE',
)<void, LeaveState, Error>()

export const onNextMonth = createAction(
  'leave/ON_NEXT_MONTH_REQUEST',
)

export const onPrevMonth = createAction(
  'leave/ON_PREV_MONTH_REQUEST',
)

export type LeaveActions = ActionType<typeof onFetchLeave> | ActionType<typeof onNextMonth> | ActionType<typeof onPrevMonth>
