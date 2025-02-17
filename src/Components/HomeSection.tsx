import { Box, Flex, Image, Text, Link, VStack, Button } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

export const HomeSection = () => {
  const TopNavBar = (
    <Flex justify="space-between" align="center" px={6} py={2}>
      <Image src="/logos/jn-logo.png" alt="Jokers of Neon Logo" h="40px" />
      {!isMobile ? (
        <Flex width={"50%"} justify="space-around" align="center">
          <Link href="#" fontSize="sm" textTransform="uppercase">
            About Game
          </Link>
          <Link href="#" fontSize="sm" textTransform="uppercase">
            Play
          </Link>
          <Link href="#" fontSize="sm" textTransform="uppercase">
            Contact
          </Link>
        </Flex>
      ) : (
        <Flex />
      )}
    </Flex>
  );

  const poweredBy = (
    <Flex gap={4} justify="center" alignItems={"center"}>
      <Text fontSize="xl">Powered by</Text>
      <Image
        src="/logos/starknet.png"
        alt="Starknet logo"
        h={isMobile ? "30px" : "20px"}
      />
      <Image
        src="/logos/dojo.png"
        alt="Dojo logo"
        h={isMobile ? "30px" : "20px"}
      />
    </Flex>
  );

  return (
    <Box
      w="100vw"
      h="100vh"
      bgImage="url('/bg/bg-top.png')"
      bgSize="cover"
      bgPosition="center"
      color="white"
      overflow={"hidden"}
    >
      {/* Top Navigation */}
      {TopNavBar}

      <Flex
        flexDir={isMobile ? "column" : "row"}
        width="100%"
        justify="space-between"
        gap={10}
        h="90vh"
      >
        {/* Left Content */}
        <Flex
          flexDir={"column"}
          gap={10}
          textAlign="center"
          align={"center"}
          pl={isMobile ? 0 : 40}
          pt={isMobile ? 10 : 20}
          mx={8}
          zIndex={1}
        >
          <Text
            fontSize={isMobile ? "sm" : "xl"}
            letterSpacing="2px"
            maxW={isMobile ? "unset" : "400px"}
          >
            INTRODUCING YOU THE ULTIMATE ON-CHAIN CARD GAME
          </Text>
          <Image
            src="/logos/logo-variant.png"
            alt="Jokers of Neon"
            maxW={isMobile ? "80%" : "400px"}
          />
          <Text
            maxW={isMobile ? "unset" : "400px"}
            fontSize={isMobile ? "xs" : "m"}
          >
            Jokers of Neon is a strategy card game that brings strategy and
            innovation together on the blockchain.
          </Text>

          {!isMobile && poweredBy}
        </Flex>

        {/* Right Content */}
        <Flex justify="center">
          <Image
            src="/elements/spheres-crop.png"
            alt="Neon Spheres"
            maxW={isMobile ? "100vh" : "100%"}
            zIndex={0}
            transform={isMobile ? "rotate(90deg)" : "unset"}
          />
        </Flex>

        {!isMobile ? (
          <Flex
            position="absolute"
            justifyContent="center"
            alignItems={"center"}
            height="100px"
            left="5%"
            background={"url(grid.png)"}
            width="90%"
            backgroundRepeat="space"
            backgroundSize="52px auto"
            bottom="0"
            zIndex={1}
          />
        ) : (
          <>
            <Flex
              position="absolute"
              justifyContent="center"
              alignItems={"center"}
              width="100%"
              bottom="40"
              zIndex={1}
            >
              {poweredBy}
            </Flex>

            <Flex
              position="absolute"
              justifyContent="center"
              alignItems={"center"}
              width="100%"
              bottom="10"
              zIndex={1}
            >
              <Button
                variant={"solid"}
                borderRadius="12px"
                height={"50px"}
                width={"60%"}
              >
                <Text fontFamily="Orbitron" fontSize={[16, 18]}>
                  PLAY NOW
                </Text>
              </Button>
            </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
};
