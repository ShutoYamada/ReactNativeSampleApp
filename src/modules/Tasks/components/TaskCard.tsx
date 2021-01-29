import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BlurView} from '@react-native-community/blur';
import Task from '../objects/Task';

type Props = {
  task: Task;
};

const TaskCard: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const {task} = props;
  return (
    <BlurView
      blurAmount={1}
      blurType="light"
      style={{
        width: '100%',
        borderRadius: 20,
        marginTop: '1%',
        marginBottom: '1%',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            borderColor: '#00a960',
            borderWidth: 2,
            borderRadius: 10,
            padding: 8,
            marginLeft: '1%',
          }}>
          <Icon name="check" style={{color: '#00a960', fontSize: 16}} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginLeft: '2%',
          width: '100%',
        }}>
        <Text style={{color: '#FFF', fontSize: 24}}>{task.name}</Text>
      </View>
    </BlurView>
  );
};

export default TaskCard;
