import React from 'react';
import { ExampleComponent } from '../../components/Example';

/**
 * ViewHomeProps
 */
interface ViewHomeProps {
  text: string;
}

/**
 * ViewHome
 */
export const ViewHome = ({ text }: ViewHomeProps) => (
  <div>
    <ExampleComponent text={text} />
  </div>
);
