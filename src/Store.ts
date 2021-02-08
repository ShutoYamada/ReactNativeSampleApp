import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { TaskState, TaskReducer } from './modules/Tasks';

/**
 * アプリ全体のState
 */
export class RootState {
    task: TaskState = new TaskState();
}

/**
 * 各modulesで生成したReducerを結合
 */
const reducer = combineReducers<RootState>({
    task: TaskReducer,
});

/**
 * ReducerからStoreを生成
 */
const store = configureStore({
    reducer: reducer
});

export default store;