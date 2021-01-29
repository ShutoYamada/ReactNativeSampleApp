import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BlurView} from '@react-native-community/blur';
import Task from '../objects/Task';

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
  border-color: #00a960;
  border-width: 2px;
  border-radius: 10px;
  padding: 8px;
  margin-left: 1%;
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
    <BlurCard blurAmount={1} blurType="light">
      <Check>
        <Icon name="check" style={{color: '#00a960', fontSize: 16}} />
      </Check>
      <TaskContent>
        <Text style={{color: '#FFF', fontSize: 24}}>{task.name}</Text>
      </TaskContent>
    </BlurCard>
  );
};

export default TaskCard;
