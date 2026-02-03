import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {DarkTheme, useTheme} from '../../helper/color';
import BaseLayout from '../../components/BaseLayout';
import {BounceInDown} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BackBlackIcon from '../assets/svg/backBlackIcon';
import BackWhiteIcon from '../assets/svg/backWhiteIcon';
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_LIGHT,
  FONT_FAMILY_MEDIUM,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_SEMI_BOLD,
  Font_Size_12,
  Font_Size_13,
  Font_Size_16,
  Font_Size_22,
  Font_Size_24,
  Font_Size_26,
  Font_Size_30,
} from '../../helper/font';
import ProductCard from '../../components/card/ProductCard';
import {DUMMYCARDDATA} from '../../helper/dummyData';
import Header from '../../components/header';
import {useNavigation} from '@react-navigation/native';

function AllProducts() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();

  const handlePress = (item: any) => {
    navigation.navigate('ProductDetails', {item} as never);
  };
  const renderItem = ({item}: any) => {
    return (
      <ProductCard
        name={item.name}
        price={item.price}
        image={item.image}
        rating={item.rating}
        sale={item.sale}
        totalOrders={item.totalOrders}
        onPress={() => handlePress(item)}
      />
    );
  };

  return (
    <>
      <BaseLayout>
        <Header title="All Products" />
        <View style={styles.container}>
          <View style={{marginVertical: 10}}>
            <FlatList
              data={DUMMYCARDDATA}
              keyExtractor={item => item.id}
              renderItem={renderItem}
              numColumns={2}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </BaseLayout>
    </>
  );
}

const createStyles = (theme: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
    },
  });
};

export default AllProducts;
