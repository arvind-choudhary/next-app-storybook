'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';

interface APP_THEME_PROPS_INTERFACE {
  children: React.ReactNode;
  enableSystem: boolean;
}

const AppThemeProvider = ({
  children,
  enableSystem = false,
}: APP_THEME_PROPS_INTERFACE) => {
  return (
    <ThemeProvider enableSystem={enableSystem} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
