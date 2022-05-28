import React, { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface SubtitleProps
  extends Pick<TypographyProps, 'children' | 'sx' | 'paragraph'> {}

export const Subtitle: FC<SubtitleProps> = ({ children, ...props }) => {
  return (
    <Typography variant="subtitle2" {...props}>
      {children}
    </Typography>
  );
};
