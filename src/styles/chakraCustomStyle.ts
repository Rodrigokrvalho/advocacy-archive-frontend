import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const colors = {
  primary: {
    900: '#002854',
    800: '#003670',
    700: '#00458F',
    600: '#0054AD',
    500: '#0063CC',
    400: '#0071EB',
    300: '#0A81FF',
    200: '#2990FF',
    100: '#66B0FF',
    50: '#C2DFFF',
  },
  secondary: {
    900: '#201B13',
    800: '#2B241A',
    700: '#403627',
    600: '#564833',
    500: '#766447',
    400: '#967F5A',
    300: '#AF9B7A',
    200: '#BEAD92',
    100: '#CCBFAB',
    50: '#DBD2C3',
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