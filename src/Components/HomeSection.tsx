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
  Spinner,
  Text,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-scroll";

interface HomeSectionProps {
  setFullScreenAlphaOpen: (value: boolean) => void;
}

export const HomeSection = ({ setFullScreenAlphaOpen }: HomeSectionProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay error:", error);
        });
      }
    }
  }, []);

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
    <Flex
      justify="space-between"
      align="center"
      px={6}
      py={2}
      position={"absolute"}
      top={0}
      width={"100%"}
      zIndex={1}
    >
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
          style={{ textDecoration: "none" }}
          onClick={() => setFullScreenAlphaOpen(true)}
        >
          Play game
        </ChakraLink>
        <Link
          to="trailer"
          style={{ cursor: "pointer" }}
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
        position={"absolute"}
        top={0}
        width={"100%"}
        zIndex={1}
        px={6}
        py={2}
      >
        <Image src="/logos/jn-logo.png" alt="Jokers of Neon Logo" h="40px" />
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

  return (
    <Box
      w="100vw"
      h="100svh"
      bgSize="cover"
      bgPosition="center"
      bgColor={"black"}
      color="white"
      overflow={"hidden"}
      position={"relative"}
    >
      {/* Loader */}
      <Flex
        position="fixed"
        top={0}
        left={0}
        width="100vw"
        height="100svh"
        bg="black"
        justifyContent="center"
        alignItems="center"
        zIndex={9999}
        opacity={isVideoLoaded ? 0 : 1}
        transition="opacity 0.5s ease"
        pointerEvents={isVideoLoaded ? "none" : "auto"}
      >
        <Spinner mr={4} />
        <Text fontSize="xl" fontFamily="Orbitron" color="white">
          loading . . .
        </Text>
      </Flex>

      {/* Top Navigation */}
      {TopNavBar}

      {/* Background video */}
      <Box
        as="video"
        autoPlay
        loop
        muted
        playsInline
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        objectFit="cover"
        zIndex="0"
        ref={videoRef}
        onCanPlayThrough={() => setIsVideoLoaded(true)}
      >
        <source
          src={
            isMobile
              ? "/bg/landing-bg-mobile.mp4"
              : "/bg/landing-bg-desktop.mp4"
          }
          type="video/mp4"
        />
      </Box>

      <Flex
        flexDir={isMobile ? "column" : "row"}
        width="100%"
        justifyContent="space-between"
        alignContent={"center"}
        gap={{ base: 0, mb: 10 }}
        h="95svh"
        position={"relative"}
        pt={isMobile ? "10%" : "unset"}
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
          height={isMobile ? "70%" : "unset"}
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
            BUILD YOUR DECK, RULE THE GAME
          </Text>
          <Image
            src="/logos/logo-variant.png"
            alt="Jokers of Neon"
            maxW={{ base: "90%", sm: "80%", xl: "70%", xxl: "90%" }}
          />
          <Text
            fontSize={{
              base: isMobile ? "sm" : "2xs",
              md: "lg",
              xl: "xl",
              xxl: "2xl",
            }}
            maxW={{ base: isMobile ? "unset" : "60%", md: "60%", xl: "80%" }}
          >
            A strategy card game where collecting cards <br />
            unlocks new ways to win.
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
                PLAY
              </Text>
            </Button>
          )}
        </Flex>

        {/* Right Content */}
        {isMobile && (
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
                PLAY
              </Text>
            </Button>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};
