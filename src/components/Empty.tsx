import {StyleSheet, Text, View} from 'react-native';
import SvgIcon from '../assets/svg';
import {useTheme} from '../helper/color';
import {FONT_FAMILY_MEDIUM, Font_Size_14} from '../helper/font';

type EmptyProps = {
  iconName?: any;
  message: string;
};

export const Empty = ({iconName, message}: EmptyProps) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <>
      <View style={styles.container}>
        {iconName && (
          <View style={styles.imageBackground}>
            <SvgIcon name={iconName} width={150} height={150} />
          </View>
        )}
        <Text style={styles.data}>{message} </Text>
      </View>
    </>
  );
};

const createStyles = (theme: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      gap: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    data: {
      fontSize: Font_Size_14,
      fontFamily: FONT_FAMILY_MEDIUM,
      color: theme.text,
      textTransform: 'capitalize',
    },
    imageBackground: {
      backgroundColor: theme.neutralGray,
      padding: 50,
      borderRadius: 200,
    },
  });
};
