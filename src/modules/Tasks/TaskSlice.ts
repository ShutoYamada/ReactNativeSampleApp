import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TaskState, { initialState } from './TaskState';
import Task from './objects/Task';

const TaskSlice = createSlice({
    name: 'task',
    initialState: initialState,
    reducers: {
        /** 一覧タスク設定アクション */
        setList: (state: TaskState, action: PayloadAction<Task[]>) => ({
            ...state,
            list: action.payload,
        }),
        /** 詳細タスク設定アクション */
        setDetail: (state: TaskState, action: PayloadAction<Task>) => ({
            ...state,
            detail: action.payload,
            dispModal: true,
            isNewTask: false,
        }),
        /** タスク新規作成アクション */
        createTask: (state: TaskState, action: PayloadAction<Task>) => ({
            ...state,
            detail: action.payload,
            dispModal: true,
            isNewTask: true,
        }),
        /** モーダルを閉じるアクション */
        closeModal: (state: TaskState) => ({
            ...state,
            detail: null,
            dispModal: false,
            isNewTask: false,
        })
    }
});

export const TaskActions = TaskSlice.actions;
export const TaskReducer = TaskSlice.reducer;

export default TaskSlice;