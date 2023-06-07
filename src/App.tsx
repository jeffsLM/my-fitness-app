import React from 'react';
import { useFonts } from '@expo-google-fonts/sen';

import { ThemeContextProvider } from './contexts/Theme.context'

import { Navigations } from './navigations'

import { googleFonts } from './styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ ...googleFonts });

  if (!fontsLoaded) return null;

  return (
    <ThemeContextProvider>
      <Navigations />
    </ThemeContextProvider>
  );
}
