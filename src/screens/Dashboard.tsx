import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {DarkTheme, useTheme} from '../helper/color';
import BaseLayout from '../components/BaseLayout';
import {
  FONT_BOLD,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_EXTRA_BOLD,
  FONT_FAMILY_MEDIUM,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_SEMI_BOLD,
  Font_Size_10,
  Font_Size_11,
  Font_Size_12,
  Font_Size_13,
  Font_Size_14,
  Font_Size_16,
  Font_Size_18,
  Font_Size_20,
  Font_Size_22,
  Font_Size_26,
  Font_Size_32,
  Font_Size_36,
  Font_Size_45,
  LINE_HEIGHT_15,
  LINE_HEIGHT_20,
  LINE_HEIGHT_30,
  LINE_HEIGHT_40,
  LINE_HEIGHT_50,
} from '../helper/font';
import CartBlackIcon from '../assets/svg/cartBlackIcon';
import CartWhiteIcon from '../assets/svg/cartWhiteIcon';
import UserProfileBlackIcon from '../assets/svg/userProfileBlackIcon';
import UserProfileWhiteIcon from '../assets/svg/userProfileWhiteIcon';
import SearchWhiteIcon from '../assets/svg/searchWhiteIcon';
import SearchBlackIcon from '../assets/svg/searchBlackIcon';

