import {Selector} from 'reselect';
import {RootState} from '../types'
import {FilterState} from './filterReducer'

const getFilters: Selector<RootState, FilterState> = (state: RootState) => state.filterReducer

export const FilterSelector = {
  getFilters
};
