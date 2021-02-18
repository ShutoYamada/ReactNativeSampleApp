import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {TaskActions, Task, TaskModal, TaskList} from '../index';
import {Main, Fab} from '../../Commons';
import {RootState} from '../../../Store';
import {generateNewTask, loadTaskList} from '../TaskUtil';

const TaskScreen: React.FC = () => {
  const list: Task[] = useSelector((state: RootState) => state?.task?.list);

  const dispatch = useDispatch();
  const createTask = useCallback(() => {
    dispatch(TaskActions.createTask(generateNewTask(list)));
  }, [dispatch]);

  useEffect(() => {
    loadTaskList().then((all: Task[]) => {
      dispatch(TaskActions.setList(all));
    });
  }, []);

  return (
    <Main>
      <TaskList taskList={list} />
      <Fab onPressFab={createTask} />
      <TaskModal />
    </Main>
  );
};

export default TaskScreen;
