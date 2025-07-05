import React from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

interface ThemeProviderProps {
  children: React.ReactNode;
}
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <NextThemeProvider enableSystem attribute="class" defaultTheme="system" disableTransitionOnChange>
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
