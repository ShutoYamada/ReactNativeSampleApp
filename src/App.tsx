import React from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Fab, Main} from './modules/Commons';
import store from './Store';
import {Task, TaskModal, TaskList} from './modules/Tasks';
import TaskScreen from './modules/Tasks/components/TaskScreen';

const Stack = createStackNavigator();

/**
 * App
 */
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={TaskScreen} options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
};

export default App;
