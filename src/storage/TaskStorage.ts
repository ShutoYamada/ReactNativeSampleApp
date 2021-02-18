import storage from './storage';
import {Task} from '../modules/Tasks';

const KEY: string = 'task';

export default class TaskStorage {
  static load = async (): Promise<Task[]> => {
    const taskList: Task[] = await storage
      .load({key: KEY})
      .then((data: Task[]) => {
        return data;
      })
      .catch(() => {return []});
    return taskList;
  }

  static async save(data: Task[]) {
    await storage.save({
      key: KEY,
      data: data,
    });
  }
}
