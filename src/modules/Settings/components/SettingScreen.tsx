import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {Main, Fab, FabWrap, BlurContent} from '../../Commons';
import {RootState} from '../../../Store';
import {GradationCard, SettingActions} from '../';
import {Text, View} from 'react-native';
import {
  PurpleGradation,
  PinkGradation,
  SunsetGradation,
  RedGradation,
  GreenGradation,
  BlueGradation,
} from '../../../constants';
import {loadSetting} from '../SettingUtil';
import {SettingState} from '../';

const GradationRow = styled.View`
  margin-top: 2%;
  margin-bottom: 2%;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const SettingScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const back = useCallback(() => {
    navigation.goBack();
  }, []);

  useEffect(() => {
    loadSetting().then((setting: SettingState) => {
      dispatch(SettingActions.setSetting(setting));
    });
  }, []);

  return (
    <Main>
      <BlurContent blurAmount={1} blurType="light">
        <Text>hoge</Text>
        <GradationRow>
          <GradationCard colors={GreenGradation} />
          <GradationCard colors={RedGradation} />
          <GradationCard colors={BlueGradation} />
        </GradationRow>
        <GradationRow>
          <GradationCard colors={PurpleGradation} />
          <GradationCard colors={PinkGradation} />
          <GradationCard colors={SunsetGradation} />
        </GradationRow>
      </BlurContent>
      <FabWrap>
        <Fab onPressFab={back} iconName={'arrow-left'} />
      </FabWrap>
    </Main>
  );
};

export default SettingScreen;
