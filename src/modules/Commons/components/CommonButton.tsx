import React from 'react';
import styled from 'styled-components/native';
import {ActiveColor, InactiveColor} from '../../../constants';

interface ButtonWrapProps {
  primary: boolean;
}

const Wrap = styled.TouchableOpacity<ButtonWrapProps>`
  width: 50%;
  padding: 12px;
  border-radius: 10px;
  background-color: ${({primary}) => (primary ? ActiveColor : InactiveColor)};
`;

const Text = styled.Text<ButtonWrapProps>`
  font-size: 16px;
  text-align: center;
  color: ${({primary}) => (primary ? '#FFF' : '#FFF')};
`;

interface Props {
  onPress: () => void;
  text: string;
  primary: boolean;
}

const CommonButton: React.FC<Props> = (props: Props) => {
  const {onPress, text, primary} = props;
  return (
    <Wrap onPress={onPress} primary={primary}>
      <Text primary={primary}>{text}</Text>
    </Wrap>
  );
};
export default CommonButton;
