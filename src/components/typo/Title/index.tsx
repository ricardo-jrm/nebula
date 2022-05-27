import React, { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface TitleProps extends Pick<TypographyProps, 'children' | 'sx'> {}

export const Title: FC<TitleProps> = ({ children, sx }) => {
  return (
    <Typography variant="h6" sx={sx}>
      {children}
    </Typography>
  );
};
