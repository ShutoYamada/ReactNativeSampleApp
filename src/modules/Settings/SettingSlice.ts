import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SettingState from './SettingState';

const initialState: SettingState = new SettingState();

const TaskSlice = createSlice({
    name: 'task',
    initialState: initialState,
    reducers: {
        /** 一覧タスク設定アクション */
        setSetting: (state: SettingState, action: PayloadAction<SettingState>) => ({
            ...state,
            ...action.payload,
        }),
    }
});

export const TaskActions = TaskSlice.actions;
export const TaskReducer = TaskSlice.reducer;

export default TaskSlice;