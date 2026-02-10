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
import BaseLayout from '../../components/BaseLayout';
import Header from '../../components/header';
import {DarkTheme, useTheme} from '../../helper/color';
import StarRating from 'react-native-star-rating-widget';
import {
  FONT_FAMILY_MEDIUM,
  Font_Size_10,
  Font_Size_14,
  Font_Size_16,
  Font_Size_18,
  Font_Size_26,
} from '../../helper/font';
import ButtonGradient from '../../components/ButtonGradient';
import {DUMMYCARDDATA} from '../../helper/dummyData';
import SvgIcon from '../../assets/svg';
import {useNavigation} from '@react-navigation/native';
import {Empty} from '../../components/Empty';

type Product = {
  id: number;
  name: string;
  price: number;
  discountPercent: number;
  category: string;
  sale: boolean;
  finalPrice: number;
  rating: number;
  image: any;
  availableColors?: string[];
};

function Cart({route}: any) {
  const {item} = route.params;
  const theme = useTheme();
  const styles = createStyles(theme);
  const [count, setCount] = useState<Record<string, number>>({});
  const navigation = useNavigation();
  const [dataAvailable, setDataAvailable] = useState(false);

  if (!item) return null;

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

  const increase = (id: number) => {
    setCount(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decrease = (id: number) => {
    setCount(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1) - 1,
    }));
  };

  const handlePress = (item: any) => {
    navigation.navigate('ProductDetails', {item} as never);
  };

  const renderItem = ({item}: {item: Product}) => {
    const newCount = count[item.id] || 1;
    return (
      <>
        <TouchableOpacity
          style={styles.container}
          key={item.id}
          onPress={() => handlePress(item)}>
          <View style={styles.imageCard}>
            <Image source={item?.image} style={styles.image} />
          </View>
          <View
            style={{
              gap: 4,
              width: '55%',
            }}>
            <Text style={[styles.data, {fontSize: Font_Size_16}]}>
              {item.name}
            </Text>

            <Text style={styles.data}>{item.category}</Text>
            {item.sale && <Text style={styles.data}>Sale Available</Text>}
            <Text style={styles.data}>Final Price: {item.finalPrice}</Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              {item?.availableColors?.map((color: any, index: number) => (
                <View style={{gap: 4, marginVertical: 5}}>
                  <ColorBox color={color} index={index} />
                </View>
              ))}
            </View>
            <View style={styles.iconContainer}>
              <TouchableOpacity
                onPress={() => {
                  decrease(item.id);
                }}>
                <SvgIcon name="minus" width={20} height={20} />
              </TouchableOpacity>
              <Text style={[styles.data, {fontSize: Font_Size_18}]}>
                {newCount}
              </Text>
              <TouchableOpacity onPress={() => increase(item.id)}>
                <SvgIcon name="add" width={20} height={20} />
              </TouchableOpacity>
            </View>
            <View style={styles.priceContainer}>
              <Text
                style={[
                  styles.data,
                  {borderBottomWidth: 1, borderColor: theme.text},
                ]}>
                ${item.price}
              </Text>
              <View style={styles.discountPercent}>
                <Text style={[styles.data, {fontSize: Font_Size_10}]}>
                  {item.discountPercent}%
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <BaseLayout>
      <Header title="My Cart" />
      <View style={{flex: 1, marginHorizontal: 10}}>
        <FlatList
          data={DUMMYCARDDATA ? DUMMYCARDDATA : []}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          maxToRenderPerBatch={5}
          contentContainerStyle={{flexGrow: 1}}
          ListEmptyComponent={() => (
            <Empty iconName="cartBlank" message="No Cart is available" />
          )}
        />
      </View>
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <ButtonGradient
          title="Checkout"
          onPress={() => {
            navigation.navigate('Checkout' as never);
          }}
        />
      </View>
    </BaseLayout>
  );
}

const createStyles = (theme: any) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.neutralGray,
      padding: 10,
      marginVertical: 5,
      flexDirection: 'row',
      gap: 10,
      borderRadius: 10,
    },
    scrollView: {
      marginHorizontal: 10,
      flex: 1,
      paddingBottom: 20,
    },
    imageCard: {
      width: 150,
      height: 200,
      borderRadius: 10,
      backgroundColor: theme.neutralGray,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 5,
    },
    data: {
      fontSize: Font_Size_14,
      fontFamily: FONT_FAMILY_MEDIUM,
      color: theme.text,
      textTransform: 'capitalize',
    },
    colorBox: {
      width: 20,
      height: 20,
      borderRadius: 15,
      marginRight: 10,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    discountPercent: {
      justifyContent: 'center',
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 10,
      backgroundColor: theme.lightPink,
    },
    bottomContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flex: 1,
    },
    priceContainer: {
      flexDirection: 'row',
      gap: 4,
      alignItems: 'center',
    },
    iconContainer: {
      flexDirection: 'row',
      gap: 20,
      alignItems: 'center',
      marginVertical: 5,
    },
    emptyBox: {
      flex: 1,
      gap: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyCartImage: {
      backgroundColor: theme.neutralGray,
      padding: 50,
      borderRadius: 200,
    },
  });
};
export default Cart;
