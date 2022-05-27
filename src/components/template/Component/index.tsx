import React, { FC } from 'react';

export interface TemplateComponentProps {
  children?: JSX.Element | string;
}

export const TemplateComponent: FC<TemplateComponentProps> = ({ children }) => {
  return <div>{children}</div>;
};
