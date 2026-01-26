import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from '../helper/color';
import BaseLayout from '../components/BaseLayout';
import {
  Font_Size_10,
  Font_Size_13,
  Font_Size_16,
  Font_Size_18,
  Font_Size_22,
  Font_Size_26,
  Font_Size_32,
} from '../helper/font';

export default function Dashboard() {
  const theme = useTheme();
  const styles = createStyle(theme);
  const [activeTab, setActiveTab] = useState('shop');
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
      <BaseLayout>
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
            <View></View>
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
          <View style={{flex: 1, borderWidth: 1, borderColor: 'red'}}>
            <ImageBackground
              source={require('../assets/images/dashboardCouple.png')}
              style={{flex: 1, width: '100%', height: 'auto'}}
              resizeMode="cover"
             overflow="hidden"
            >
              <Text style={{color: 'red'}}>Image Background Content</Text>
            </ImageBackground>
          </View>
        </View>
      </BaseLayout>
    </>
  );
}

const createStyle = (theme: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      flexDirection: 'row',
      gap: 3,
      paddingVertical: 6,
      backgroundColor: theme.opositeBackground,
      borderRadius: 8,
      marginBottom: 4,
    },
    headerTxt: {
      color: theme.background,
      fontSize: Font_Size_13,
    },
    signupTxt: {
      color: theme.background,
      fontSize: Font_Size_16,
      borderBottomWidth: 1,
      borderColor: 'black',
    },
    shopCoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 10,
    },
    shopCoTxt: {
      color: theme.text,
      fontSize: Font_Size_32,
      borderBottomWidth: 1,
      borderColor: 'black',
    },
    btnContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: theme.neutralGray,
      borderRadius: 8,
    },
    activeTabBtn: {
      borderBottomWidth: 2,
      borderColor: theme.opositeBackground,
      borderWidth: 2,
    },

    nonActiveTabBtn: {
      borderWidth: 1,
      borderColor: 'blue',
      paddingHorizontal: 10,
    },
    nonActiveTabTxt: {
      fontSize: Font_Size_18,
      color: theme.text,
    },
    activeTabTxt: {
      fontSize: Font_Size_18,
      color: 'red',
      borderBottomWidth: 2,
      borderColor: theme.opositeBackground,
    },
  });
};
