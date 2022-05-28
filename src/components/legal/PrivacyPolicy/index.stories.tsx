import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PrivacyPolicy } from '.';

export default {
  title: 'Components/Legal/PrivacyPolicy',
  component: PrivacyPolicy,
  parameters: {
    componentSubtitle: 'PrivacyPolicy component',
  },
} as Meta;

export const Default: Story = () => <PrivacyPolicy />;
