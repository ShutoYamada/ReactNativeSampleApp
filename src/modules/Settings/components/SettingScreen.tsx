import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {Main, Fab, FabWrap, BlurContent} from '../../Commons';
import {RootState} from '../../../Store';
import {Text} from 'react-native';

const SettingScreen: React.FC = () => {
  const navigation = useNavigation();
  const back = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <Main>
      <BlurContent blurAmount={1} blurType="light">
        <Text>hoge</Text>
      </BlurContent>
      <FabWrap>
        <Fab onPressFab={back} iconName={'arrow-left'} />
      </FabWrap>
    </Main>
  );
};

export default SettingScreen;
