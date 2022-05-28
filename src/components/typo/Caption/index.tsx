import React, { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface CaptionProps
  extends Pick<TypographyProps, 'children' | 'sx' | 'paragraph'> {}

export const Caption: FC<CaptionProps> = ({ children, ...props }) => {
  return (
    <Typography variant="caption" {...props}>
      {children}
    </Typography>
  );
};
