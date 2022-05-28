import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CookiePolicy } from '.';

export default {
  title: 'Components/Legal/CookiePolicy',
  component: CookiePolicy,
  parameters: {
    componentSubtitle: 'CookiePolicy component',
  },
} as Meta;

export const Default: Story = () => <CookiePolicy />;
