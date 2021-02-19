import React from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store from './Store';
import {TaskScreen} from './modules/Tasks';
import {SettingScreen} from './modules/Settings';

const Stack = createStackNavigator();

/**
 * App
 */
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={TaskScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Setting"
            component={SettingScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
