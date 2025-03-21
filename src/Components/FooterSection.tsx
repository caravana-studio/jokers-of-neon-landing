import { Flex, Image, Link, Text, Tooltip } from "@chakra-ui/react";
import { faDiscord, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile } from "react-device-detect";
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
          fontSize={{
            base: "md",
            xl: "1.5rem",
            xxl: "2rem",
          }}
          letterSpacing={"0.3rem"}
          textTransform="uppercase"
          fontFamily="Orbitron"
          fontWeight={"semibold"}
        >
          Powered by
        </Text>
      </Flex>

      <Flex gap={5}>
        <Image
          src="/logos/starknet.png"
          alt="Starknet logo"
          h={{ base: isMobile ? "35px" : "30px", xxl: "50px" }}
        />
        <Image
          src="/logos/dojo.png"
          alt="Dojo logo"
          h={{ base: isMobile ? "35px" : "30px", xxl: "50px" }}
        />
      </Flex>

      {!isMobile && (
        <Text
          fontSize={{ base: "md", xl: "1.5rem", xxl: "2rem" }}
          fontFamily="Orbitron"
          fontStyle="italic"
        >
          SINCE 2025
        </Text>
      )}
    </Flex>
  );

  const logos = (
    <>
      <Tooltip label={"Follow us on X!"} placement="top">
        <Flex
          border="1px solid white"
          w={isMobile ? "60px" : "100%"}
          h={isMobile ? "60px" : "100%"}
          borderRadius="full"
          p={isMobile ? "unset" : 3}
          alignItems="center"
          justifyContent="center"
        >
          <Link href="https://x.com/JokersOfNeon" target="_blank">
            <FontAwesomeIcon
              cursor="pointer"
              color="white"
              fontSize={isMobile ? "25px" : "35px"}
              icon={faXTwitter}
            />
          </Link>
        </Flex>
      </Tooltip>
      <Tooltip label={"Join our discord!"} placement="top">
        <Flex
          border="1px solid white"
          w={isMobile ? "60px" : "100%"}
          h={isMobile ? "60px" : "100%"}
          p={isMobile ? "unset" : 2}
          borderRadius="full"
          alignItems="center"
          justifyContent="center"
        >
          <Link href="https://discord.gg/4y296W6jaq" target="_blank">
            <FontAwesomeIcon
              cursor="pointer"
              color="white"
              fontSize={isMobile ? "25px" : "35px"}
              icon={faDiscord}
            />
          </Link>
        </Flex>
      </Tooltip>
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
          justifyContent={"center"}
          alignItems={"center"}
          pt={isMobile ? "40%" : "5%"}
          width={isMobile ? "100%" : "20%"}
          height={isMobile ? "150%" : "130%"}
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
            <Flex flexDirection={"column"} alignItems={"flex-end"}>
              <Text
                fontSize={{ base: "md", xl: "1.5rem", xxl: "2rem" }}
                textTransform="uppercase"
                fontFamily="Orbitron"
              >
                Strategize
              </Text>

              <Text
                fontSize={{ base: "md", xl: "1.5rem", xxl: "2rem" }}
                textTransform="uppercase"
                fontFamily="Orbitron"
              >
                Compete
              </Text>

              <Text
                fontSize={{ base: "md", xl: "1.5rem", xxl: "2rem" }}
                textTransform="uppercase"
                fontFamily="Orbitron"
              >
                Conquer.
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
              fontSize="md"
              fontStyle="italic"
              textTransform="uppercase"
              fontFamily="Orbitron"
              fontWeight={"semibold"}
            >
              Since 2025
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
