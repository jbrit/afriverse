import '@rainbow-me/rainbowkit/styles.css';
import {
  connectorsForWallets,
  getDefaultWallets,
  wallet,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

export const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);


const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      wallet.coinbase({ appName: "Afriverse", chains }),
      wallet.metaMask({ chains }),
    ],
  },
]);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})