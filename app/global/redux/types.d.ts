import {ActionType, StateType} from 'typesafe-actions';
import {DeepReadonly} from '../../types/interface';

export type SettingsState = DeepReadonly<
  StateType<typeof import('./rootReducer').rootReducer>
>;

export type RootAction = ActionType<
  typeof import('../redux/rootActions').default
>;

declare module 'typesafe-actions' {
  interface Types {
    RootAction: ActionType<typeof import('../redux/rootActions').default>;
  }
}
