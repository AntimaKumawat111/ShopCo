import Toast, {
  BaseToast,
  ErrorToast,
  SuccessToast,
  InfoToast,
} from 'react-native-toast-message';
import UseTheme from './color';
import {Font_Size_10} from './font';

export const toastConfig = {
  success: props => {
    const theme = UseTheme();
    return (
      <SuccessToast
        {...props}
        style={{borderLeftColor: theme.successGreen}}
        contentContainerStyle={{
          paddingHorizontal: 15,
          backgroundColor: theme.successGreen,
        }}
        text1Style={{
          fontSize: Font_Size_10,
          fontWeight: '400',
          color: theme.white,
        }}
        text1NumberOfLines={2}
        text2Style={{
          fontSize: Font_Size_10,
          color: theme.white,
        }}
        text2NumberOfLines={2}
      />
    );
  },
  error: props => {
    const theme = UseTheme();
    return (
      <ErrorToast
        {...props}
        style={{borderLeftColor: theme.error}}
        contentContainerStyle={{
          paddingHorizontal: 15,
          backgroundColor: theme.error,
        }}
        text1Style={{
          fontSize: Font_Size_10,
          fontWeight: '400',
          color: theme.white,
        }}
        text1NumberOfLines={2}
        text2Style={{
          fontSize: Font_Size_10,
          color: theme.white,
        }}
        text2NumberOfLines={2}
      />
    );
  },
  info: props => {
    const theme = UseTheme();
    return (
      <InfoToast
        {...props}
        style={{borderLeftColor: theme.infoBlue}}
        contentContainerStyle={{
          paddingHorizontal: 15,
          backgroundColor: theme.infoBlue,
        }}
        text1Style={{
          fontSize: Font_Size_10,
          fontWeight: '400',
          color: theme.white,
        }}
        text1NumberOfLines={2}
        text2Style={{
          fontSize: Font_Size_10,
          color: theme.white,
        }}
        text2NumberOfLines={2}
      />
    );
  },
};
