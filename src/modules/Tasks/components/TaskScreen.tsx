import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {TaskActions, Task, TaskModal, TaskList} from '../index';
import {Main, Fab} from '../../Commons';
import {RootState} from '../../../Store';
import {generateNewTask, loadTaskList} from '../TaskUtil';

const TaskScreen: React.FC = (props) => {
  const list: Task[] = useSelector((state: RootState) => state?.task?.list);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const createTask = useCallback(() => {
    dispatch(TaskActions.createTask(generateNewTask(list)));

    // #F0F TODO これで遷移できる
    //navigation.navigate('Setting');
  }, [dispatch]);

  useEffect(() => {
    loadTaskList().then((all: Task[]) => {
      dispatch(TaskActions.setList(all));
    });
  }, []);

  return (
    <Main>
      <TaskList taskList={list} />
      <Fab onPressFab={createTask} iconName={'plus'} />
      <TaskModal />
    </Main>
  );
};

export default TaskScreen;
