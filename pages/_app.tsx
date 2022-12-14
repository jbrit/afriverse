import "../styles/globals.css";
import "../styles/home.css";
import "../styles/courses.css";
import type { AppProps } from "next/app";
// import { Web3ReactProvider } from "@web3-react/core";
// import { Web3Provider } from "@ethersproject/providers";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chains, wagmiClient } from "$utils/rainbow";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import "public/fonts/GTWalsheimPro/stylesheet.css";
import "public/fonts/PPMonumentExtended/stylesheet.css";

// function getLibrary(provider: any): Web3Provider {
//   const library = new Web3Provider(provider);
//   library.pollingInterval = 12000;
//   return library;
// }

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {/* <Web3ReactProvider getLibrary={getLibrary}> */}
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider modalSize="compact" chains={chains}>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
        {/* </Web3ReactProvider> */}
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
