import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material';
import React, { useMemo } from 'react';
import { overrides } from './overrides';
import typography from './typography';
import { darkPalette, lightPalette } from './palette';
import GlobalStyles from './GlobalStyles';
import { useStores } from 'hooks/use-stores';
import { THEMES } from 'stores/theme-store';
import { observer } from 'mobx-react-lite';

interface ThemeConfigProps {
  children: React.ReactNode;
}

const ThemeConfig: React.FC<ThemeConfigProps> = ({ children }) => {
  const {
    themeStore: { theme: themeMode },
  } = useStores();
  const themeOptions = useMemo(
    () => ({
      components: overrides,
      typography,
      palette: themeMode === THEMES.DARK ? darkPalette : lightPalette,
    }),
    [themeMode]
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

export default observer(ThemeConfig);
