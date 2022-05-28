import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TermsConditions } from '.';

export default {
  title: 'Components/Legal/TermsConditions',
  component: TermsConditions,
  parameters: {
    componentSubtitle: 'TermsConditions component',
  },
} as Meta;

export const Default: Story = () => <TermsConditions />;
