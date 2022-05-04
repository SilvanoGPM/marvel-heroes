import { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components';

import FontStyles from 'styles/fonts';
import NextNProgress from 'nextjs-progressbar';

import { GlobalStyles } from 'styles/global';
import { defaultTheme } from 'styles/themes/defaultTheme';

import SEO from '../../next-seo.config';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Head>
        <title>Marvel Heroes</title>

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#F2264B" />

        <meta
          name="description"
          content="Diversos personagens do universo marvel em um único lugar."
        />
      </Head>

      <DefaultSeo {...SEO} />

      <FontStyles />
      <GlobalStyles />

      <NextNProgress
        color="#F2264B"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
