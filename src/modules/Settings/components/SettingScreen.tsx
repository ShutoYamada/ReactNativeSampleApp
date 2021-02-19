import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {Main, Fab, FabWrap, BlurContent} from '../../Commons';
import {GradationCard} from '../';
import {
  PurpleGradation,
  PinkGradation,
  SunsetGradation,
  RedGradation,
  GreenGradation,
  BlueGradation,
} from '../../../constants';

const GradationRow = styled.View`
  margin-top: 2%;
  margin-bottom: 2%;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const SettingScreen: React.FC = () => {
  const navigation = useNavigation();
  const back = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <Main>
      <BlurContent blurAmount={1} blurType="light">
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
