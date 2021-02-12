import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import Task from '../objects/Task';
import TaskCard from './TaskCard';

const Wrapper = styled.View`
width: 90%; 
height: auto
`

// dataのジェネリクスを解決するため↓のような書き方にする必要あり
const List = styled(FlatList as new () => FlatList<Task>)`
width: 100%;
height: 100%;
padding: 2%;
`

type Props = {
  taskList: Task[]
};

const TaskList: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const {taskList} = props;
  return (
    <Wrapper>
        <List
            showsVerticalScrollIndicator={false}
            data={taskList}
            keyExtractor={(item) => item.name}
            renderItem={({item}) => {
              return <TaskCard task={item} />;
            }}
          />
    </Wrapper>
  );
};

export default TaskList;
