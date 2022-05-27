import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Heading, HeadingProps } from '.';

export default {
  title: 'Components/Typography/Heading',
  component: Heading,
  parameters: {
    componentSubtitle: 'Heading component',
  },
} as Meta;

export const Default: Story<HeadingProps> = () => <Heading>Heading</Heading>;
