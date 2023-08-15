import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

import { themeCustom } from '../styles/chakraCustomStyle';
import GlobalStyles from '../styles/globalstyle';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>

      <GlobalStyles />

      <ChakraProvider
        theme={themeCustom}
        resetCSS
      >
        <Component {...pageProps} />

      </ChakraProvider>
    </>
  );
}

export default MyApp;