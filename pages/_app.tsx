import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {QueryClientProvider} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/query-core";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={client}>
            <div className="wrapper">
                <Component {...pageProps} />
            </div>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}
