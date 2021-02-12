import React from 'react';
import {Provider} from 'react-redux';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Fab} from './modules/Commons';
import store from './Store';
import {Task, TaskModal, TaskList} from './modules/Tasks';

/**
 * App
 */
const App: React.FC = () => {
  const data: Task[] = [
    {name: 'Some Task1', checked: true},
    {name: 'Some Task2', checked: false},
    {name: 'Some Task3', checked: false},
    {name: 'Some Task4', checked: true},
    {name: 'Some Task5', checked: true},
    {name: 'Some Task6', checked: false},
    {name: 'Some Task8', checked: true},
    {name: 'Some Task9', checked: true},
    {name: 'Some Task10', checked: true},
    {name: 'Some Task11', checked: true},
    {name: 'Some Task12', checked: true},
    {name: 'Some Task13', checked: true},
    {name: 'Some Task14', checked: true},
    {name: 'Some Task15', checked: true},
  ];

  return (
    <Provider store={store}>
    <LinearGradient
      start={{x: 0, y: 0.75}}
      end={{x: 1, y: 0.25}}
      colors={['#9890e3', '#f093fb']}
      style={{height: '100%'}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        <TaskList taskList={data} />
        <Fab />
      </SafeAreaView>
      <TaskModal />
    </LinearGradient>
    </Provider>
  );
};

export default App;
