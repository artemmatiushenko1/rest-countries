import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import ThemeSwitch from 'components/theme-switch/ThemeSwitch';

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <h1>Where in the world?</h1>
        <ThemeSwitch />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
