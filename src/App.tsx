import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from "styled-components";
import { useFonts } from '@expo-google-fonts/sen';

import { Navigations } from './navigations'

import { theme, googleFonts } from './styles/theme';

export default function App() {
  const [systemTheme, setSystemTheme] = useState<'dark' | 'light'>('dark');
  const [fontsLoaded] = useFonts({ ...googleFonts });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme[systemTheme]}>
        <StatusBar style={systemTheme} />
        <Navigations/>
    </ThemeProvider>
  );
}
