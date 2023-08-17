import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

import { themeCustom } from '../styles/chakraCustomStyle';
import GlobalStyles from '../styles/globalstyle';
import { AuthProvider } from '@/contexts/AuthContext';


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

      <AuthProvider>

        <ChakraProvider
          theme={themeCustom}
          resetCSS
        >
          <Component {...pageProps} />

        </ChakraProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;