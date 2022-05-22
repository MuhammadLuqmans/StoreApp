import ResponsiveAppBar from './AppBar';
import React from 'react';
import AppRoutes from '../routes/index';
import Footer from './Footer';
import MobileDrawar from './Drawer';

export default function Layout({children}) {
  return (
    <div>
      <MobileDrawar children={children} />
      <AppRoutes />
      <Footer />
    </div>
  );
}
