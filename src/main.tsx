import React from "react";
import ReactDOM from "react-dom/client";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "./App.css";

import App from "./components/App";
import "./index.css";
import { wagmiClient } from "./web3/wallet";
import { chains } from "./web3/chains";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <WagmiConfig config={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        initialChain={chains[0]}
        showRecentTransactions
        appInfo={{
          appName: "Swappy",
        }}
      >
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
