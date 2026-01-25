import {StyleSheet, Text, View} from 'react-native';
import { useTheme } from '../helper/color';

export default function BaseLayout({children}:any) {
  const theme = useTheme();
  const styles = createStyle(theme);
  return (
    <>
      <View style={styles.container}>{children}</View>
    </>
  );
}

const createStyle = (theme: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      paddingHorizontal: 4,
      paddingVertical: 5,
    },
  });
};
