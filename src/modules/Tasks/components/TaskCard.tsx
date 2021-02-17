import React from 'react';
import Swipeout from 'react-native-swipeout';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {BlurView} from '@react-native-community/blur';
import Task from '../objects/Task';
import TaskCheckBox from './TaskCheckBox';

const BlurCard = styled(BlurView)`
  width: 100%;
  border-radius: 20px;
  margin-top: 1%;
  margin-bottom: 1%;
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

const Check = styled.TouchableOpacity`
  border-width: 2px;
  border-radius: 10px;
  padding: 8px;
  margin-left: 1%;
`;

const Checked = styled.TouchableOpacity`
  ${Check}
  border-color: #00a960;
`;

const TaskContent = styled.View`
  margin-left: 2%;
  width: 100%;
`;

type Props = {
  task: Task;
};

const TaskCard: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const {task} = props;
  return (
    <Swipeout
      style={{backgroundColor: 'transparent'}}
      right={[
        {
          text: 'Delete',
          type: 'delete',
          onPress: () => {
            console.log('del');
          },
        },
      ]}>
      <BlurCard blurAmount={1} blurType="light">
        <TaskCheckBox isActive={task.checked} />
        <TaskContent>
          <Text style={{color: '#FFF', fontSize: 24}}>{task.name}</Text>
        </TaskContent>
      </BlurCard>
    </Swipeout>
  );
};

export default TaskCard;
