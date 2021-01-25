import {combineReducers} from 'redux';
import settingsReducer from './settings/settingsReducer';
import leaveReducer from './leave/leaveReducer';

export const rootReducer = combineReducers({
  settingsReducer, leaveReducer
});
