import React, { FC } from 'react';
import { Button, ButtonProps } from '@mui/material';

export interface BtnContainedProps
  extends Pick<ButtonProps, 'children' | 'sx' | 'color'> {}

export const BtnContained: FC<BtnContainedProps> = ({
  children,
  sx,
  color,
}) => {
  return (
    <Button color={color} variant="contained" sx={sx}>
      {children}
    </Button>
  );
};
