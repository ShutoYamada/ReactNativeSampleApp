import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {TaskActions, Task, TaskModal, TaskList} from '../';
import {Main, Fab, FabWrap} from '../../Commons';
import {RootState} from '../../../Store';
import {generateNewTask, loadTaskList} from '../TaskUtil';

const TaskScreen: React.FC = (props) => {
  const list: Task[] = useSelector((state: RootState) => state?.task?.list);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const createTask = useCallback(() => {
    dispatch(TaskActions.createTask(generateNewTask(list)));
  }, [dispatch]);
  const moveToSettingScreen = useCallback(() => {
    navigation.navigate('Setting');
  }, []);

  useEffect(() => {
    loadTaskList().then((all: Task[]) => {
      dispatch(TaskActions.setList(all));
    });
  }, []);

  return (
    <Main>
      <TaskList taskList={list} />
      <FabWrap>
        <Fab onPressFab={moveToSettingScreen} iconName={'cog'} />
        <Fab onPressFab={createTask} iconName={'plus'} />
      </FabWrap>
      <TaskModal />
    </Main>
  );
};

export default TaskScreen;
