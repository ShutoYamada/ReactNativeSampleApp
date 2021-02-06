import Task from './objects/Task';

class TaskState {
    /** タスク一覧 */
    list: Task[] = [];
    /** タスク詳細 */
    detail: Task | null = null;
    /** 詳細モーダル表示 */
    dispModal: boolean = false;
}

export default TaskState;