import {Selector} from 'reselect';
import {Maybe} from '../../../types/interface';
import {LeaveState} from './leaveReducer'

const getLeave: Selector<LeaveState, Maybe<LeaveState>> = (
  state: LeaveState,
) => state

const getLeaveStartDate: Selector<LeaveState, Maybe<string>> = (state: LeaveState) => state.startDate;

export const LeaveSelector = {
  getLeave,getLeaveStartDate
};
