import {
  Box,
  Button,
  Link as ChakraLink,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  Text,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { Link } from "react-scroll";

interface HomeSectionProps {
  setFullScreenAlphaOpen: (value: boolean) => void;
}

export const HomeSection = ({ setFullScreenAlphaOpen }: HomeSectionProps) => {
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
      <Flex
        width={"50%"}
        justify="space-around"
        align="center"
        textTransform="uppercase"
      >
        <Link
          to="about"
          style={{ cursor: "pointer" }}
          smooth={true}
          duration={500}
        >
          About
        </Link>
        <ChakraLink
          style={{
            textDecoration: "none",
          }}
          onClick={() => setFullScreenAlphaOpen(true)}
        >
          Play game
        </ChakraLink>
        <Link
          style={{ cursor: "pointer" }}
          to="trailer"
          smooth={true}
          duration={500}
        >
          Trailer
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

        {/* <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          variant="unstyled"
          color="white"
          fontSize={"1.3rem"}
          onClick={onOpen}
        /> */}
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
                  onClick={() => setFullScreenAlphaOpen(true)}
                >
                  PLAY GAME
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
      h="100svh"
      bgImage={
        isMobile
          ? "url('/bg/bg-top-merge-mobile.jpg')"
          : "url('/bg/bg-top-merge.jpg')"
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
        h="85svh"
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
            maxW={{ base: "90%", sm: "80%", xl: "70%", xxl: "90%" }}
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

          {!isMobile && (
            <Button
              variant={"solid"}
              borderRadius="12px"
              height={"40px"}
              width={"220px"}
              onClick={() => setFullScreenAlphaOpen(true)}
            >
              <Text fontFamily="Orbitron" fontSize={[16, 18]}>
                PLAY GAME
              </Text>
            </Button>
          )}
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
              bottom="10"
              zIndex={1}
            >
              <Button
                variant={"solid"}
                borderRadius="12px"
                height={{ base: "40px", mb: "50px" }}
                width={{ base: "50%", mb: "60%" }}
                onClick={() => setFullScreenAlphaOpen(true)}
              >
                <Text fontFamily="Orbitron" fontSize={[16, 18]}>
                  PLAY GAME
                </Text>
              </Button>
            </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
};
