import {Selector} from 'reselect';
import {Maybe} from '../../../types/interface';
import {LeaveState} from './leaveReducer'
import {Leave} from '../../../services/api/classes/Leave'

const getLeave: Selector<LeaveState, Maybe<Leave[]>> = (
  state: LeaveState,
) => state.leave

const getLeaveStartDate: Selector<LeaveState, Maybe<string>> = (state: LeaveState) => state.startDate;

export const LeaveSelector = {
  getLeave,getLeaveStartDate
};
