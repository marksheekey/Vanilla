import {Selector} from 'reselect';
import {Maybe} from '../../../types/interface';
import {Leave} from '../../../services/api/classes/Leave'
import {RootState} from '../types'
import {LeaveState} from './leaveReducer'

const getLeave: Selector<LeaveState, Maybe<Leave[]>> = (state: LeaveState) => state.leave

const getLeaveStartDate: Selector<RootState, Maybe<string>> = (state: RootState) =>
  state.leaveReducer.startDate

export const LeaveSelector = {
  getLeave,getLeaveStartDate
};
