import { GlobalStyles as GlobalThemeStyles, useTheme } from '@mui/material';

const GlobalStyles = () => {
  const { typography, palette } = useTheme();

  return (
    <GlobalThemeStyles
      styles={{
        '*': {
          margin: 0,
        },
        html: {
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          width: '100%',
          height: '100%',
          fontWeight: typography.fontWeightRegular,
          fontFamily: typography.fontFamily,
          backgroundColor: palette.primary.main,
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
        'body::-webkit-scrollbar': {
          width: '4px',
        },
        'body::-webkit-scrollbar-thumb': {
          background: '#c2c2c2',
          borderRadius: '10px',
        },
      }}
    />
  );
};

export default GlobalStyles;
