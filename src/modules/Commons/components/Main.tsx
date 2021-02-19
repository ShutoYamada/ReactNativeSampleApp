import React from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RootState} from '../../../Store';

const Main: React.FC = (props) => {
  const {children} = props;
  const selectedBgColor: string[] = useSelector(
    (state: RootState) => state?.setting?.bgColor,
  );

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
