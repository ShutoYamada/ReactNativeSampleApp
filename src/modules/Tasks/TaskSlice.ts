import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TaskState from './TaskState';
import Task from './objects/Task';

const initialState: TaskState = {
    detail: null,
    dispModal: false,
    list: [],
}

const TaskSlice = createSlice({
    name: 'task',
    initialState: initialState,
    reducers: {
        /** タスク追加アクション */
        addList: (state: TaskState, action: PayloadAction<Task>) => {
            state.list = [...state.list, action.payload];
        },
        /** 詳細タスク設定アクション */
         // #F0F 使わないかも
        setDetail: (state: TaskState, action: PayloadAction<Task>) => {
            state.detail = action.payload;
        },
        /** モーダルを開くアクション */
        openModal: (state: TaskState, action: PayloadAction<Task>) => {
            state.dispModal = true;
            state.detail = action.payload;
        },
        /** モーダルを閉じるアクション */
        closeModal: (state: TaskState) => {
            state.dispModal = false;
            state.detail = null;
        }
    }
});

export const TaskActions = TaskSlice.actions;
export const TaskReducer = TaskSlice.reducer;

export default TaskSlice;