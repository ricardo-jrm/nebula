import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Headline, HeadlineProps } from '.';

export default {
  title: 'Components/Typography/Headline',
  component: Headline,
  parameters: {
    componentSubtitle: 'Headline component',
  },
} as Meta;

export const Default: Story<HeadlineProps> = () => (
  <Headline>Headline</Headline>
);
