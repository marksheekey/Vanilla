import {Selector} from 'reselect';
import {RotaSettings} from '../../../services/api/classes/RotaSettings';
import {Maybe} from '../../../types/interface';
import {SettingsState} from '../types';

const getValue: Selector<SettingsState, Maybe<RotaSettings>> = (
  state: SettingsState
) => state.settingsReducer.settings;

export const SettingsSelector = {
  getValue
};
