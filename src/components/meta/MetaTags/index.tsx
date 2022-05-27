import React from 'react';
import Head from 'next/head';

export const MetaTags = () => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />

      <title>Title</title>
      <meta property="og:title" content="Title" />

      <meta name="description" content="Description" />
      <meta property="og:description" content="Description" />

      {/* <meta property="og:image" content="/" /> */}
      {/* <link
          rel="icon"
          type="image/png"
          href="/"
      /> */}

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
