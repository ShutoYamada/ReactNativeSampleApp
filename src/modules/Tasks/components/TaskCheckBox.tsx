import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ActiveColor, InactiveColor} from '../../../constants';

/**
 * チェックボックスラップ用コンポーネント
 */
const CheckWrap = styled.TouchableOpacity`
  border-width: 2px;
  border-radius: 10px;
  padding: 8px;
  margin-left: 1%;
`;

/**
 * チェックアイコン
 */
const CheckIcon = styled(Icon)`
  font-size: 16px;
`;

/**
 * Props
 */
type Props = {
  isActive: boolean;
  onCheck: () => void;
};

/**
 * タスクチェックボックス
 * @param props プロパティ
 */
const TaskCheckBox: React.FC<Props> = (props) => {
  const {isActive, onCheck} = props;
  const color: string = isActive ? ActiveColor : InactiveColor;

  return (
    <CheckWrap style={{borderColor: color}} onPress={onCheck}>
      <CheckIcon name='check' style={{color: color}} />
    </CheckWrap>
  );
};

export default TaskCheckBox;
