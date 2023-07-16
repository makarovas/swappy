import { configureChains } from "wagmi";
import { Chain, polygon, polygonMumbai } from "wagmi/chains";

import { publicProvider } from "wagmi/providers/public";

const CHAIN_ID = Number(import.meta.env.REACT_APP_CHAIN_ID ?? 1);

let chain: Chain;
switch (CHAIN_ID) {
  case 80001:
    chain = polygonMumbai;
    break;
  case 137:
    chain = polygon;
    break;
  default:
    chain = polygonMumbai;
    break;
}

export const { chains, publicClient } = configureChains(
  [chain],
  [publicProvider()]
);
