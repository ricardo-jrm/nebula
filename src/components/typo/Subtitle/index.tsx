import React, { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface SubtitleProps
  extends Pick<TypographyProps, 'children' | 'sx'> {}

export const Subtitle: FC<SubtitleProps> = ({ children, sx }) => {
  return (
    <Typography variant="subtitle2" sx={sx}>
      {children}
    </Typography>
  );
};
