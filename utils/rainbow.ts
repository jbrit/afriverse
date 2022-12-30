import "@rainbow-me/rainbowkit/styles.css";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { coinbaseWallet, metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";

import { chain, configureChains, createClient } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

export const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [publicProvider()]
);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      coinbaseWallet({ appName: "Afriverse", chains }),
      metaMaskWallet({ chains }),
    ],
  },
]);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
