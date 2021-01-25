import {createReducer} from 'typesafe-actions';
import {LeaveActions, onFetchLeaveThisMonth, onNextMonth, onPrevMonth} from './leaveAction';
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
>(defaultState).handleAction(onFetchLeaveThisMonth.request, (state) => ({
  leave: state.leave,
  startDate: state.startDate
}))
  .handleAction(onNextMonth.request, (state) => ({
    leave: state.leave,
    startDate: state.startDate
  }))
  .handleAction(onPrevMonth.request, (state) => ({
    leave: state.leave,
    startDate: state.startDate
  }))
export default leaveReducer;
