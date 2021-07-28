import { ChakraProvider, Flex } from '@chakra-ui/react';
import theme from '../styles/theme';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as ga from '../lib/ga';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
