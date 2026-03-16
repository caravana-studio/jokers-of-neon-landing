import "../i18n";
import { ChakraIsland } from "../Components/ChakraIsland";
import { StarknetProvider } from "../Components/StarknetProvider";
import { EarlyAccessPage } from "../Components/EarlyAccessPage";

export function EarlyAccessIsland() {
  return (
    <StarknetProvider>
      <ChakraIsland>
        <EarlyAccessPage />
      </ChakraIsland>
    </StarknetProvider>
  );
}
