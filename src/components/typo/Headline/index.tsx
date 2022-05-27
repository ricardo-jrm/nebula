import React, { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface HeadlineProps
  extends Pick<TypographyProps, 'children' | 'sx'> {}

export const Headline: FC<HeadlineProps> = ({ children, sx }) => {
  return (
    <Typography variant="h1" sx={sx}>
      {children}
    </Typography>
  );
};
