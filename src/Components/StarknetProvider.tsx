import React from "react";

import { mainnet, sepolia } from "@starknet-react/chains";
import {
  StarknetConfig,
  cartridge,
  jsonRpcProvider,
} from "@starknet-react/core";

import { ControllerConnector } from "@cartridge/connector";

export const controller = new ControllerConnector({
  preset: "jokers-of-neon"
});

// Configure the JSON RPC provider
const provider = jsonRpcProvider({
  rpc: (chain) => {
    switch (chain) {
      case mainnet:
      default:
        return { nodeUrl: "https://api.cartridge.gg/x/starknet/mainnet" };
      case sepolia:
        return { nodeUrl: "https://api.cartridge.gg/x/starknet/sepolia" };
    }
  },
});

// Create the Starknet provider
export function StarknetProvider({ children }: { children: React.ReactNode }) {
  return (
    <StarknetConfig
      defaultChainId={mainnet.id}
      chains={[mainnet, sepolia]}
      provider={provider}
      connectors={[controller]}
      explorer={cartridge}
    >
      {children}
    </StarknetConfig>
  );
}
