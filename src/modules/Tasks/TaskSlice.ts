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
        setDetail: (state: TaskState, action: PayloadAction<Task>) => {
            state.detail = action.payload;
        },
        /** モーダル表示フラグ制御アクション */
        setDispModal: (state: TaskState, action: PayloadAction<boolean>) => {
            console.log("action");
            console.log(action);
            console.log(state);
            state.dispModal = action.payload;
        }
    }
});

export const TaskActions = TaskSlice.actions;
export const TaskReducer = TaskSlice.reducer;

export default TaskSlice;