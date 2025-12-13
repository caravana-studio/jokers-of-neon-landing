import { Flex } from "@chakra-ui/react";
import { EarlyAccessSeason } from "./EarlyAccessSeason";

export const EarlyAccessPage = () => {
  return (
    <Flex
      w="100%"
      h="100vh"
      overflow={"hidden"}
      justifyContent="center"
      alignItems="center"
    >
      <EarlyAccessSeason fullScreen />
    </Flex>
  );
};
