import React from 'react';
import { Toaster } from '../ui/sonner';

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      {children}
      <Toaster richColors theme="system" />
    </React.Fragment>
  );
};

export default MainLayout;
