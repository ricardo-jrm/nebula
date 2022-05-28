import React, { FC } from 'react';
import Head from 'next/head';

export interface MetaDynaProps {
  title: string;
  description: string;
  ogimg: string;
}

export const MetaDyna: FC<MetaDynaProps> = ({ title, description, ogimg }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />

      <meta property="og:image" content={ogimg} />
    </Head>
  );
};
