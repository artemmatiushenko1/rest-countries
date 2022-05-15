import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material';
import React, { useMemo } from 'react';
import { overrides } from './overrides';
import typography from './typography';

interface ThemeConfigProps {
  children: React.ReactNode;
}

const ThemeConfig: React.FC<ThemeConfigProps> = ({ children }) => {
  const themeOptions = useMemo(
    () => ({
      components: overrides,
      typography,
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeConfig;
