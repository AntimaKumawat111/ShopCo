import {StyleSheet, TextInput, View} from 'react-native';
import {useTheme} from '../helper/color';
import {
  FONT_FAMILY_MEDIUM,
  FONT_FAMILY_SEMI_BOLD,
  Font_Size_18,
  Font_Size_22,
} from '../helper/font';
import SvgIcon from '../assets/svg';

type TextInputBoxProps = {
  placeholder: string;
  iconName?: string;
  value: any;
  onChangeText: (text: string) => void;
};

export const TextInputBox = ({
  placeholder = 'Enter Value',
  iconName,
  value,
  onChangeText,
}: TextInputBoxProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <>
      <View style={styles.discountContainer}>
        {iconName && <SvgIcon name={iconName} width={20} height={20} />}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={theme.placeholder}
          style={styles.discountInput}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </>
  );
};

const createStyles = (theme: any) => {
  return StyleSheet.create({
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
  });
};
