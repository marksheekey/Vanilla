import {Selector} from 'reselect';
import {Maybe} from '../../../types/interface';
import {Leave} from '../../../services/api/classes/Leave'
import {RootState} from '../types'

// @ts-ignore
const getFilters: Selector<RootState, Maybe<Leave[]>> = (state: RootState) => state.leaveReducer.leave

const getLeaveStartDate: Selector<RootState, Maybe<string>> = (state: RootState) =>
  state.leaveReducer.startDate

export const FilterSelector = {
  getLeave,getLeaveStartDate
};
