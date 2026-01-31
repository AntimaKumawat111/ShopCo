import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BaseLayout from '../components/BaseLayout';
import Header from '../components/header';
import {useTheme} from '../helper/color';
import StarRating from 'react-native-star-rating-widget';
import {
  FONT_FAMILY_MEDIUM,
  FONT_FAMILY_REGULAR,
  Font_Size_12,
  Font_Size_13,
  Font_Size_14,
  Font_Size_16,
  Font_Size_18,
  Font_Size_20,
} from '../helper/font';
import ButtonGradient from '../components/ButtonGradient';

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
  const [newColor, setNewColor] = useState('');

  console.log('======>>>', item);
  if (!item) {
    return null;
  }

  const ImageCard = ({image, sale}: any) => {
    return (
      <>
        <View style={styles.imageCard}>
          <Image source={item?.image} style={styles.image} />
          {item?.sale && <Text style={styles.sale}> SALE</Text>}
        </View>
      </>
    );
  };

  const InfoRow = ({label, value}: any) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
        <Text
          style={[
            styles.imageTitle,
            {fontSize: Font_Size_16, color: theme.placeholder},
          ]}>
          {label}
        </Text>
        <Text style={[styles.imageTitle, {fontSize: Font_Size_16}]}>
          {value}
        </Text>
      </View>
    );
  };

  const ColorBox = ({color, index}: any) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => {}}
          key={index}
          style={[styles.colorBox, {backgroundColor: color}]}
        />
      </>
    );
  };
  return (
    <>
      <BaseLayout>
        <Header title="Product Details" />
        <ScrollView
          style={{
            flex: 1,
            marginHorizontal: 10,
            marginBottom: 30,
          }}
          showsVerticalScrollIndicator={false}>
          <ImageCard image={item?.image} sale={item?.sale} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.imageTitle}>{item?.name}</Text>
            <Text
              style={[
                styles.imageTitle,
                {
                  fontSize: Font_Size_20,
                  borderBottomWidth: 1,
                  borderColor: theme.text,
                },
              ]}>
              ${item?.price}
            </Text>
          </View>

          <Text
            style={[
              styles.imageTitle,
              {color: theme.placeholder, fontSize: Font_Size_13},
            ]}>
            {item?.description}
          </Text>
          <InfoRow label={'Total Orders'} value={item?.totalOrders} />

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

            <InfoRow label={''} value={item?.rating} />
          </View>
          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <InfoRow label={'Discount Available'} value={''} />

            <Text style={styles.discount}>{item?.discountPercent}%</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              gap: 10,
              alignItems: 'center',
            }}>
            <InfoRow label={'Colors Available'} value={''} />

            {item?.availableColors?.map((color: any, index: number) => (
              <ColorBox color={color} index={index} />
            ))}
          </View>

          <InfoRow label={'Brand'} value={item?.brand} />
          <InfoRow label={'return Policy'} value={item?.returnPolicy} />
          <InfoRow label={'shipping Info'} value={item?.shippingInfo} />
          <InfoRow label={'sku'} value={item?.sku} />
          <InfoRow label={'stock'} value={item?.stock} />
          <InfoRow label={'tags'} value={item?.tags} />
          <InfoRow label={'final Price'} value={item?.finalPrice} />

          <ButtonGradient title="Add to cart" onPress={() => {}} />
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
      height: 500,
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
      marginVertical: 5,
      textTransform: 'capitalize',
    },
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
    discount: {
      fontSize: Font_Size_14,
      backgroundColor: theme.lightPink,
      paddingHorizontal: 20,
      borderRadius: 10,
      paddingVertical: 2,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    colorBox: {
      width: 30,
      height: 30,
      borderRadius: 15,
      marginRight: 10,
      borderWidth: 1,
      borderColor: '#ccc',
    },
  });
};
