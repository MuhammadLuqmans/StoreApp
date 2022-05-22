import React from 'react';
import AppRoutes from '../routes/index';
import MobileDrawar from './Drawer';
import Footer from './Footer';

export default function Layout({children}) {
  return (
    <div>
      <MobileDrawar children={children} />
      <AppRoutes />
      <Footer />
    </div>
  );
}
