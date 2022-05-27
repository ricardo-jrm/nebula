import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TemplateComponent, TemplateComponentProps } from '.';

export default {
  title: 'Components/Template/Component',
  component: TemplateComponent,
  parameters: {
    componentSubtitle: 'TemplateComponent component',
  },
} as Meta;

export const Default: Story<TemplateComponentProps> = () => (
  <TemplateComponent>TemplateComponent</TemplateComponent>
);
