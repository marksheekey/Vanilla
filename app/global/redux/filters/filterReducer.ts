import {action, createReducer} from 'typesafe-actions'
import {DeepReadonly} from '../../../types/interface'
import {
  FilterActions, onLocationChange,
  onShowAvailabilityChange,
  onShowAvatarChange,
  onShowBreakChange,
  onShowEmptyDaysChange
} from './filterAction'

export interface FilterState {
  showAvailability: boolean;
  showBreakChange: boolean;
  showEmptyDays: boolean;
  showAvatars: boolean;
  showLocation: number;
}

export const defaultState: FilterState = {
  showAvailability: true,
  showBreakChange:true,
  showEmptyDays:true,
  showAvatars:true,
  showLocation:0
};

const filterReducer = createReducer<DeepReadonly<FilterState>, FilterActions>(
  defaultState,
).handleAction(onShowAvailabilityChange, (state, action) => ({
   ...state, showAvailability: action.payload
}))
  .handleAction(onShowBreakChange, (state, action) => ({
    ...state, showBreak: action.payload
  }))
  .handleAction(onShowEmptyDaysChange, (state, action) => ({
    ...state, showEmptyDays: action.payload
  }))
  .handleAction(onShowAvatarChange, (state, action) => ({
    ...state, showAvatars: action.payload
  }))
  .handleAction(onLocationChange, (state, action) => ({
    ...state, showLocation: action.payload
  }))


export default filterReducer;
