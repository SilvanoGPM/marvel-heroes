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

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/icons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/icons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/icons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/icons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/android-icon-192x192.png"
        />

        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#F2264B" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

        <meta name="theme-color" content="#F2264B" />

        <meta
          name="description"
          content="Diversos personagens do universo marvel em um único lugar."
        />

        <link rel="icon" type="image/png" href="/icons/favicon.png" />
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
