import Task from './objects/Task';

class TaskState {
    /** タスク一覧 */
    list: Task[] = [
        {name: 'Some Task1', comment: 'a', checked: true},
        {name: 'Some Task2', comment: 'b', checked: false},
        {name: 'Some Task3', comment: 'c', checked: false},
        {name: 'Some Task4', comment: 'd', checked: true},
        {name: 'Some Task5', comment: 'e', checked: true},
        {name: 'Some Task6', comment: 'f', checked: false},
        {name: 'Some Task8', comment: 'g', checked: true},
        {name: 'Some Task9', comment: 'h', checked: true},
        {name: 'Some Task10', comment: 'i', checked: true},
        {name: 'Some Task11', comment: 'j', checked: true},
        {name: 'Some Task12', comment: 'k', checked: true},
        {name: 'Some Task13', comment: 'l', checked: true},
        {name: 'Some Task14', comment: 'm', checked: true},
        {name: 'Some Task15', comment: 'n', checked: true},
      ];
    /** タスク詳細 */
    detail: Task | null = null;
    /** 詳細モーダル表示 */
    dispModal: boolean = false;
}

export default TaskState;