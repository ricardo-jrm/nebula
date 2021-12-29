import React from 'react';
import type { NextPage } from 'next';
import { ViewHome } from '../containers/ViewHome';

export const HomePage: NextPage = () => (
  <ViewHome text="Hello World from Nebula" />
);

export default HomePage;
