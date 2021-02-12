import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { View } from 'react-native';
import {TaskActions, Task, TaskModal, TaskList} from '../index';
import {Main, Fab} from '../../Commons'
import {RootState} from '../../../Store';

const TaskScreen: React.FC = () => {
  const list: Task[] = useSelector(
    (state: RootState) => state?.task?.list
  );
  
  const dispatch = useDispatch();
  const createTask = useCallback(() => {
    //const newTask: Task = new Task();
    dispatch(TaskActions.openModal({checked: false, name: "hoge"}));
  }, [dispatch]);

  return (
    <Main>
      <TaskList taskList={list} />
      <Fab onPressFab={createTask} />
      <TaskModal />
    </Main>
  );
};

export default TaskScreen;
