import React, {useCallback} from 'react';
import Swipeout from 'react-native-swipeout';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {BlurView} from '@react-native-community/blur';
import Task from '../objects/Task';
import TaskCheckBox from './TaskCheckBox';
import {useDispatch} from 'react-redux';
import {TaskActions} from '..';

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
  const dispatch = useDispatch();
  const dispDetail = useCallback(() => {
    dispatch(TaskActions.openModal(task));
  }, [dispatch]);
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
        <TaskContent onPress={dispDetail}>
          <Label>{task.name}</Label>
        </TaskContent>
      </BlurCard>
    </Swipeout>
  );
};

export default TaskCard;
