import React, {useCallback} from 'react';
import Swipeout from 'react-native-swipeout';
import styled from 'styled-components/native';
import {BlurView} from '@react-native-community/blur';
import Task from '../objects/Task';
import TaskCheckBox from './TaskCheckBox';
import {useDispatch, useSelector} from 'react-redux';
import {TaskActions} from '..';
import {
  reflectDeleteToList,
  reflectEditToList,
  saveTaskList,
} from '../TaskUtil';
import {RootState} from '../../../Store';
import { Alert } from 'react-native';

const BlurCard = styled(BlurView)`
  width: 100%;
  border-radius: 20px;
  margin-top: 1%;
  margin-bottom: 1%;
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

const TaskContent = styled.TouchableOpacity`
  margin-left: 2%;
  width: 100%;
`;

const Label = styled.Text`
  color: #fff;
  font-size: 24px;
`;

type Props = {
  task: Task;
};

const TaskCard: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const {task} = props;
  const list: Task[] = useSelector((state: RootState) => state?.task?.list);
  const dispatch = useDispatch();
  const dispDetail = useCallback(() => {
    dispatch(TaskActions.setDetail(task));
  }, [dispatch]);

  const deleteTask = useCallback(() => {
    Alert.alert('確認','タスクを削除します。\r\nよろしいですか？', [
      {
        text: 'はい',
        onPress: () => {
          console.log("OK");

          const deletedList: Task[] = reflectDeleteToList(list, task.id);
          // リストを保存する
          saveTaskList(deletedList);
          // リストをStoreに反映させる
          dispatch(TaskActions.setList(deletedList));
        }
      },
      {
        text: 'いいえ',
      }
    ])
  }, []);

  const checkTask = useCallback(() => {
    const newTask: Task = {
      ...task,
      checked: !task.checked,
    };
    const mergedList: Task[] = reflectEditToList(list, newTask, false);
    // リストを保存する
    saveTaskList(mergedList);
    // リストをStoreに反映させる
    dispatch(TaskActions.setList(mergedList));
  }, [list]);

  return (
    <Swipeout
      style={{backgroundColor: 'transparent'}}
      right={[
        {
          text: 'Delete',
          type: 'delete',
          onPress: deleteTask,
        },
      ]}>
      <BlurCard blurAmount={1} blurType='light'>
        <TaskCheckBox isActive={task.checked} onCheck={checkTask} />
        <TaskContent onPress={dispDetail}>
          <Label>{task.name}</Label>
        </TaskContent>
      </BlurCard>
    </Swipeout>
  );
};

export default TaskCard;
