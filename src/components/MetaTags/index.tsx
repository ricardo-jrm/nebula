import React from 'react';
import Head from 'next/head';
import { usePain } from '@ricardo-jrm/pain';
import { useEcho } from '@ricardo-jrm/echo';

export const MetaTags = () => {
  const { painActive } = usePain();
  const { echo } = useEcho();

  return (
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />

      <title>Nebula</title>
      <meta property="og:title" content="Nebula" />

      {painActive?.description && (
        <meta
          name="description"
          content={echo(painActive?.description as string)}
        />
      )}

      {painActive?.description && (
        <meta
          property="og:description"
          content={echo(painActive?.description as string)}
        />
      )}

      {painActive?.image && (
        <meta property="og:image" content={painActive?.image} />
      )}

      {/* {painActive?.favicon && (
        <link
          rel="icon"
          type="image/png"
          href={painActive?.favicon as string}
        />
      )} */}

      <meta name="author" content="Ricardo <l1b3r_-> Mota" />
    </Head>
  );
};
