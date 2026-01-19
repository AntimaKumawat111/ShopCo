import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import UseTheme from '../helper/color';

export default function Dashboard() {
  const theme = UseTheme();
  const styles = createStyle(theme);

  const hoverShop = () => {};
  const hoverSale = () => {};
  const hoverNewArrivals = () => {};
  const hoverBrands = () => {};
  const handleClick = () => {};

  return (
    <>
      <View style={styles.container}>
        <Text>Sign up and get 20% off to your first orpder.</Text>
        <Text>Sign up now</Text>
        <View>
          <Text>Shop.Co</Text>
          <View></View>
        </View>
        <View>
          <Pressable onPress={hoverShop}>
            <Text>Shop</Text>
          </Pressable>
          <Pressable onPress={hoverSale}>
            <Text>On Sale</Text>
          </Pressable>
          <Pressable onPress={hoverNewArrivals}>
            <Text>New Arrivals</Text>
          </Pressable>
          <Pressable onPress={hoverBrands}>
            <Text>Brands</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const createStyle = (theme: any) => {
  return StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: 'red',
    },
    btnContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
};
