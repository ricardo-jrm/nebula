import React, { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface HeadingProps
  extends Pick<TypographyProps, 'children' | 'sx' | 'paragraph'> {}

export const Heading: FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <Typography variant="h4" {...props}>
      {children}
    </Typography>
  );
};
