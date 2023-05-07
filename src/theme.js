import { DARK, LIGHT } from './constants/theme';

const light = {
  currentTheme: LIGHT,
  colors: {
    primary: '#000000',
    secondary: '#ffffff',
    accent: '#849ce7',
    danger: '#ff4a4a',
    success: '#74dd76',
  },
};

const dark = {
  currentTheme: DARK,
  colors: {
    primary: '#ffffff',
    secondary: '#000000',
    accent: '#74dd76',
    danger: '#ff4a4a',
    success: '#849ce7',
  },
};

export const theme = {
  [LIGHT]: light,
  [DARK]: dark,
};
