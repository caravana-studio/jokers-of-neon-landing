import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

export const DemoSection = () => {
  const title = (
    <Flex justifyContent={"center"} alignContent={"center"} pt={"5%"}>
      <Text
        color="white"
        fontSize={{ base: "xl", sm: "lg" }}
        mb={2}
        sx={{
          position: "relative",
          _before: {
            content: '""',
            position: "absolute",
            bottom: 0,
            width: "95%",
            height: "2px",
            backgroundColor: "white",
            boxShadow:
              "0px 0px 12px rgba(255, 255, 255, 0.8), 0px 6px 20px rgba(255, 255, 255, 0.5)",
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
        h="100vh"
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
          sx={{
            position: "relative",
            _before: {
              content: '""',
              position: "absolute",
              bottom: 0,
              height: "100%",
              width: "2px",
              backgroundColor: "white",
              boxShadow:
                "0px 0px 12px rgba(255, 255, 255, 0.8), 0px 6px 20px rgba(255, 255, 255, 0.5)",
            },
          }}
        >
          <Flex width={isMobile ? "90%" : "40%"} position="relative">
            <Image src="/elements/mockup.png" />

            <Image
              position="absolute"
              top="5"
              left="11.8%"
              width="77.2%"
              height="80%"
              src="/elements/demo.png"
            />

            <Box
              as="iframe"
              src="https://www.youtube.com/embed/EvQawPSkAfE?loop=1&playlist=EvQawPSkAfE&autoplay=1&mute=1"
              position="absolute"
              top="5%"
              left="11.5%"
              width="78%"
              height="85%"
              border="none"
            />
          </Flex>

          <Flex
            width={isMobile ? "unset" : "9%"}
            height={isMobile ? "unset" : "1%"}
            zIndex={1}
          >
            <Image src="/elements/mobile-home-mockup.png" />
          </Flex>
        </Flex>

        {!isMobile && (
          <Flex flexDirection={"column"} gap={10}>
            {title}
            {/* Desc */}
            <Flex justifyContent={"center"} alignContent={"center"}>
              <Text maxWidth={"30%"} textAlign={"center"}>
                Step into a realm where every decision shapes your destiny.
                Unveil the secrets of victory in our enigmatic strategic
                deck-building game. Will you master the art of strategy and
                emerge triumphant?
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
            bottom="0"
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
                  <Text maxWidth={"80%"} textAlign={"center"} fontSize={"xl"}>
                    Step into a realm where every decision shapes your destiny.
                  </Text>
                </Flex>
                <Flex justifyContent={"center"} alignContent={"center"}>
                  <Text maxWidth={"80%"} textAlign={"center"} fontSize={"xl"}>
                    Unveil the secrets of victory in our enigmatic strategic
                    deck-building game.
                  </Text>
                </Flex>

                <Flex justifyContent={"center"} alignContent={"center"}>
                  <Text maxWidth={"80%"} textAlign={"center"} fontSize={"xl"}>
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
