import React, { useMemo } from 'react';
import { ThemeProvider, createTheme, Theme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

/**
 * AppProviderProps
 */
interface AppProviderProps {
  children: JSX.Element;
}

const theme = {};

/**
 * AppProvider
 */
export const AppProvider = ({ children }: AppProviderProps) => {
  const muiTheme: Theme = useMemo(() => createTheme(theme), []);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
