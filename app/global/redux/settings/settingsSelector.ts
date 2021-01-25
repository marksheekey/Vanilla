import {Selector} from 'reselect';
import {RotaSettings} from '../../../services/api/classes/RotaSettings';
import {Maybe} from '../../../types/interface';
import {SettingsState} from '../types';

const getSettingsValue: Selector<SettingsState, Maybe<RotaSettings>> = (
  state: SettingsState,
) => state.settingsReducer.settings;

const getExpiryValue: Selector<SettingsState, number> = (
  state: SettingsState,
) => state.settingsReducer.expiry;

export const SettingsSelector = {
  getSettingsValue,
  getExpiryValue,
};
