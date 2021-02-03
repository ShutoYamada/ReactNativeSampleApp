import React from 'react';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import {BlurView} from '@react-native-community/blur';
import {InactiveColor} from '../../../constants';

const BlurContent = styled(BlurView)`
  width: 90%;
  height: 100px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 24px;
  color: ${InactiveColor};
`;

type Props = {};

const TaskModal: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  return (
    <Modal isVisible={false} hasBackdrop={false} style={{alignItems: 'center'}}>
      <BlurContent blurAmount={8} blurType="light">
        <Text>Overlay Text</Text>
      </BlurContent>
    </Modal>
  );
};

export default TaskModal;
