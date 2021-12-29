import React from 'react';
import { Typography, Box } from '@ricardo-jrm/fury/dist/mui';

/**
 * ExampleComponent props
 */
export interface ExampleComponentProps {
  /**
   * Prop
   */
  text: string;
}

/**
 * ExampleComponent
 */
export const ExampleComponent = ({ text }: ExampleComponentProps) => {
  return (
    <Box>
      <Typography data-testid="test-component">{text}</Typography>
    </Box>
  );
};
