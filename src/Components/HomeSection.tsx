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
  VStack,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { isIOS, isMobile } from "react-device-detect";
import { Trans, useTranslation } from "react-i18next";

import { Link } from "react-scroll";

interface HomeSectionProps {}

export const HomeSection = ({}: HomeSectionProps) => {
  const { t } = useTranslation("landing");
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
      pt={{ base: 3, md: 4 }}
      pb={2}
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
        mr={{ md: 16, lg: 20, xl: 24 }}
      >
        <Link
          to="about"
          style={{ cursor: "pointer" }}
          smooth={true}
          duration={500}
        >
          {t("home.nav.about")}
        </Link>
        <ChakraLink
          style={{ textDecoration: "none" }}
          href="https://play.jokersofneon.com/"
          target="_blank"
        >
          {t("home.nav.playGame")}
        </ChakraLink>
        <Link
          to="trailer"
          style={{ cursor: "pointer" }}
          smooth={true}
          duration={500}
        >
          {t("home.nav.trailer")}
        </Link>
        <a href="/presskit" style={{ cursor: "pointer" }}>
          {t("home.nav.pressKit")}
        </a>
        <a href="/stats" style={{ cursor: "pointer" }}>
          {t("home.nav.stats")}
        </a>
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
        pt={{ base: 3, md: 4 }}
        pb={2}
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
                  {t("home.drawer.aboutGame")}
                </Text>
              </Box>

              <Box sx={lineStyle}>
                <Text
                  textAlign="center"
                  fontSize="xl"
                  letterSpacing="wider"
                  fontWeight="light"
                  fontFamily={"Orbitron"}
                  onClick={() =>
                    window.open(
                      "https://play.jokersofneon.com",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  {t("home.drawer.playGame")}
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
                  {t("home.drawer.contact")}
                </Text>
              </Box>

              <Box sx={lineStyle}>
                <a href="/presskit" style={{ textDecoration: "none" }}>
                  <Text
                    textAlign="center"
                    fontSize="xl"
                    letterSpacing="wider"
                    fontWeight="light"
                    fontFamily={"Orbitron"}
                  >
                    {t("home.drawer.pressKit")}
                  </Text>
                </a>
              </Box>

              <Box sx={lineStyle}>
                <a href="/stats" style={{ textDecoration: "none" }}>
                  <Text
                    textAlign="center"
                    fontSize="xl"
                    letterSpacing="wider"
                    fontWeight="light"
                    fontFamily={"Orbitron"}
                  >
                    {t("home.drawer.stats")}
                  </Text>
                </a>
              </Box>
            </VStack>

            <Box textAlign="center" mb={10}>
              <Image src="/logos/logo-variant.svg" alt="Jokers of Neon logo" />
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
          {t("home.loader")}
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
            {t("home.heroTagline")}
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
            <Trans i18nKey="home.subtitle" t={t} components={{ lineBreak: <br /> }} />
          </Text>

          <Flex
            gap={{ base: 4, md: 8 }}
            opacity={0.7}
            fontSize={{
              base: isMobile ? "xs" : "2xs",
              md: "sm",
              xl: "md",
            }}
            fontFamily="Orbitron"
            letterSpacing="1px"
          >
            <Text>4,500+ games</Text>
            <Text>|</Text>
            <Text>800+ players</Text>
            <Text>|</Text>
            <Text>100K+ transactions</Text>
          </Flex>

          {!isMobile && (
            <Flex gap={10}>
              <Button
                variant={"solid"}
                borderRadius="12px"
                height={"40px"}
                width={"220px"}
                onClick={() =>
                  window.open(
                    "https://play.jokersofneon.com",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <Text fontFamily="Orbitron" fontSize={[16, 18]}>
                  {t("home.playGame")}
                </Text>
              </Button>
            </Flex>
          )}
        </Flex>

        {/* Right Content */}
        {isMobile && (
          <Flex
            flexDirection={"column"}
            cursor="pointer"
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
          >
            {isIOS ? (
              <ChakraLink
                href="https://apps.apple.com/es/app/jokers-of-neon/id6749147020"
                target="_blank"
                textDecoration="none"
              >
                <Image src="/download/ios-black.svg" width="180px" alt="Download on the App Store" />
              </ChakraLink>
            ) : (
              <ChakraLink
                href="https://play.google.com/store/apps/details?id=com.jokersofneon.play"
                target="_blank"
                textDecoration="none"
              >
                <Image src="/download/android.svg" width="220px" alt="Get it on Google Play" />
              </ChakraLink>
            )}
          </Flex>
        )}
      </Flex>
    </Box>
  );
};
