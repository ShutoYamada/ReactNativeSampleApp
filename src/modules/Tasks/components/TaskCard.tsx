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
import {Alert} from 'react-native';

/**
 * ぼかし
 */
const BlurCard = styled(BlurView)`
  width: 100%;
  border-radius: 20px;
  margin-top: 1%;
  margin-bottom: 1%;
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

/**
 * タスク情報表示
 */
const TaskContent = styled.TouchableOpacity`
  margin-left: 2%;
  width: 100%;
`;

/**
 * ラベル
 */
const Label = styled.Text`
  color: #fff;
  font-size: 24px;
`;

/**
 * Props
 */
type Props = {
  /** 表示するタスク */
  task: Task;
};

/**
 * タスクカード
 * @param props プロパティ
 */
const TaskCard: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const {task} = props;
  const list: Task[] = useSelector((state: RootState) => state?.task?.list);
  const dispatch = useDispatch();
  // タスクタップ時処理
  const onPressTask = useCallback(() => {
    // モーダルを表示する
    dispatch(TaskActions.setDetail(task));
  }, [dispatch]);

  // タスク削除処理
  const deleteTask = useCallback(() => {
    // 確認して「OK」なら削除する
    Alert.alert('確認', 'タスクを削除します。\r\nよろしいですか？', [
      {
        text: 'はい',
        onPress: () => {
          // タスク全件から選択したタスクを除いたリストを取得
          const deletedList: Task[] = reflectDeleteToList(list, task.id);
          // リストを保存する
          saveTaskList(deletedList);
          // リストをStoreに反映させる
          dispatch(TaskActions.setList(deletedList));
        },
      },
      {
        // 「いいえ」の時はなにもせず終了
        text: 'いいえ',
      },
    ]);
  }, []);

  // タスクチェック時処理
  const checkTask = useCallback(() => {
    // 表示しているタスクのcheckedが反転した状態にする
    const newTask: Task = {
      ...task,
      checked: !task.checked,
    };
    // タスク全件にチェックした内容を反映させたリストを取得
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
          // 右スワイプした際に表示するメニュー名
          text: 'Delete',
          type: 'delete',
          // スワイプメニューをタップした際に行う処理を設定
          onPress: deleteTask,
        },
      ]}>
      <BlurCard blurAmount={1} blurType='light'>
        <TaskCheckBox checked={task.checked} onCheck={checkTask} />
        <TaskContent onPress={onPressTask}>
          <Label>{task.name}</Label>
        </TaskContent>
      </BlurCard>
    </Swipeout>
  );
};

export default TaskCard;
