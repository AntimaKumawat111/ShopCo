import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import BaseLayout from '../components/BaseLayout';
import Header from '../components/header';
import {useTheme} from '../helper/color';
import StarRating from 'react-native-star-rating-widget';
import {
  FONT_FAMILY_MEDIUM,
  FONT_FAMILY_REGULAR,
  Font_Size_13,
  Font_Size_14,
  Font_Size_16,
  Font_Size_18,
  Font_Size_20,
} from '../helper/font';

type ProductDetailsProp = {
  route: {
    params: {
      item?: any;
    };
  };
};
function ProductDetails({route}: ProductDetailsProp) {
  const {item} = route.params;
  const theme = useTheme();
  const styles = createStyles(theme);

  console.log('======>>>', item);
  if (!item) {
    return null;
  }

  return (
    <>
      <BaseLayout>
        <Header title="Product Details" />
        <ScrollView
          style={{
            flex: 1,
            marginHorizontal: 10,
          }}>
          <View style={styles.imageCard}>
            <Image source={item?.image} style={styles.image} />
            {item?.sale && <Text style={styles.sale}> SALE</Text>}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.imageTitle}>{item?.name}</Text>
            <Text style={[styles.imageTitle, {fontSize: Font_Size_20}]}>
              {item?.price}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}>
            <Text style={[styles.imageTitle, {fontSize: Font_Size_16}]}>
              Total Orders -
            </Text>
            <Text style={[styles.imageTitle, {fontSize: Font_Size_16}]}>
              {item?.totalOrders}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <StarRating
              rating={item?.rating}
              onChange={() => {}}
              color={theme.warningYellow}
              starSize={15}
            />
            <Text style={[styles.imageTitle, {fontSize: Font_Size_16}]}>
              {item?.rating}
            </Text>
          </View>
        </ScrollView>
      </BaseLayout>
    </>
  );
}

export default ProductDetails;

const createStyles = (theme: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      borderWidth: 1,
      borderColor: 'green',
    },
    imageCard: {
      width: '100%',
      height: 300,
      marginVertical: 4,
      padding: 15,
      borderRadius: 5,
      backgroundColor: theme.neutralGray,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 5,
    },
    imageTitle: {
      fontSize: Font_Size_18,
      fontFamily: FONT_FAMILY_MEDIUM,
      color: theme.text,
      marginVertical: 2,
    },
    price: {},
    bottomContainer: {
      gap: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    sale: {
      backgroundColor: '#fb6f92',
      color: theme.text,
      fontFamily: FONT_FAMILY_REGULAR,
      fontSize: Font_Size_14,
      width: '30%',
      textAlign: 'center',
      textAlignVertical: 'center',
      borderTopLeftRadius: 5,
      position: 'absolute',
      top: 15,
      left: 15,
      paddingVertical: 5,
    },
  });
};
