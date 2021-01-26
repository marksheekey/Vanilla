import {combineReducers} from 'redux';
import settingsReducer from './settings/settingsReducer';
import leaveReducer from './leave/leaveReducer';
import filterReducer from './filters/filterReducer'

export const rootReducer = combineReducers({
  settingsReducer, leaveReducer, filterReducer
});
