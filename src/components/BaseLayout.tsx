import {StyleSheet, Text, View} from 'react-native';
import UseTheme from '../helper/color';

export default function BaseLayout({children}:any) {
  const theme = UseTheme();
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
      borderWidth:1,borderColor:'red'
    },
  });
};
