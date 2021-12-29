import React from 'react';
import { Typography, Box, Button, Grid } from '@ricardo-jrm/fury/dist/mui';
import { useFury } from '@ricardo-jrm/fury';
import { usePain } from '@ricardo-jrm/pain';
import { useEmpathy } from '@ricardo-jrm/empathy';
import { useEcho } from '@ricardo-jrm/echo';

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
