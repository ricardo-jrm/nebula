import React, { FC } from 'react';
import { Button, ButtonProps } from '@mui/material';

export interface BtnTextProps extends Pick<ButtonProps, 'children' | 'color'> {}

export const BtnText: FC<BtnTextProps> = ({ children, color }) => {
  return (
    <Button color={color} variant="text">
      {children}
    </Button>
  );
};
