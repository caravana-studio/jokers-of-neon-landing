import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import type { ReactNode } from "react";
import customTheme from "../theme/theme";

const theme = extendTheme(customTheme);

export function ChakraIsland({ children }: { children: ReactNode }) {
  return <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>;
}
