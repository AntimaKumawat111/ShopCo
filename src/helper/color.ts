import {useColorScheme} from 'react-native';

export const useTheme = () => {
  const scheme = useColorScheme();
  return scheme === 'dark' ? DarkTheme : LightTheme;
};

export const DarkTheme = {
  background: '#121212',
  text: '#ffffff',
  textLightGrey: '#B0B0B0',
  error: '#EF5350',
  successGreen: '#66BB6A',
  warningYellow: '#FFCA28',
  infoBlue: '#42A5F5',
  cardBorder: '#E0E0E0',
  shadow: 'rgba(0, 0, 0, 0.08)',
  white: '#ffffff',
  buttonGradient: ['#0abab5', '#003153'],
  neutralGray: '#2A2A2A',
  opositeBackground: '#FFFFFF',
  black: '#000000',
  opositeColorText: '#000000',
  placeholder: '#9E9E9E',
  overlay: 'rgba(255, 255, 255, 0.20)',
};

export const LightTheme = {
  background: '#FFFFFF',
  text: '#212121',
  textLightGrey: '#757575',
  error: '#E53935',
  successGreen: '#43A047',
  warningYellow: '#F9A825',
  infoBlue: '#1E88E5',
  cardBorder: '#2C2C2C',
  shadow: 'rgba(0, 0, 0, 0.6)',
  white: '#ffffff',
  buttonGradient: ['#003153', '#1565C0'],
  neutralGray: '#E6E6E8',
  opositeBackground: '#121212',
  black: '#000000',
  opositeColorText: '#ffffff',
  placeholder: '#8A8A8A',
  overlay: 'rgba(0, 0, 0, 0.06)',
};
