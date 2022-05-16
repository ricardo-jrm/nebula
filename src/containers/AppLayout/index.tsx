import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import { MetaTags } from '../../components';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Box>
      <MetaTags />
      {children}
    </Box>
  );
};
