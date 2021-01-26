import {createReducer} from 'typesafe-actions';
import {LeaveActions, onFetchLeaveForMonth, onNextMonth, onPrevMonth} from './leaveAction';
import {DeepReadonly, Maybe} from '../../../types/interface';
import {Leave} from '../../../services/api/classes/Leave'

export interface LeaveState {
  leave: Maybe<Leave[]>;
  startDate: Maybe<string>;
}

export const defaultState: LeaveState = {
  leave: undefined,
  startDate: undefined
};

const leaveReducer = createReducer<
  DeepReadonly<LeaveState>,
  LeaveActions
>(defaultState).handleAction(onFetchLeaveForMonth.request, (state) => ({
  leave: state.leave,
  startDate: state.startDate
}))
  .handleAction(onFetchLeaveForMonth.success, (state, action) => ({leave:action.payload.leave, startDate:action.payload.startDate}))
export default leaveReducer;
