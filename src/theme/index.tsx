import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material';
import React, { useMemo } from 'react';
import { overrides } from './overrides';
import typography from './typography';
import { darkPalette, lightPalette } from './palette';
import GlobalStyles from './GlobalStyles';

interface ThemeConfigProps {
  children: React.ReactNode;
}

const ThemeConfig: React.FC<ThemeConfigProps> = ({ children }) => {
  const themeOptions = useMemo(
    () => ({
      components: overrides,
      typography,
      palette: lightPalette,
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default ThemeConfig;
