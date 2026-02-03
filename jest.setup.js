import 'react-native-gesture-handler/jestSetup';
import '@testing-library/jest-native/extend-expect';

// Silence warnings
jest.spyOn(console, 'warn').mockImplementation(() => {});
jest.spyOn(console, 'error').mockImplementation(() => {});

// Reanimated
jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

// Navigation
jest.mock('@react-navigation/native', () => {
  const actual = jest.requireActual('@react-navigation/native');
  return {
    ...actual,
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
      replace: jest.fn(),
    }),
    useRoute: () => ({
      params: {},
    }),
  };
});

// SVG
jest.mock('react-native-svg', () => 'Svg');

// Optional: Theme hook
jest.mock('./src/helper/color', () => ({
  DarkTheme: {
    background: '#000',
  },
  useTheme: () => ({
    background: '#fff',
    white: '#fff',
    buttonGradient: ['#000', '#111'],
  }),
}));

jest.mock('./src/assets/svg', () => {
  return ({ name, width, height }) => {
    return null; // pretend icon rendered
  };
});

jest.mock('react-native-linear-gradient', () => {
  const React = require('react');
  return ({ children }) => children;
});
