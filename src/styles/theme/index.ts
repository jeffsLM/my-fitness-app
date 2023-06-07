import { Sen_400Regular, Sen_700Bold, Sen_800ExtraBold } from '@expo-google-fonts/sen';

const darkTheme = {
  colors: {
    primary: '#FF6A00',
    secundary: '#551FFF',
    terciary: '#00B7FE',
    quaternary: '#FD2254',
  },
  shadesOfGray: {
    i1000: '#15192C',
    I900: '#92959E',
    i800: '#D0D2DA',
    i700: '#F5F5F7',
  },
  fonts: {
    regular: 'Sen_400Regular',
    medium: 'Sen_700Bold',
    bold: 'Sen_800ExtraBold',
  },
};

const lightTheme = {
  colors: {
    primary: '#FF6A00',
    secundary: '#545FFF',
    terciary: '#009FFF',
    quaternary: '#F5315D',
  },
  shadesOfGray: {
    i1000: '#FFFFFF',
    I900: '#A7A4C5',
    i800: '#837FA3',
    i700: '#3E3A66',
  },
  fonts: {
    regular: 'Sen_400Regular',
    medium: 'Sen_700Bold',
    bold: 'Sen_800ExtraBold',
  },
};

export const googleFonts = { Sen_400Regular, Sen_700Bold, Sen_800ExtraBold };

export const theme = { light: lightTheme, dark: darkTheme };
