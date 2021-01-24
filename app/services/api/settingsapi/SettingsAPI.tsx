import AxiosClient from '../AxiosClient';
import {ISettings} from '../../../Screens/features/settings/ISettings';
import {RotaSettings} from '../classes/RotaSettings';

export default class SettingsAPI extends AxiosClient implements ISettings {
  private static instance: SettingsAPI;

  private constructor() {
    super();
  }

  static getInstance(): SettingsAPI {
    if (!SettingsAPI.instance) {
      SettingsAPI.instance = new SettingsAPI();
    }
    return SettingsAPI.instance;
  }

  public getSettings(): Promise<RotaSettings> {
    console.log('settingsapi', 'getSettings');
    return this.instance.get<RotaSettings, RotaSettings>(
      'settings?only_values=true',
      {}
    );
  }
}
