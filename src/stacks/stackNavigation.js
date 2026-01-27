import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';
import OnSale from '../screens/OnSale';

const Stack = createNativeStackNavigator();

function TestScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{borderWidth: 1, color: 'red'}}>OK</Text>
    </View>
  );
}

export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Dashboard} />
      <Stack.Screen name="OnSale" component={OnSale} />
    </Stack.Navigator>
  );
}
