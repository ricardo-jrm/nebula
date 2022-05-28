import React, { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface HeadlineProps
  extends Pick<TypographyProps, 'children' | 'sx' | 'paragraph'> {}

export const Headline: FC<HeadlineProps> = ({ children, ...props }) => {
  return (
    <Typography variant="h1" {...props}>
      {children}
    </Typography>
  );
};
