import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {TaskActions, Task, TaskModal, TaskList} from '../index';
import {Main, Fab} from '../../Commons';
import {RootState} from '../../../Store';

const TaskScreen: React.FC = () => {
  const list: Task[] = useSelector((state: RootState) => state?.task?.list);

  const dispatch = useDispatch();
  const createTask = useCallback(() => {
    dispatch(
      TaskActions.openModal({
        name: 'hoge',
        comment: 'some task',
        checked: false,
      }),
    );
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
