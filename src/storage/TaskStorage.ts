import storage from './Storage';
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

//   static async save(year, month, date, taskList) {
//     await storage.save({
//       key: `${year}-${month}-${date}`,
//       data: {taskList: taskList},
//     });
//   }

//   static remove(year, month, date) {
//     storage.remove({key: `${year}-${month}-${date}`});
//   }

//   static async addTask(year, month, date, title, description, time) {
//     const taskList = await this.load(year, month, date);
//     const newTask = {
//       title: title,
//       description: description,
//       time: time,
//     };
//     const newTaskList = taskList.concat([newTask]);
//     await this.save(year, month, date, newTaskList);
//   }

}
