import React, { ReactNode } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createEmotionCache } from '../scripts/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

interface NebulaAppProps extends AppProps {
  emotionCache: EmotionCache;
}

const NebulaApp: ReactNode = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: NebulaAppProps) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <title>Nebula</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <Component {...pageProps} />
  </CacheProvider>
);

export default NebulaApp;
