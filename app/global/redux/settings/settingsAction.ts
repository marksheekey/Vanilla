import {ActionType, createAsyncAction} from 'typesafe-actions';
import {SettingsState} from './settingsReducer';

export const onSettings = createAsyncAction(
  'settings/ON_SETTINGS_REQUEST',
  'settings/ON_SETTINGS_SUCCESS',
  'settings/ON_SETTINGS_FAILURE',
)<void, SettingsState, Error>();

export type SettingsActions = ActionType<typeof onSettings>;
