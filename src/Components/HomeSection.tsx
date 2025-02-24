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
      <Image src="/logos/jn-logo.png" alt="Jokers of Neon Logo" h="40px" />
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
          bgSize="initial"
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
      bgSize="initial"
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
