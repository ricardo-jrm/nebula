import React, { FC } from 'react';
import { Button, ButtonProps } from '@mui/material';

export interface BtnContainedProps
  extends Pick<ButtonProps, 'children' | 'color'> {}

export const BtnContained: FC<BtnContainedProps> = ({ children, color }) => {
  return (
    <Button color={color} variant="contained">
      {children}
    </Button>
  );
};
