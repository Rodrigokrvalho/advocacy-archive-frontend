import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const colors = {
  primary: {
    900: '#000e1d',
    800: '#001226',
    700: '#001529',
    600: '#001732',
    500: '#002043',
    400: '#00345c',
    300: '#004874',
    200: '#b0bcca',
    100: '#d9dfe5',
    50: '#e6eaee'
  },
  secondary: {
    900: '#3d3425',
    800: '#4f432f',
    700: '#69593f',
    600: '#836f4f',
    500: '#8c7654',
    400: '#9e855f',
    300: '#af9469',
    200: '#e6ded1',
    100: '#f3efe9',
    50: '#f7f4f0',
  }
};

const fonts = {
  heading: 'var(--font-mukta)',
  body: 'var(--font-mukta)'
};

const themeCustom = extendTheme(
  {
    colors,
    fonts
  },
  withDefaultColorScheme({
    colorScheme: 'primary',
  }),
);

export {
  themeCustom
};