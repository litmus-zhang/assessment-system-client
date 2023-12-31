import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { generalLayout } from '../styles/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <div className={'px-8 font-sans w-full bg-bg-2'}>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  )
}

export default MyApp;