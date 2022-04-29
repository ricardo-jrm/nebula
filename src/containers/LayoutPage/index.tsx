import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { FOOTER_HEIGHT, FOOTER_OFFSET, HEADER_HEIGHT } from '../../cfg';

interface LayoutPageProps {
  children: ReactNode;
}

export const LayoutPage = ({ children }: LayoutPageProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <Header height={HEADER_HEIGHT} />
      <Container>{children}</Container>
      <div
        style={{ width: '100%', height: `${FOOTER_HEIGHT + FOOTER_OFFSET}px` }}
      />
      <Footer height={FOOTER_HEIGHT} offset={FOOTER_OFFSET} />
    </Box>
  );
};
