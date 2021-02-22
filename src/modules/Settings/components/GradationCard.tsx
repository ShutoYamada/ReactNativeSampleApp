import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {RootState} from '../../../Store';
import {ActiveColor} from '../../../constants';
import {SettingActions, SettingState} from '..';
import {saveSetting} from '../SettingUtil';

const Gradation = styled(LinearGradient)`
  width: 100%;
  padding-top: 100%;
`;

const GradationWrap = styled.TouchableOpacity`
  width: 30%;
`;

const SelectedIcon = styled(Icon)`
  position: absolute;
  top: 2%;
  right: 2%;
  font-size: 20px
  color: ${ActiveColor};
`;

type Props = {
  colors: string[];
};

const GradationCard: React.FC<Props> = (props) => {
  const {colors} = props;
  const settingState: SettingState = useSelector(
    (state: RootState) => state?.setting,
  );
  const selectedBgColor: string[] = useSelector(
    (state: RootState) => state?.setting?.bgColor,
  );
  const dispatch = useDispatch();
  const onPress = useCallback(() => {
    const newSettingState: SettingState = {
      ...settingState,
      bgColor: colors,
    };
    dispatch(SettingActions.setSetting(newSettingState));
    saveSetting(newSettingState);
  }, [settingState, colors, dispatch]);
  const isSelected: boolean = colors === selectedBgColor;

  return (
    <GradationWrap onPress={onPress}>
      <Gradation start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={colors}>
        {isSelected ? <SelectedIcon name='check' /> : null}
      </Gradation>
    </GradationWrap>
  );
};

export default GradationCard;
