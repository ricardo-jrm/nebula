import React, { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface CaptionProps
  extends Pick<TypographyProps, 'children' | 'sx'> {}

export const Caption: FC<CaptionProps> = ({ children, sx }) => {
  return (
    <Typography variant="caption" sx={sx}>
      {children}
    </Typography>
  );
};
