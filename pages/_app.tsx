import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/query-core';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
