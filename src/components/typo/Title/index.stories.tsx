import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Title, TitleProps } from '.';

export default {
  title: 'Components/Typography/Title',
  component: Title,
  parameters: {
    componentSubtitle: 'Title component',
  },
} as Meta;

export const Default: Story<TitleProps> = () => <Title>Title</Title>;