export default function Dashboard() {
  const theme = useTheme();
  const isDarkTheme = theme.background === DarkTheme.background;
  const styles = createStyle(theme);
  const [activeTab, setActiveTab] = useState('shop');
  const [search, setSearch] = useState('');

  const hoverShop = () => {
    setActiveTab('shop');
  };
  const hoverSale = () => {
    setActiveTab('onSale');
  };
  const hoverNewArrivals = () => {
    setActiveTab('newArrivals');
  };
  const hoverBrands = () => {
    setActiveTab('brands');
  };
  const handleClick = () => {
    console.log('Button clicked!');
  };

  const BTNTABS = [
    {title: 'Shop', onPress: hoverShop, active: activeTab === 'shop'},
    {title: 'On Sale', onPress: hoverSale, active: activeTab === 'onSale'},
    {
      title: 'New Arrivals',
      onPress: hoverNewArrivals,
      active: activeTab === 'newArrivals',
    },
    {title: 'Brands', onPress: hoverBrands, active: activeTab === 'brands'},
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTxt}>
            Sign up and get 20% off to your first orpder.
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.signupTxt}>Sign up now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.shopCoContainer}>
          <Text style={styles.shopCoTxt}>Shop.Co</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => {}}>
              {isDarkTheme ? (
                <CartWhiteIcon width={30} height={30} />
                
              ) : (
                <CartBlackIcon width={30} height={30} />
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              {isDarkTheme ? (
                <UserProfileWhiteIcon width={20} height={20} />
              ) : (
                <UserProfileBlackIcon width={20} height={20} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderRadius: 50,
            marginHorizontal: 20,
            marginBottom: 10,
            paddingLeft: 20,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            backgroundColor: theme.neutralGray,
          }}>
          {isDarkTheme ? (
            <SearchWhiteIcon width={20} height={20} style={{}} />
          ) : (
            <SearchBlackIcon width={20} height={20} style={{}} />
          )}
          <TextInput
            placeholder="Search for products"
            value={search}
            onChangeText={setSearch}
            keyboardType="default"
            maxLength={40}
            editable
            style={{flex: 1}}
            placeholderTextColor={theme.placeholder}
          />
        </View>
        <View style={styles.btnContainer}>
          {BTNTABS.map((item, index) => (
            <TouchableOpacity key={index} onPress={item.onPress}>
              <Text
                style={
                  item.active ? styles.activeTabTxt : styles.nonActiveTabTxt
                }>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <ImageBackground
          source={require('../assets/images/dashboardCouple.png')}
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
          }}
          resizeMode="cover">
          <View
            style={{
              flex: 1,
              backgroundColor: theme.overlay,
            }}>
            <Image
              source={require('../assets/images/Vector.png')}
              style={styles.vectorFst}
            />
            <Image
              source={require('../assets/images/Vector.png')}
              style={styles.vectorSec}
            />
            <View
              style={{
                marginTop: 20,
                flex: 1,
              }}>
              <Text style={styles.findClothesText}>
                Find clothes that matches your style.
              </Text>

              <Text style={styles.regularText}>
                Browse through our diverse range of meticulosly crafted
                garments, designed to brignt out your individuality and cater to
                your sense of style.
              </Text>
              <TouchableOpacity onPress={handleClick} style={styles.shopNowBtn}>
                <Text style={styles.shopNowBtnTxt}>Shop Now</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomSection}>
              <View style={styles.numContainer}>
                <Text style={styles.numTxt}>200+</Text>
                <Text style={styles.numDescTxt}>International Brands</Text>
              </View>
              <View style={styles.verticleLine} />
              <View style={styles.numContainer}>
                <Text style={styles.numTxt}>2,000+</Text>
                <Text style={styles.numDescTxt}>High-Quality Products</Text>
              </View>
              <View style={styles.verticleLine} />

              <View style={styles.numContainer}>
                <Text style={styles.numTxt}>30,000+</Text>
                <Text style={styles.numDescTxt}>Happy Customers</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const createStyle = (theme: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      paddingTop: 40,
    },
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 3,
      paddingVertical: 6,
      backgroundColor: theme.opositeBackground,
      borderRadius: 8,
      marginBottom: 4,
      marginHorizontal: 10,
    },
    headerTxt: {
      color: theme.background,
      fontSize: Font_Size_10,
      fontFamily: FONT_FAMILY_SEMI_BOLD,
    },
    signupTxt: {
      color: theme.background,
      fontSize: Font_Size_13,
      borderBottomWidth: 1,
      borderColor: theme.opositeColorText,
      fontFamily: FONT_FAMILY_SEMI_BOLD,
    },
    shopCoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 10,
      marginHorizontal: 20,
    },
    shopCoTxt: {
      color: theme.text,
      fontSize: Font_Size_45,
      fontFamily: FONT_FAMILY_BOLD,
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
    },
    btnContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: theme.neutralGray,
      borderRadius: 8,
      paddingHorizontal: 20,
    },
    nonActiveTabTxt: {
      fontSize: Font_Size_16,
      color: theme.text,
      fontFamily: FONT_FAMILY_REGULAR,
    },
    activeTabTxt: {
      fontFamily: FONT_FAMILY_SEMI_BOLD,
      fontSize: Font_Size_18,
      color: theme.opositeBackground,
      borderBottomWidth: 1,
      borderColor: theme.opositeBackground,
    },
    findClothesText: {
      fontFamily: FONT_FAMILY_BOLD,
      fontSize: Font_Size_36,
      color: theme.black,
      lineHeight: LINE_HEIGHT_40,
      width: '70%',
      marginLeft: 10,
    },
    regularText: {
      fontFamily: FONT_FAMILY_REGULAR,
      fontSize: Font_Size_14,
      color: theme.black,
      width: '70%',
      marginLeft: 10,
    },
    shopNowBtn: {
      backgroundColor: theme.black,
      paddingHorizontal: 30,
      paddingVertical: 15,
      width: '45%',
      alignItems: 'center',
      borderRadius: 50,
      marginTop: 10,
      marginLeft: 10,
    },
    shopNowBtnTxt: {
      color: theme.white,
      fontSize: Font_Size_14,
      fontFamily: FONT_FAMILY_MEDIUM,
    },
    vectorFst: {
      width: 30,
      height: 30,
      position: 'absolute',
      right: 20,
      top: 130,
    },
    vectorSec: {
      width: 80,
      height: 80,
      position: 'absolute',
      left: 20,
      top: 300,
    },
    bottomSection: {
      paddingBottom: 50,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-end',
      gap: 10,
      backgroundColor: theme.opositeBackground,
      height: 125,
    },
    numContainer: {
      flex: 1,
      alignItems: 'center',
      gap: 5,
    },
    numTxt: {
      fontFamily: FONT_FAMILY_EXTRA_BOLD,
      fontSize: Font_Size_20,
      color: theme.opositeColorText,
    },
    numDescTxt: {
      fontFamily: FONT_FAMILY_REGULAR,
      fontSize: Font_Size_10,
      color: theme.opositeColorText,
    },
    verticleLine: {
      borderLeftWidth: 1,
      borderColor: theme.opositeColorText,
      height: '70%',
    },
  });
};
