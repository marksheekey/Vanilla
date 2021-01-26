import {Selector} from 'reselect';
import {RotaSettings} from '../../../services/api/classes/RotaSettings';
import {Maybe} from '../../../types/interface';
import {RootState} from '../types'

const getSettingsValue: Selector<RootState, Maybe<RotaSettings>> = (
  state: RootState,
) => state.settingsReducer.settings;

const getExpiryValue: Selector<RootState, number> = (
  state: RootState,
) => state.settingsReducer.expiry;

export const SettingsSelector = {
  getSettingsValue,
  getExpiryValue,
};
