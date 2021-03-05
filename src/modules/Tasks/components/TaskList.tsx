import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import Task from '../objects/Task';
import TaskCard from './TaskCard';

/**
 * リストのラップ用コンポーネント
 */
const Wrapper = styled.View`
  width: 90%;
  height: auto;
`;

/**
 * リスト
 */
const List = styled(FlatList as new () => FlatList<Task>)`
  width: 100%;
  height: 100%;
  padding: 2%;
`;

/**
 * Props
 */
type Props = {
  /** タスク全件 */
  taskList: Task[];
};

/**
 * タスク一覧
 * @param props プロパティ
 */
const TaskList: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const {taskList} = props;
  return (
    <Wrapper>
      <List
        showsVerticalScrollIndicator={false}
        data={taskList}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={({item}) => {
          return <TaskCard task={item} />;
        }}
      />
    </Wrapper>
  );
};

export default TaskList;
