import React, { FC } from 'react';
import { Button, ButtonProps } from '@mui/material';

export interface BtnTextProps
  extends Pick<ButtonProps, 'children' | 'sx' | 'color'> {}

export const BtnText: FC<BtnTextProps> = ({ children, sx, color }) => {
  return (
    <Button color={color} variant="text" sx={sx}>
      {children}
    </Button>
  );
};
