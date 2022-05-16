import { Button } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import React from 'react';
import { useTheme } from '@mui/material';

const ThemeSwitch = () => {
  const { typography, palette } = useTheme();

  return (
    <Button
      startIcon={<DarkModeIcon />}
      variant="text"
      sx={{
        color: palette.text.primary,
        textTransform: 'none',
        fontWeight: typography.fontWeightBold,
      }}
    >
      Dark Mode
    </Button>
  );
};

export default ThemeSwitch;
