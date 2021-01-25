import {createReducer} from 'typesafe-actions';
import {RotaSettings} from '../../../services/api/classes/RotaSettings';
import {onSettings, SettingsActions} from './settingsAction';
import {DeepReadonly, Maybe} from '../../../types/interface';

export interface SettingsState {
  settings: Maybe<RotaSettings>;
  expiry: number;
}

export const defaultState: SettingsState = {
  settings: undefined,
  expiry: 0,
};

const settingsReducer = createReducer<
  DeepReadonly<SettingsState>,
  SettingsActions
>(defaultState).handleAction(onSettings.request, (state) => ({
  settings: state.settings,
  expiry: state.expiry,
}));
export default settingsReducer;
