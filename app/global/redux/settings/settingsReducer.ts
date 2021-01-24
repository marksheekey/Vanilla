import {createReducer} from 'typesafe-actions';
import {RotaSettings} from '../../../services/api/classes/RotaSettings';
import {onSettings, SettingsActions} from './settingsAction';
import {DeepReadonly, Maybe} from '../../../types/interface';

export interface SettingsState {
  settings: Maybe<RotaSettings>;
}

export const defaultState: SettingsState = {
  settings: undefined,
};

const settingsReducer = createReducer<
  DeepReadonly<SettingsState>,
  SettingsActions
>(defaultState).handleAction(onSettings.request, (state) => ({
  settings: state.settings,
}));
export default settingsReducer;
