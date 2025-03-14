import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  Text,
  Link,
  VStack,
  Button,
  DrawerBody,
  DrawerContent,
  Drawer,
  IconButton,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

export const HomeSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const lineStyle = {
    position: "relative",
    _before: {
      content: '""',
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "0.3px",
      backgroundColor: "white",
    },
  };

  const DesktopNav = () => (
    <Flex justify="space-between" align="center" px={6} py={2}>
      <Image
        src="/logos/jn-logo.png"
        alt="Jokers of Neon Logo"
        h={{ base: "40px", md: "40px", xl: "80px" }}
      />
      <Flex width={"50%"} justify="space-around" align="center">
        <Link
          href="#"
          fontSize={{ base: "sm", md: "sm", xl: "0.8rem", xxl: "1.3rem" }}
          textTransform="uppercase"
        >
          About Game
        </Link>
        <Link
          href="#"
          fontSize={{ base: "sm", md: "sm", xl: "0.8rem", xxl: "1.3rem" }}
          textTransform="uppercase"
        >
          Play
        </Link>
        <Link
          href="#"
          fontSize={{ base: "sm", md: "sm", xl: "0.8rem", xxl: "1.3rem" }}
          textTransform="uppercase"
        >
          Contact
        </Link>
      </Flex>
    </Flex>
  );

  const MobileNav = () => (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        color="white"
      >
        <Image src="/logos/jn-logo.png" alt="Jokers of Neon Logo" h="40px" />

        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          variant="unstyled"
          color="white"
          fontSize={"1.3rem"}
          onClick={onOpen}
        />
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent
          color="white"
          bgImage="url('/bg/bg-top.png')"
          bgSize="cover"
          bgColor={"black"}
          bgPosition="center"
        >
          <Flex justify="space-between" align="center" pt={4}>
            <Image
              src="/logos/jn-logo.png"
              alt="Jokers of Neon Logo"
              h="40px"
            />
            <DrawerCloseButton as={Text} fontSize="1.3rem" pt={4}>
              X
            </DrawerCloseButton>
          </Flex>

          <DrawerBody
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <VStack
              spacing={6}
              justifyContent={"center"}
              align="stretch"
              mt={10}
            >
              <Box sx={lineStyle}>
                <Text
                  textAlign="center"
                  fontSize="xl"
                  letterSpacing="wider"
                  fontWeight="light"
                  fontFamily={"Orbitron"}
                >
                  ABOUT GAME
                </Text>
              </Box>

              <Box sx={lineStyle}>
                <Text
                  textAlign="center"
                  fontSize="xl"
                  letterSpacing="wider"
                  fontWeight="light"
                  fontFamily={"Orbitron"}
                >
                  PLAY
                </Text>
              </Box>

              <Box sx={lineStyle}>
                <Text
                  textAlign="center"
                  fontSize="xl"
                  letterSpacing="wider"
                  fontWeight="light"
                  fontFamily={"Orbitron"}
                >
                  CONTACT
                </Text>
              </Box>
            </VStack>

            <Box textAlign="center" mb={10}>
              <Image src="/logos/logo-variant.svg" />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );

  const TopNavBar = isMobile ? <MobileNav /> : <DesktopNav />;

  const poweredBy = (
    <Flex gap={4} justifyContent="center" alignItems={"center"}>
      <Text
        fontSize={{
          base: isMobile ? "sm" : "2xs",
          md: "md",
          xl: "xl",
          xxl: "2xl",
        }}
        textTransform="uppercase"
        letterSpacing={{ base: "0.3rem", xl: "0.5rem", xxl: "0.8rem" }}
        fontWeight="semibold"
      >
        Powered by
      </Text>
      <Image
        src="/logos/starknet.png"
        alt="Starknet logo"
        h={{ base: isMobile ? "30px" : "40px", xl: "50%" }}
      />
      <Image
        src="/logos/dojo.png"
        alt="Dojo logo"
        h={{ base: isMobile ? "30px" : "40px", xl: "50%" }}
      />
    </Flex>
  );

  return (
    <Box
      w="100vw"
      h="100vh"
      bgImage={
        isMobile
          ? "url('/bg/bg-top-merge-mobile.png')"
          : "url('/bg/bg-top-merge.png')"
      }
      bgSize="cover"
      bgPosition="center"
      bgColor={"black"}
      color="white"
      overflow={"hidden"}
    >
      {/* Top Navigation */}
      {TopNavBar}

      <Flex
        flexDir={isMobile ? "column" : "row"}
        width="100%"
        justifyContent="space-between"
        alignContent={"center"}
        gap={{ base: 0, mb: 10 }}
        h="90vh"
        position={"relative"}
      >
        {/* Left Content */}
        <Flex
          flexDir={"column"}
          gap={10}
          textAlign="center"
          align={"center"}
          justifyContent={"center"}
          pt={isMobile ? 10 : 0}
          mx={isMobile ? 8 : 0}
          zIndex={1}
          width={isMobile ? "unset" : "50%"}
        >
          <Text
            fontSize={{
              base: isMobile ? "sm" : "2xs",
              md: "md",
              xl: "xl",
              xxl: "2xl",
            }}
            letterSpacing="2px"
            maxW={{ base: isMobile ? "unset" : "60%", md: "60%", xl: "80%" }}
          >
            INTRODUCING YOU THE ULTIMATE ON-CHAIN CARD GAME
          </Text>
          <Image
            src="/logos/logo-variant.png"
            alt="Jokers of Neon"
            maxW={{ base: isMobile ? "80%" : "60%", xl: "70%", xxl: "90%" }}
          />
          <Text
            fontSize={{
              base: isMobile ? "sm" : "2xs",
              md: "md",
              xl: "xl",
              xxl: "2xl",
            }}
            maxW={{ base: isMobile ? "unset" : "60%", md: "60%", xl: "80%" }}
          >
            Jokers of Neon is a strategy card game that brings strategy and
            innovation together on the blockchain.
          </Text>

          {!isMobile && poweredBy}
        </Flex>

        {/* Right Content */}

        {!isMobile ? (
          <Flex
            position="absolute"
            justifyContent="center"
            alignItems={"center"}
            height="15%"
            left="5%"
            background={"url(grid.png)"}
            width="90%"
            backgroundRepeat="space"
            backgroundSize="5% auto"
            bottom="0"
            zIndex={0}
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
                height={{ base: "40px", mb: "50px" }}
                width={{ base: "50%", mb: "60%" }}
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
