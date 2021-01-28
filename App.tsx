import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';
import Modal from 'react-native-modal';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0.75}}
      end={{x: 1, y: 0.25}}
      colors={['#9890e3', '#f093fb']}
      style={{height: '100%'}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1, alignItems: 'center'}}>
        <BlurView
          blurAmount={1}
          blurType="light"
          style={{width: '90%', height: 'auto', borderRadius: 30}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{width: '100%', padding: '2%'}}
            data={[
              'a',
              'b',
              'c',
              'd',
              'e',
              'f',
              'g',
              'h',
              'i',
              'j',
              'k',
              'l',
              /*
              'm',
              'n',
              'o',
              'p',
              'q',
              */
            ]}
            keyExtractor={(d) => d}
            renderItem={() => {
              return (
                <View
                  style={{
                    width: '100%',
                    padding: 10,
                    flexDirection: 'row',
                    //justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <View style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center'}}
                      >
                    <TouchableOpacity style={{borderColor: '#E84557', borderWidth: 2, borderRadius: 10, padding: 8, marginRight: '1%'}}>
                      <Icon name="minus" style={{color: '#E84557', fontSize: 16 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderColor: '#65B54D', borderWidth: 2, borderRadius: 10, padding: 8, marginLeft: '1%'}}>
                      <Icon name="plus" style={{color: '#65B54D', fontSize: 16}} />
                    </TouchableOpacity>
                    </View>
                    <View style={{
                      marginLeft: '2%',
                      width: '100%'
                    }}>
                      <Text style={{color: '#FFF', fontSize: 24}}>Some Text(0/1)</Text>
                    </View>
                </View>
              );
            }}
          />
        </BlurView>
      </SafeAreaView>
      <Modal
        isVisible={false}
        hasBackdrop={false}
        style={{alignItems: 'center'}}>
        <BlurView
          blurAmount={1}
          blurType="light"
          style={{
            width: 300,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#333', fontSize: 24}}>Overlay Text</Text>
        </BlurView>
      </Modal>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
