import '../styles/globals.css';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

const clienteSideEmotionCache = createCache({ key: 'css' });


function MyApp({ 
  Component,
  pageProps,
  emotionCache = clienteSideEmotionCache,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <Component {...pageProps}/>
    </CacheProvider>
  )
}

export default MyApp;
