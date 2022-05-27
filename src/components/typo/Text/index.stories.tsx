import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Text, TextProps } from '.';

export default {
  title: 'Components/Typography/Text',
  component: Text,
  parameters: {
    componentSubtitle: 'Text component',
  },
} as Meta;

export const Default: Story<TextProps> = () => <Text>Text</Text>;
