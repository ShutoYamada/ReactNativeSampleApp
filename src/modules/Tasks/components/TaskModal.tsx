import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import {BlurView} from '@react-native-community/blur';
import {InactiveColor} from '../../../constants';
import {RootState} from '../../../Store';
import {TaskActions} from '../index';
import {Button, TouchableOpacity, View} from 'react-native';

const BlurContent = styled(BlurView)`
  width: 90%;
  height: 100px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 6%;

  border-width: 0.5px;
  border-radius: 10px;
  border-color: #fff;
  border-bottom-width: 0px;
`;

const Text = styled.Text`
  font-size: 24px;
  color: ${InactiveColor};
`;

type Props = {};

const TaskModal: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const dispModal: boolean = useSelector(
    (state: RootState) => state?.task?.dispModal,
  );
  const dispatch = useDispatch();

  return (
    <Modal
      isVisible={dispModal}
      hasBackdrop={false}
      style={{alignItems: 'center'}}>
      <BlurContent blurAmount={8} blurType="light">
        <View style={{width: '100%', alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="close" style={{color: '#EC8AA0', fontSize: 24}} />
          </TouchableOpacity>
        </View>
        <Text style={{width: '100%', backgroundColor: 'red'}}>
          Overlay Text
        </Text>
        <Button
          title="Close"
          onPress={() => {
            
          }}></Button>
      </BlurContent>
    </Modal>
  );
};

export default TaskModal;
