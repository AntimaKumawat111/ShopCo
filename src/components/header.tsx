import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DarkTheme, useTheme} from '../helper/color';
import BackWhiteIcon from '../assets/svg/backWhiteIcon';
import BackBlackIcon from '../assets/svg/backBlackIcon';
import {FONT_FAMILY_BOLD, Font_Size_16, Font_Size_18} from '../helper/font';
import {useNavigation} from '@react-navigation/native';

interface HeaderProp {
  title: string;
}
function Header({title}: HeaderProp) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const isDarkMode = theme.background === DarkTheme.background;
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <>
      <View style={styles.headerSection}>
        <TouchableOpacity onPress={handleBack}>
          {isDarkMode ? (
            <BackWhiteIcon width={20} height={20} />
          ) : (
            <BackBlackIcon width={20} height={20} />
          )}
        </TouchableOpacity>
        <Text style={styles.title}>{title} </Text>
      </View>
    </>
  );
}

export default Header;

const createStyles = (theme: any) => {
  return StyleSheet.create({
    headerSection: {
      height: 50,
      marginHorizontal: 10,
      alignItems: 'center',
      gap: 10,
      flexDirection: 'row',
    },
    title: {
      fontSize: Font_Size_18,
      fontFamily: FONT_FAMILY_BOLD,
      color: theme.text,
    },
  });
};
