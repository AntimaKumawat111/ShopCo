import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard/Dashboard';
import OnSale from '../screens/OnSale/OnSale';
import ProductDetails from '../screens/ProductDetails/ProductDetails';
import AllProducts from '../screens/AllProducts/AllProducts';
import Cart from '../screens/Cart/Cart';
import Checkout from '../screens/Checkout/Checkout';
import {OrderConfirm} from '../screens/OrderConfirm/OrderConfirm';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Dashboard} />
      <Stack.Screen name="OnSale" component={OnSale} />
      <Stack.Screen name="AllProducts" component={AllProducts} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="OrderConfirm" component={OrderConfirm} />
    </Stack.Navigator>
  );
}
