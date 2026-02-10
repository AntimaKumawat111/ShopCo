import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import BaseLayout from './BaseLayout';
import {useTheme} from '../helper/color';
import {useNavigation} from '@react-navigation/native';
import SvgIcon from '../assets/svg';
import {
  FONT_FAMILY_REGULAR,
  Font_Size_14,
  Font_Size_18,
  Font_Size_20,
} from '../helper/font';
import ButtonGradient from './ButtonGradient';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const OrderConfirmPopup = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();
  const [closeBtn, setCloseBtn] = useState(true);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  
  return (
    <>
        <View style={styles.container}>
          {closeBtn ? (
            <View style={styles.box}>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                }}
                onPress={() => setCloseBtn(false)}>
                <SvgIcon name="closeBtn" width={20} height={20} />
              </TouchableOpacity>
              <View style={{alignSelf: 'center'}}>
                <SvgIcon name="greenCheck" width={50} height={50} />
              </View>
              <Text style={styles.orderConfirmedText}>Order Confirmed</Text>
              <View style={styles.imageContainer}>
                <Image
                  source={require('../assets/images/orderComfirm.png')}
                  style={styles.image}
                />
              </View>
              <Text style={styles.regText}>Your order has been confirmed!</Text>
              <ButtonGradient title="Track Order" onPress={() => {}} />
            </View>
          ) : (
            <>
              <ButtonGradient
                title="Show Popup"
                onPress={handleShow}
              />
            </>
          )}
        </View>
    </>
  );
};

const createStyles = (theme: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      backgroundColor: theme.neutralGray,
      padding: '5%',
      borderRadius: 20,
      justifyContent: 'center',
      // alignItems: 'center',
      width: '90%',
      gap: 20,
    },
    orderConfirmedText: {
      fontSize: Font_Size_20,
      fontFamily: FONT_FAMILY_REGULAR,
      color: theme.text,
      textAlign: 'center',
    },
    imageContainer: {
      width: '100%',
      height: 300,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 10,
    },
    regText: {
      fontSize: Font_Size_14,
      fontFamily: FONT_FAMILY_REGULAR,
      color: theme.placeholder,
      textAlign: 'center',
    },
  });
};
