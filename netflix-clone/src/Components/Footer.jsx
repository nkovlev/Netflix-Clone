import React from 'react';
import { Outlet } from 'react-router-dom';

const Footer = ({ children }) => {
return (
    <>
        {children}
        <Outlet />
    </>
);
};

export default Footer;
