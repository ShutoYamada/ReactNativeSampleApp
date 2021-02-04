import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TaskState from './TaskState';
import Task from './objects/Task';

const taskSlice = createSlice({
    name: 'task',
    initialState: new TaskState(),
    reducers: {
        addList: (state: TaskState, action: PayloadAction<Task>) => {
            state.list = [...state.list, action.payload];
        }
    }
})