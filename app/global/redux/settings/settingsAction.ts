import {ActionType, createAsyncAction} from 'typesafe-actions';
import {RotaSettings} from '../../../services/api/classes/RotaSettings';

export const onSettings = createAsyncAction(
  'settings/ON_SETTINGS_REQUEST',
  'settings/ON_SETTINGS_SUCCESS',
  'settings/ON_SETTINGS_FAILURE'
)<void, RotaSettings, Error>();

export type SettingsActions = ActionType<typeof onSettings>;
