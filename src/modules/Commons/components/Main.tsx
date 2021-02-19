import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RootState} from '../../../Store';
import {loadSetting} from '../../Settings/SettingUtil';
import {SettingState, SettingActions} from '../../Settings';

const Main: React.FC = (props) => {
  const {children} = props;
  const dispatch = useDispatch();
  const selectedBgColor: string[] = useSelector(
    (state: RootState) => state?.setting?.bgColor,
  );

  useEffect(() => {
    loadSetting().then((setting: SettingState) => {
      dispatch(SettingActions.setSetting(setting));
    });
  }, []);

  return (
    <LinearGradient
      start={{x: 0, y: 0.75}}
      end={{x: 1, y: 0.25}}
      colors={selectedBgColor}
      style={{height: '100%'}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Main;
