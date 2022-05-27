import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Subtitle, SubtitleProps } from '.';

export default {
  title: 'Components/Typography/Subtitle',
  component: Subtitle,
  parameters: {
    componentSubtitle: 'Subtitle component',
  },
} as Meta;

export const Default: Story<SubtitleProps> = () => (
  <Subtitle>Subtitle</Subtitle>
);
