import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { TaskState, TaskReducer } from './modules/Tasks';
import { SettingState, SettingReducer } from './modules/Settings';

/**
 * アプリ全体のState
 */
export class RootState {
    task: TaskState = new TaskState();
    setting: SettingState = new SettingState();
}

/**
 * 各modulesで生成したReducerを結合
 */
const reducer = combineReducers<RootState>({
    task: TaskReducer,
    setting: SettingReducer,
});

/**
 * ReducerからStoreを生成
 */
const store = configureStore({
    reducer: reducer
});

export default store;