import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

export const DemoSection = () => {
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
        DESKTOP & MOBILE VERSION
      </Text>
    </Flex>
  );

  const playBtn = (
    <Button
      variant={"solid"}
      borderRadius="12px"
      height={"50px"}
      width={isMobile ? "50%" : "20%"}
    >
      <Text fontFamily="Orbitron" fontSize={[16, 18]}>
        PLAY NOW
      </Text>
    </Button>
  );

  const mobileMockUp = (
    <Flex position={"relative"}>
      <Image src="/elements/mobile-home-mockup.png" zIndex={2} />
      <Box
        as="iframe"
        src="https://www.youtube.com/embed/iD-eBTScE-o?autoplay=1&mute=1&loop=1&playlist=iD-eBTScE-o"
        position="absolute"
        bottom="2%"
        left="3%"
        width="90%"
        height="95%"
        border="none"
        zIndex={0}
        allow="autoplay; encrypted-media; loop"
      />
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
        h={isMobile ? "100vh" : "110vh"}
        bgImage="url('/bg/bg-bottom-3.png')"
        bgSize="cover"
        color="white"
        overflow={"hidden"}
        position={"relative"}
        bgColor={"black"}
      >
        {isMobile && <Flex flexDirection={"column"}>{title}</Flex>}

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

            <Image
              position="absolute"
              top="5"
              left="11.8%"
              width="77.2%"
              height="70%"
              src="/elements/demo.png"
            />

            <Box
              as="iframe"
              src="https://www.youtube.com/embed/EvQawPSkAfE?loop=1&playlist=EvQawPSkAfE&autoplay=1&mute=1"
              position="absolute"
              top={"2%"}
              left="11.5%"
              width="78%"
              height="87%"
              border="none"
            />

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
            >
              <Text
                fontFamily={"Orbitron"}
                maxWidth={"60%"}
                textAlign={"center"}
                fontSize={{ base: "sm", xl: "1.5rem", xxl: "2rem" }}
                letterSpacing={"2px"}
                pb={"2%"}
              >
                Step into a realm where every decision shapes your destiny.
              </Text>
              <Text
                fontFamily={"Orbitron"}
                maxWidth={"40%"}
                textAlign={"center"}
                fontSize={{ base: "sm", xl: "1.5rem", xxl: "2rem" }}
                letterSpacing={"2px"}
              >
                Unveil the secrets of victory in our enigmatic strategic
                deck-building game.
              </Text>
              <Text
                fontFamily={"Orbitron"}
                maxWidth={"60%"}
                textAlign={"center"}
                fontSize={{ base: "sm", xl: "1.5rem", xxl: "2rem" }}
                letterSpacing={"2px"}
              >
                Will you master the art of strategy and emerge triumphant?
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
            <Flex flexDirection={"column"} gap={10}>
              {/* Desc */}
              <Flex
                justifyContent={"center"}
                alignContent={"center"}
                flexDirection={"column"}
                gap={5}
              >
                <Flex justifyContent={"center"} alignContent={"center"}>
                  <Text
                    maxWidth={"80%"}
                    textAlign={"center"}
                    fontSize={{ se: "xs", mb: "md" }}
                    letterSpacing={"2px"}
                    fontFamily={"Orbitron"}
                  >
                    Step into a realm where every decision shapes your destiny.
                  </Text>
                </Flex>
                <Flex justifyContent={"center"} alignContent={"center"}>
                  <Text
                    maxWidth={"80%"}
                    textAlign={"center"}
                    fontSize={{ se: "xs", mb: "md" }}
                    letterSpacing={"2px"}
                    fontFamily={"Orbitron"}
                  >
                    Unveil the secrets of victory in our enigmatic strategic
                    deck-building game.
                  </Text>
                </Flex>

                <Flex justifyContent={"center"} alignContent={"center"}>
                  <Text
                    maxWidth={"80%"}
                    textAlign={"center"}
                    fontSize={{ se: "xs", mb: "md" }}
                    letterSpacing={"2px"}
                    fontFamily={"Orbitron"}
                  >
                    Will you master the art of strategy and emerge triumphant?
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
