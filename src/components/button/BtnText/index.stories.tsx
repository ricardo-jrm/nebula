import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BtnText, BtnTextProps } from '.';

export default {
  title: 'Components/Button/Text',
  component: BtnText,
  parameters: {
    componentSubtitle: 'BtnText component',
  },
} as Meta;

export const Default: Story<BtnTextProps> = () => <BtnText>BtnText</BtnText>;
