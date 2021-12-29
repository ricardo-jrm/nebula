import React, { ReactNode } from 'react';
import { Box } from '@ricardo-jrm/fury/dist/mui';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => (
  <Box sx={{ minHeight: '100vh' }}>{children}</Box>
);
