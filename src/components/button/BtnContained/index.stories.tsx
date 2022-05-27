import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BtnContained, BtnContainedProps } from '.';

export default {
  title: 'Components/Button/Contained',
  component: BtnContained,
  parameters: {
    componentSubtitle: 'BtnContained component',
  },
} as Meta;

export const Default: Story<BtnContainedProps> = () => (
  <BtnContained>BtnContained</BtnContained>
);
