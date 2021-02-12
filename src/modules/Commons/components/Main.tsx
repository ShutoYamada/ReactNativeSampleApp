import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Main: React.FC = (props) => {
    const {children} = props;

  return (
    <LinearGradient
      start={{x: 0, y: 0.75}}
      end={{x: 1, y: 0.25}}
      colors={['#9890e3', '#f093fb']}
      style={{height: '100%'}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Main;
