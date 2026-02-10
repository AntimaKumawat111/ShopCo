import React, {useState} from 'react';
import BaseLayout from '../../components/BaseLayout';
import Header from '../../components/header';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from '../../helper/color';
import SvgIcon from '../../assets/svg';
import {
  FONT_FAMILY_MEDIUM,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_SEMI_BOLD,
  Font_Size_16,
  Font_Size_18,
  Font_Size_22,
} from '../../helper/font';
import ButtonGradient from '../../components/ButtonGradient';
import {TextInputBox} from '../../components/TextInputBox';
import {PaymentBox} from '../../components/PaymentBox';
import {useNavigation} from '@react-navigation/native';
import {OrderConfirmPopup} from '../../components/OrderConfirmPopup';

function Checkout() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();
  const [discountCode, setDiscountCode] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postelCode, setPostelCode] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };
  return (
    <>
      <BaseLayout>
        <Header title="Cart" />
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              paddingHorizontal: 10,
              paddingBottom: '8%',
            }}
            keyboardShouldPersistTaps="handled"
            scrollEnabled>
            <View style={styles.container}>
              <View style={styles.inputContainers}>
                <TextInputBox
                  placeholder="Discount code"
                  iconName="creditCard"
                  value={discountCode}
                  onChangeText={text => setDiscountCode(text)}
                />
                <TextInputBox
                  placeholder="Address"
                  iconName="location"
                  value={address}
                  onChangeText={text => setAddress(text)}
                />
                <TextInputBox
                  placeholder="City"
                  iconName="creditCard"
                  value={city}
                  onChangeText={text => setCity(text)}
                />
                <TextInputBox
                  placeholder="Postel Code"
                  iconName="creditCard"
                  value={postelCode}
                  onChangeText={text => setPostelCode(text)}
                />
              </View>

              <Text style={styles.paymentMethodText}>Payment Methods</Text>

              <View style={styles.paymentSection}>
                <PaymentBox
                  label="Credit Card"
                  iconName="creditCard"
                  onPress={() => {}}
                />
                <PaymentBox
                  label="Credit Card"
                  iconName="creditCard"
                  onPress={() => {}}
                />
                <PaymentBox
                  label="Credit Card"
                  iconName="creditCard"
                  onPress={() => {}}
                />
                <PaymentBox
                  label="G-Pay"
                  iconName="creditCard"
                  onPress={() => {}}
                />
              </View>
            </View>
            <ButtonGradient title="Confirm Order" onPress={handleShowPopup} />
          </ScrollView>
        </KeyboardAvoidingView>
      </BaseLayout>
    </>
  );
}

export default Checkout;

const createStyles = (theme: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    inputContainers: {
      gap: 20,
    },

    discountContainer: {
      borderColor: theme.cardBorder,
      borderWidth: 1,
      flexDirection: 'row',
      paddingHorizontal: 10,
      borderRadius: 10,
      alignItems: 'center',
      gap: 20,
    },

    discountInput: {
      width: '80%',
      color: theme.text,
      fontSize: Font_Size_18,
      fontFamily: FONT_FAMILY_MEDIUM,
    },

    paymentMethodText: {
      fontFamily: FONT_FAMILY_SEMI_BOLD,
      fontSize: Font_Size_22,
      color: theme.text,
      marginVertical: 20,
    },

    paymentSection: {
      flexWrap: 'wrap',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 10,
    },

    paymentBox: {
      flexDirection: 'row',
      paddingHorizontal: 20,
      paddingVertical: 15,
      alignItems: 'center',
      gap: 20,
      backgroundColor: theme.neutralGray,
      borderRadius: 10,
      width: '48%',
    },

    paymentBoxText: {
      fontFamily: FONT_FAMILY_REGULAR,
      fontSize: Font_Size_16,
      color: theme.text,
    },
  });
};
