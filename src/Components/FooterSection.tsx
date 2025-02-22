import { Box, Flex, Image, Text, Link, Tooltip } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { faDiscord, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VIOLET } from "../theme/colors.tsx";

export const FooterSection = () => {
  const poweredBy = (
    <Flex
      gap={10}
      justifyContent="center"
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Flex>
        <Text
          fontSize={isMobile ? "xl" : "md"}
          letterSpacing={"0.2rem"}
          textTransform="uppercase"
        >
          Powered by
        </Text>
      </Flex>

      <Flex gap={5}>
        <Image
          src="/logos/starknet.png"
          alt="Starknet logo"
          h={isMobile ? "50px" : "30px"}
        />
        <Image
          src="/logos/dojo.png"
          alt="Dojo logo"
          h={isMobile ? "50px" : "30px"}
        />
      </Flex>

      {!isMobile && (
        <Text fontSize="md" letterSpacing={"0.2rem"}>
          SINCE 2024
        </Text>
      )}
    </Flex>
  );

  const logos = (
    <>
      <Box
        border="1px solid white"
        borderRadius="50%"
        p={isMobile ? 3 : 2}
        px={3}
      >
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
      <Box border="1px solid white" borderRadius="50%" p={isMobile ? 3 : 2}>
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
    </>
  );

  return (
    <>
      <Flex
        bg="linear-gradient(to bottom, black 50%, #010304 100%)"
        w="100vw"
        h={isMobile ? "80vh" : "50vh"}
        overflow="hidden"
        justifyContent={"space-around"}
        flexDir={isMobile ? "column" : "row"}
      >
        {/* Powered */}
        <Flex justifyContent={"center"}>{poweredBy}</Flex>

        {/* Image */}
        <Flex
          width={isMobile ? "100%" : "20%"}
          height={isMobile ? "70%" : "unset"}
        >
          <Image
            width={"100%"}
            height={isMobile ? "100%" : "120%"}
            src="/elements/tube.png"
          />
        </Flex>

        {/* x and dc */}
        {!isMobile && (
          <Flex
            justify="center"
            alignItems={"center"}
            flexDirection={"column"}
            gap={10}
          >
            <Flex gap={5}>{logos}</Flex>
            <Flex>
              <Text
                fontSize="md"
                whiteSpace="pre-line"
                textTransform="uppercase"
              >
                Strategize{"\n"}Compete{"\n"}Conquer.
              </Text>
            </Flex>
          </Flex>
        )}
      </Flex>

      {isMobile && (
        <Flex
          bg={VIOLET}
          w="100vw"
          h="30vh"
          overflow="hidden"
          justifyContent={"center"}
          alignItems={"center"}
          flexDir={"column"}
          gap={10}
        >
          <Flex>
            <Text
              fontSize="1.5rem"
              fontWeight={"semibold"}
              fontStyle="italic"
              textTransform="uppercase"
              letterSpacing={"0.2rem"}
            >
              SINCE 2024
            </Text>
          </Flex>

          <Flex gap={5} height={"20%"}>
            {logos}
          </Flex>
        </Flex>
      )}
    </>
  );
};
