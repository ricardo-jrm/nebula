import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import { LayoutHome } from '../LayoutHome';
import { LayoutPage } from '../LayoutPage';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const { pathname } = useRouter();

  return (
    <Box>
      {pathname === '/' ? (
        <LayoutHome>{children}</LayoutHome>
      ) : (
        <LayoutPage>{children}</LayoutPage>
      )}
    </Box>
  );
};
