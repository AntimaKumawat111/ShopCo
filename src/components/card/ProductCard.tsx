import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DarkTheme, useTheme} from '../../helper/color';
import {
  FONT_FAMILY_REGULAR,
  Font_Size_13,
  Font_Size_14,
  Font_Size_16,
} from '../../helper/font';
import {TouchableOpacity} from 'react-native-gesture-handler';

type ProductCardProps = {
  name: string;
  price?: string;
  image: any;
  rating?: number;
  sale?: number;
  id?: number | string;
  totalOrders?: string | number;
  onPress: () => void;
};
function ProductCard({
  name,
  price,
  image,
  rating,
  sale,
  totalOrders,
  onPress,
}: ProductCardProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const isDarkMode = theme.background === DarkTheme.background;

  const renderStars = (rating: any) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    return (
      <View style={styles.starContainer}>
        {[...Array(totalStars)].map((_, index) => {
          if (index < fullStars) {
            return (
              <Text key={index} style={styles.star}>
                ★
              </Text>
            );
          }
          if (index === fullStars && halfStar) {
            return (
              <Text key={index} style={styles.star}>
                ☆
              </Text>
            ); // half-look
          }
          return (
            <Text key={index} style={styles.starInactive}>
              ★
            </Text>
          );
        })}
      </View>
    );
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      {sale && <Text style={styles.sale}> SALE</Text>}
      <View style={styles.bottomContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={[styles.name, {fontSize: Font_Size_16}]}>{price}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {renderStars(rating)}

        <Text style={styles.name}>{totalOrders} </Text>
      </View>
    </TouchableOpacity>
  );
}

export default ProductCard;

const createStyles = (theme: any) => {
  return StyleSheet.create({
    card: {
      backgroundColor: theme.neutralGray,
      padding: 10,
      borderRadius: 8,
      width: 180,
      marginRight: 10,
      marginBottom: 10,
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
      borderRadius: 5,
      marginBottom: 5,
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
      borderRadius: 5,
      position: 'absolute',
      top: 9,
      left: 10,
      paddingVertical: 2,
    },
    name: {
      color: theme.text,
      fontSize: Font_Size_13,
      fontFamily: FONT_FAMILY_REGULAR,
    },
    starContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 4,
    },
    star: {
      color: '#FFD700',
      fontSize: 16,
      marginRight: 2,
    },
    starInactive: {
      color: '#C4C4C4',
      fontSize: 16,
      marginRight: 2,
    },
    ratingText: {
      marginLeft: 6,
      color: theme.text,
      fontSize: 12,
    },
  });
};
