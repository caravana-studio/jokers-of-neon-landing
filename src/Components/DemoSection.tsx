import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile } from "react-device-detect";
import { Element } from "react-scroll";

interface DemoSectionProps {
  setFullScreenAlphaOpen: (value: boolean) => void;
}

export const DemoSection = ({ setFullScreenAlphaOpen }: DemoSectionProps) => {
  const title = (
    <Flex
      justifyContent={"center"}
      alignContent={"center"}
      pt={isMobile ? 0 : "5%"}
    >
      <Text
        fontFamily={"Orbitron"}
        color="white"
        fontSize={{ base: "1.2rem", md: "lg", xl: "2rem", xxl: "3rem" }}
        fontWeight={"semibold"}
        mb={2}
        pb={4}
        textTransform={"uppercase"}
        textAlign={"center"}
        sx={{
          position: "relative",
          _before: {
            content: '""',
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "1px",
            backgroundColor: "white",
            boxShadow:
              "0px 0px 20px rgba(255, 255, 255, 1), 0px 0px 20px rgba(255, 255, 255, 1), 0px 0px 10px rgba(255, 255, 255, 1)",
          },
        }}
      >
        Play whenever and wherever you want
      </Text>
    </Flex>
  );

  const playBtn = (
    <Link
      href="https://discord.gg/4y296W6jaq"
      target="_blank"
      textDecoration="none"
    >
      <Button
        variant={"solid"}
        borderRadius="12px"
        height={"40px"}
        width={"300px"}
        mt={6}
        sx={{ flexDirection: "row", display: "flex", gap: 3 }}
      >
        JOIN DISCORD
        <FontAwesomeIcon
          cursor="pointer"
          color="white"
          fontSize={isMobile ? "20px" : "18px"}
          icon={faDiscord}
        />
      </Button>
    </Link>
  );

  const mobileMockUp = (
    <Flex position={"relative"} width={isMobile ? "100%" : "40%"}>
      <Image src="/elements/mobile-home-mockup.png" zIndex={0} />
      <Box
        position="absolute"
        bottom="2%"
        left="3%"
        width={isMobile ? "90%" : "74%"}
        height="95%"
        border="none"
        zIndex={0}
      >
        <video
          autoPlay
          playsInline
          width="100%"
          height="100%"
          loop
          muted
          style={{ marginTop: isMobile ? "15px" : "20px", maxWidth: "235px" }}
        >
          <source
            src="/elements/trailers/trailer-mobile.mp4"
            type="video/mp4"
          />
        </video>
      </Box>
    </Flex>
  );

  return (
    <>
      <Flex
        bg="linear-gradient(to bottom, black 50%, #010304 100%)"
        w="100vw"
        h="50vh"
        overflow="hidden"
        justifyContent={"center"}
      >
        <Flex
          m={isMobile ? 0 : 20}
          width={isMobile ? "100%" : "50%"}
          justifyContent={"center"}
          alignItems={isMobile ? "center" : "unset"}
        >
          <Image
            height={isMobile ? "50%" : "unset"}
            src="/elements/suits.png"
            alt="Suits"
            objectFit={isMobile ? "unset" : "cover"}
          />
        </Flex>
      </Flex>

      <Box
        w="100vw"
        h={{ base: "110vh", sm: "130vh" }}
        bgImage="url('/bg/bg-bottom-3.jpg')"
        bgSize="cover"
        color="white"
        overflow={"hidden"}
        position={"relative"}
        bgColor={"black"}
      >
        {isMobile && <Flex flexDirection={"column"}>{title}</Flex>}

        <Element name="trailer"></Element>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={isMobile ? "column" : "row"}
          gap={isMobile ? 20 : 0}
          pt={isMobile ? "25%" : 0}
          sx={
            isMobile
              ? {
                  position: "relative",
                  _before: {
                    content: '""',
                    position: "absolute",
                    top: -2,
                    height: "105%",
                    width: "1px",
                    backgroundColor: "white",
                    boxShadow:
                      "0px 0px 20px rgba(255, 255, 255, 1), 0px 0px 20px rgba(255, 255, 255, 1), 0px 6px 10px rgba(255, 255, 255, 1)",
                  },
                }
              : {}
          }
        >
          <Flex width={isMobile ? "70%" : "40%"} position="relative">
            <Image src="/elements/mockup.png" />

            <Box
              position="absolute"
              top={"2%"}
              left="11.5%"
              width="78%"
              height="87%"
              border="none"
            >
              <video
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
                style={{
                  paddingLeft: "3px",
                  paddingRight: "6px",
                  marginTop: isMobile ? "15px" : "30px",
                  maxWidth: "770px",
                }}
              >
                <source
                  src="/elements/trailers/trailer-desktop.mp4"
                  type="video/mp4"
                />
              </video>
            </Box>

            {!isMobile && (
              <Flex
                position="absolute"
                top="10%"
                left="80%"
                width="78%"
                height="85%"
                zIndex={1}
              >
                {mobileMockUp}
              </Flex>
            )}
          </Flex>

          {isMobile && (
            <Flex zIndex={1} width={"30%"} justifyContent={"center"}>
              {mobileMockUp}{" "}
            </Flex>
          )}
        </Flex>

        {!isMobile && (
          <Flex
            flexDirection={"column"}
            gap={{ base: "3rem", xl: "5rem", xxl: "7rem" }}
          >
            {title}
            {/* Desc */}
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              pt={isMobile ? "0" : "5%"}
            >
              <Text
                fontFamily={"Orbitron"}
                maxWidth={"60%"}
                textAlign={"center"}
                fontSize={{ base: "sm", xl: "md", xxl: "2xl" }}
                letterSpacing={"2px"}
                pb={"2%"}
              >
                Jokers of Neon is optimized for both mobile and desktop, so you
                can play anytime, anywhere.
              </Text>
              <Text
                fontFamily={"Orbitron"}
                maxWidth={"40%"}
                textAlign={"center"}
                fontSize={{ base: "sm", xl: "md", xxl: "2xl" }}
                letterSpacing={"2px"}
              >
                The game is currently in early access <br />
                Join our Discord to test the game before the official release!
              </Text>
            </Flex>

            {/* Btn */}
            <Flex
              pt={5}
              justifyContent="center"
              alignItems={"center"}
              width="100%"
              zIndex={1}
            >
              {playBtn}
            </Flex>
          </Flex>
        )}

        {isMobile && (
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
            bottom="-2%"
            zIndex={1}
          />
        )}
      </Box>

      {isMobile && (
        <Flex
          bg="linear-gradient(to bottom, black 50%, #010304 100%)"
          w="100vw"
          h="80vh"
          overflow="hidden"
          justifyContent={"center"}
        >
          <Flex
            m={isMobile ? 0 : 20}
            width={isMobile ? "100%" : "50%"}
            justifyContent={"center"}
            alignItems={isMobile ? "center" : "unset"}
          >
            <Flex flexDirection={"column"} gap={10}>
              {/* Desc */}
              <Flex
                justifyContent={"center"}
                alignContent={"center"}
                flexDirection={"column"}
                gap={{ base: 10, mb: 16 }}
              >
                <Flex justifyContent={"center"} alignContent={"center"}>
                  <Text
                    maxWidth={"80%"}
                    textAlign={"center"}
                    fontSize={{ base: "xs", mb: "md" }}
                    letterSpacing={"2px"}
                    fontFamily={"Orbitron"}
                  >
                    Jokers of Neon is optimized for both mobile and desktop, so
                    you can play anytime, anywhere.{" "}
                  </Text>
                </Flex>
                <Flex justifyContent={"center"} alignContent={"center"}>
                  <Text
                    maxWidth={"80%"}
                    textAlign={"center"}
                    fontSize={{ base: "xs", mb: "md" }}
                    letterSpacing={"2px"}
                    fontFamily={"Orbitron"}
                  >
                    The game is currently in early access <br />
                    Join our Discord to test the game before the official
                    release!
                  </Text>
                </Flex>
              </Flex>

              {/* Btn */}
              <Flex
                pt={5}
                justifyContent="center"
                alignItems={"center"}
                width="100%"
                zIndex={1}
              >
                {playBtn}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
};
