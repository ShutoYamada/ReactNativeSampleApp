import React from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TaskActions} from '../../Tasks';

type Props = {
  onPressFab?: () => void;
};

const ToucableCircle = styled.TouchableOpacity`
  position: absolute;
  bottom: 4%;
  right: 5%;
  background-color: #fff;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  justify-content: center;
  align-items: center;
`;

const Fab: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
  const {onPressFab} = props;
  const dispatch = useDispatch();
  return (
    <ToucableCircle onPress={onPressFab}>
      <Icon name="plus" style={{color: '#9890e3', fontSize: 24}} />
    </ToucableCircle>
  );
};

export default Fab;
