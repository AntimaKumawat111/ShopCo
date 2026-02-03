import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../../helper/color';
import BaseLayout from '../../components/BaseLayout';
import {TouchableOpacity} from 'react-native-gesture-handler';
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

function OnSale() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();

  const handlePressView = () => {
    navigation.navigate('AllProducts' as never);
  };

  const handlePress = (item: any) => {
    navigation.navigate('ProductDetails', {item});
  };

  const renderItem = ({item}: any) => {
    if (!item.sale) return null;

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
        <Header title="On Sale" />
        <View style={styles.headerSection}>
          <Text style={styles.headerTxt}>Hot Details on Trendy Styles!!!</Text>
          <Text style={styles.headerDesc}>
            Discover the best descounts on our stylish collection.Limited time
            offer,grab them before they're gone!
          </Text>
        </View>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 5,
            }}>
            <Text style={[styles.headerTxt, {fontSize: Font_Size_24}]}>
              Best Sellers
            </Text>
            <TouchableOpacity
              onPress={handlePressView}
              style={styles.viewAllBtn}>
              <Text style={styles.viewAllTxt}>View All</Text>
            </TouchableOpacity>
          </View>
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
    headerSection: {
      backgroundColor: theme.neutralGray,
      paddingHorizontal: 10,
      paddingVertical: 20,
      marginTop: 20,
      gap: 5,
    },
    headerTxt: {
      fontSize: Font_Size_26,
      fontFamily: FONT_FAMILY_MEDIUM,
      color: theme.text,
    },
    headerDesc: {
      fontSize: Font_Size_13,
      fontFamily: FONT_FAMILY_LIGHT,
      color: theme.text,
    },
    viewAllBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: theme.neutralGray,
      borderRadius: 50,
    },
    viewAllTxt: {
      fontSize: Font_Size_12,
      fontFamily: FONT_FAMILY_REGULAR,
      color: theme.text,
    },
  });
};

export default OnSale;
