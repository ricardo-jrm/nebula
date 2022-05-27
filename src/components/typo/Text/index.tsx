import React, { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface TextProps extends Pick<TypographyProps, 'children' | 'sx'> {}

export const Text: FC<TextProps> = ({ children, sx }) => {
  return (
    <Typography variant="body1" sx={sx}>
      {children}
    </Typography>
  );
};
