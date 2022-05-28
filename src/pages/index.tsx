import React from 'react';
import type { NextPage } from 'next';
import { ViewBlank } from 'containers';
import { MetaDyna } from 'components/meta';

export const HomePage: NextPage = () => (
  <>
    <MetaDyna
      title="Title"
      description="Description"
      ogimg="/static/v1/img/placeholder.png"
    />
    <ViewBlank />
  </>
);

export default HomePage;
