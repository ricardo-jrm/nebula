import React, { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface TitleProps
  extends Pick<TypographyProps, 'children' | 'sx' | 'paragraph'> {}

export const Title: FC<TitleProps> = ({ children, ...props }) => {
  return (
    <Typography variant="h6" {...props}>
      {children}
    </Typography>
  );
};
