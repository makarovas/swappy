import "@rainbow-me/rainbowkit/styles.css";

import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  braveWallet,
  coinbaseWallet,
  metaMaskWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { createConfig } from "wagmi";

import { chains, publicClient } from "./chains";

const WC_PROJECT_ID =
  (import.meta.env.REACT_APP_WC_PROJECT_ID as string) ||
  "ce25aa4d069b07f990e26ff465a51ad4";

const connectors = connectorsForWallets([
  {
    groupName: "Connect Wallet",
    wallets: [
      braveWallet({ chains }),
      metaMaskWallet({
        chains,
        projectId: WC_PROJECT_ID,
        walletConnectVersion: "2",
      }),
      coinbaseWallet({ appName: "Swappy", chains }),
      rainbowWallet({ chains, projectId: WC_PROJECT_ID }),
      safeWallet({ chains }),
      walletConnectWallet({ chains, projectId: WC_PROJECT_ID, version: "2" }),
    ],
  },
]);

export const wagmiClient = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});
