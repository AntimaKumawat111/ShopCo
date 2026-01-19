import React from 'react';
import {SafeAreaView, } from 'react-native';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/helper/toast';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/stacks/stackNavigation';

function App() {
  return (
    <>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <RootStack />
          <Toast config={toastConfig} />
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
}


export default App;
