import type { AppProps } from 'next/app';

import { StoreContext, useStore } from '@/domain/store';

import '@/styles/globals.scss';
import '@/styles/resets.css';

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore();

  return (
    <StoreContext.Provider value={store}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
}
