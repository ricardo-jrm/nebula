import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LegalPolicy } from '.';

export default {
  title: 'Components/Legal/LegalPolicy',
  component: LegalPolicy,
  parameters: {
    componentSubtitle: 'LegalPolicy component',
  },
} as Meta;

export const Default: Story = () => <LegalPolicy />;
