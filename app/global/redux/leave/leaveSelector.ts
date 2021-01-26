import {Selector} from 'reselect';
import {Maybe} from '../../../types/interface';
import {Leave} from '../../../services/api/classes/Leave'
import {RootState} from '../types'

const getLeave: Selector<RootState, Maybe<Leave[]>> = (state: RootState) => state.leaveReducer.leave

const getLeaveStartDate: Selector<RootState, Maybe<string>> = (state: RootState) =>
  state.leaveReducer.startDate

export const LeaveSelector = {
  getLeave,getLeaveStartDate
};
