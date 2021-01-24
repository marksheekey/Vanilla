import {RotaSettings} from '../../../services/api/classes/RotaSettings';

export interface ISettings {
  getSettings(): Promise<RotaSettings>;
}
