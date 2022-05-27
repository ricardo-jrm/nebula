import React, { useMemo } from 'react';
import { ThemeProvider, createTheme, Theme, ThemeOptions } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

/**
 * AppProviderProps
 */
interface AppProviderProps {
  children: JSX.Element;
}

const theme: ThemeOptions = {
  palette: {
    background: {
      default: '#f1f1f1',
    },
  },
};

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
