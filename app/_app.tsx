import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { generalLayout } from '../styles/layout';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <div className={generalLayout}>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  )
}

export default MyApp;