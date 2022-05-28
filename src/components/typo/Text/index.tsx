import React, { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface TextProps
  extends Pick<TypographyProps, 'children' | 'sx' | 'paragraph'> {}

export const Text: FC<TextProps> = ({ children, ...props }) => {
  return (
    <Typography variant="body1" {...props}>
      {children}
    </Typography>
  );
};
