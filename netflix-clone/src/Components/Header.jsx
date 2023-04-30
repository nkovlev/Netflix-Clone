import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = ({ children }) => {
  return (
    <>
      {children}
      <Outlet />
    </>
  );
};

export default Header;
