import React, { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface HeadingProps
  extends Pick<TypographyProps, 'children' | 'sx'> {}

export const Heading: FC<HeadingProps> = ({ children, sx }) => {
  return (
    <Typography variant="h4" sx={sx}>
      {children}
    </Typography>
  );
};
