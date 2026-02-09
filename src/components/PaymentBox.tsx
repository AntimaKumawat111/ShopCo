import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '../helper/color';
import SvgIcon from '../assets/svg';
import {
  FONT_FAMILY_REGULAR,
  Font_Size_16,
} from '../helper/font';

type PaymentBoxProps = {
  label?: string;
  iconName?: string;
  onPress: () => void;
};

export const PaymentBox = ({label, iconName, onPress}: PaymentBoxProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.paymentBox}>
        {iconName && <SvgIcon name={iconName} width={20} height={20} />}
        <Text style={styles.paymentBoxText}>{label} </Text>
      </TouchableOpacity>
    </>
  );
};

const createStyles = (theme: any) => {
  return StyleSheet.create({
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
