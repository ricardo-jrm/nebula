import React, { ReactNode } from 'react';
import { Box, Container } from '@mui/material';

interface LayoutPageProps {
  children: ReactNode;
}

export const LayoutPage = ({ children }: LayoutPageProps) => (
  <Box
    sx={{
      minHeight: '100vh',
    }}
  >
    <Container>{children}</Container>
  </Box>
);
