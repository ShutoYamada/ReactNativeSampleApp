import Task from './objects/Task';

class TaskState {
    /** タスク一覧 */
    list: Task[] = [
        {id: 0, name: 'Some Task1', comment: 'a', checked: true},
        {id: 1, name: 'Some Task2', comment: 'b', checked: false},
        {id: 2, name: 'Some Task3', comment: 'c', checked: false},
        {id: 3, name: 'Some Task4', comment: 'd', checked: true},
        {id: 4, name: 'Some Task5', comment: 'e', checked: true},
        {id: 5, name: 'Some Task6', comment: 'f', checked: false},
        {id: 6, name: 'Some Task8', comment: 'g', checked: true},
        {id: 7, name: 'Some Task9', comment: 'h', checked: true},
        {id: 8, name: 'Some Task10', comment: 'i', checked: true},
        {id: 9, name: 'Some Task11', comment: 'j', checked: true},
        {id: 10, name: 'Some Task12', comment: 'k', checked: true},
        {id: 11, name: 'Some Task13', comment: 'l', checked: true},
        {id: 12, name: 'Some Task14', comment: 'm', checked: true},
        {id: 13, name: 'Some Task15', comment: 'n', checked: true},
      ];
    /** タスク詳細 */
    detail: Task | null = null;
    /** 詳細モーダル表示 */
    dispModal: boolean = false;
}

export default TaskState;