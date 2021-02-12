import Task from './objects/Task';

class TaskState {
    /** タスク一覧 */
    list: Task[] = [
        {name: 'Some Task1', checked: true},
        {name: 'Some Task2', checked: false},
        {name: 'Some Task3', checked: false},
        {name: 'Some Task4', checked: true},
        {name: 'Some Task5', checked: true},
        {name: 'Some Task6', checked: false},
        {name: 'Some Task8', checked: true},
        {name: 'Some Task9', checked: true},
        {name: 'Some Task10', checked: true},
        {name: 'Some Task11', checked: true},
        {name: 'Some Task12', checked: true},
        {name: 'Some Task13', checked: true},
        {name: 'Some Task14', checked: true},
        {name: 'Some Task15', checked: true},
      ];
    /** タスク詳細 */
    detail: Task | null = null;
    /** 詳細モーダル表示 */
    dispModal: boolean = false;
}

export default TaskState;