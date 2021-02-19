import storage from './storage';
import {SettingState, initialState} from '../modules/Settings';

const KEY: string = 'setting';

export default class SettingStorage {
  static load = async (): Promise<SettingState> => {
    const state: SettingState = await storage
      .load({key: KEY})
      .then((data: SettingState) => {
        return data;
      })
      .catch(() => {return initialState});
    return state;
  }

  static async save(data: SettingState) {
    await storage.save({
      key: KEY,
      data: data,
    });
  }
}
