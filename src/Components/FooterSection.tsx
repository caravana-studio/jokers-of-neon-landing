import { Box, Flex, Image, Text, Link, Tooltip } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { faDiscord, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FooterSection = () => {
  const poweredBy = (
    <Flex
      gap={10}
      justify="center"
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Text fontSize="md" letterSpacing={"0.2rem"}>
        Powered by
      </Text>
      <Flex gap={5}>
        <Image
          src="/logos/starknet.png"
          alt="Starknet logo"
          h={isMobile ? "30px" : "30px"}
        />
        <Image
          src="/logos/dojo.png"
          alt="Dojo logo"
          h={isMobile ? "30px" : "30px"}
        />
      </Flex>

      <Text fontSize="md" letterSpacing={"0.2rem"}>
        SINCE 2024
      </Text>
    </Flex>
  );

  return (
    <Flex
      bg="linear-gradient(to bottom, black 50%, #010304 100%)"
      w="100vw"
      h="50vh"
      overflow="hidden"
      justifyContent={"space-around"}
    >
      {/* Powered */}
      <Flex>{poweredBy}</Flex>

      {/* Image */}
      <Flex width={"20%"}>
        <Image width={"100%"} height={"120%"} src="/elements/tube.png" />
      </Flex>

      {/* x and dc */}
      <Flex
        justify="center"
        alignItems={"center"}
        flexDirection={"column"}
        gap={10}
      >
        <Flex gap={5}>
          <Box border="1px solid white" borderRadius="50%" p={2} px={3}>
            <Link href="https://x.com/JokersOfNeon" target="_blank">
              <Tooltip label={"Follow us on X!"} placement="left">
                <FontAwesomeIcon
                  color="white"
                  fontSize={isMobile ? "25px" : "35px"}
                  icon={faXTwitter}
                />
              </Tooltip>
            </Link>
          </Box>
          <Box border="1px solid white" borderRadius="50%" p={2}>
            <Link href="https://discord.gg/4y296W6jaq" target="_blank">
              <Tooltip label={"Join our discord!"} placement="left">
                <FontAwesomeIcon
                  color="white"
                  fontSize={isMobile ? "25px" : "35px"}
                  icon={faDiscord}
                />
              </Tooltip>
            </Link>
          </Box>
        </Flex>

        <Flex>
          <Text fontSize="md" whiteSpace="pre-line" textTransform="uppercase">
            Strategize{"\n"}Compete{"\n"}Conquer.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
