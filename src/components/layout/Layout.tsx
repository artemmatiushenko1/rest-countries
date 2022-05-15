import Header from 'components/header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  );
};

export default Layout;
