import React, { ReactNode } from 'react';
import { useFury } from '@ricardojrmcom/fury';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '../../cfg';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

interface LayoutHomeProps {
  children: ReactNode;
}

export const LayoutHome = ({ children }: LayoutHomeProps) => {
  const { furyActive } = useFury();
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: furyActive.palette.primary.main,
      }}
    >
      <Header height={HEADER_HEIGHT} />
      <Container>{children}</Container>
      <div style={{ width: '100%', height: `${FOOTER_HEIGHT}px` }} />
      <Footer height={FOOTER_HEIGHT} />
    </Box>
  );
};
