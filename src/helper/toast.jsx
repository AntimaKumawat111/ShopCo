// src/helper/ThemedToast.js
import React from 'react';
import Toast, { SuccessToast, ErrorToast, InfoToast } from 'react-native-toast-message';
import { Font_Size_10 } from './font';
import { useTheme } from './color';

export default function ThemedToast() {
  const theme = useTheme();

  const toastConfig = {
    success: props => (
      <SuccessToast
        {...props}
        style={{ borderLeftColor: theme.successGreen }}
        contentContainerStyle={{ backgroundColor: theme.successGreen }}
        text1Style={{ fontSize: Font_Size_10, color: theme.white }}
        text2Style={{ fontSize: Font_Size_10, color: theme.white }}
      />
    ),
    error: props => (
      <ErrorToast
        {...props}
        style={{ borderLeftColor: theme.error }}
        contentContainerStyle={{ backgroundColor: theme.error }}
        text1Style={{ fontSize: Font_Size_10, color: theme.white }}
        text2Style={{ fontSize: Font_Size_10, color: theme.white }}
      />
    ),
    info: props => (
      <InfoToast
        {...props}
        style={{ borderLeftColor: theme.infoBlue }}
        contentContainerStyle={{ backgroundColor: theme.infoBlue }}
        text1Style={{ fontSize: Font_Size_10, color: theme.white }}
        text2Style={{ fontSize: Font_Size_10, color: theme.white }}
      />
    ),
  };

  return <Toast config={toastConfig} />;
}
