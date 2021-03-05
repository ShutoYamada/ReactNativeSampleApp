import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {TaskActions, Task} from '../';
import TaskList from './TaskList';
import TaskModal from './TaskModal';
import {Main, Fab, FabWrap} from '../../Commons';
import {RootState} from '../../../Store';
import {generateNewTask, loadTaskList} from '../TaskUtil';

/**
 * タスク画面
 */
const TaskScreen: React.FC = () => {
  // タスク一覧をStoreから取得
  const list: Task[] = useSelector((state: RootState) => state?.task?.list);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // タスク作成処理
  const createTask = useCallback(() => {
    dispatch(TaskActions.createTask(generateNewTask(list)));
  }, [dispatch]);
  // 設定画面への遷移処理
  const moveToSettingScreen = useCallback(() => {
    navigation.navigate('Setting');
  }, []);

  // 初回描画時処理
  useEffect(() => {
    // Storageからタスク一覧を読み込み
    loadTaskList().then((all: Task[]) => {
      // Storeに読み込んだ内容を反映させる
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
