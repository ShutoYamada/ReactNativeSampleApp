import Task from './objects/Task';
import TaskForm from './objects/TaskForm';
import TaskCard from './components/TaskCard';
import TaskCheckBox from './components/TaskCheckBox';
import TaskModal from './components/TaskModal';
import TaskList from './components/TaskList';
import TaskScreen from './components/TaskScreen';
import TaskState, { initialState } from './TaskState';
import {TaskActions, TaskReducer} from './TaskSlice';

export {
    Task,
    TaskForm,
    TaskState,
    initialState,
    TaskActions,
    TaskReducer,
    TaskCard,
    TaskCheckBox,
    TaskModal,
    TaskList,
    TaskScreen,
}