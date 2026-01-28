import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';
import OnSale from '../screens/OnSale';
import ProductDetails from '../screens/ProductDetails';
import AllProducts from '../screens/AllProducts';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Dashboard} />
      <Stack.Screen name="OnSale" component={OnSale} />
      <Stack.Screen name="AllProducts" component={AllProducts} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}
