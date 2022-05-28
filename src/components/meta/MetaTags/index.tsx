import React from 'react';
import Head from 'next/head';

export const MetaTags = () => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />

      <link rel="icon" type="image/png" href="/static/v1/img/placeholder.png" />

      <meta name="author" content="Author" />

      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />

      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="crossorigin"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};
