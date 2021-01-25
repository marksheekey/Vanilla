import {createReducer} from 'typesafe-actions';
import {LeaveActions, onFetchLeave} from './leaveAction';
import {DeepReadonly, Maybe} from '../../../types/interface';
import {Leave} from '../../../services/api/classes/Leave'

export interface LeaveState {
  leave: Maybe<Leave>;
  startDate: Maybe<string>;
}

export const defaultState: LeaveState = {
  leave: undefined,
  startDate: undefined
};

const leaveReducer = createReducer<
  DeepReadonly<LeaveState>,
  LeaveActions
>(defaultState).handleAction(onFetchLeave.request, (state) => ({
  leave: state.leave,
  startDate: state.startDate
}))
export default leaveReducer;
