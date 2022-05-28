import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FbDisclaimer } from '.';

export default {
  title: 'Components/Legal/FbDisclaimer',
  component: FbDisclaimer,
  parameters: {
    componentSubtitle: 'FbDisclaimer component',
  },
} as Meta;

export const Default: Story = () => <FbDisclaimer />;
