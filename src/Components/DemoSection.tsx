import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export const DemoSection = () => {
  return (
    <>
      <Flex
        bg="linear-gradient(to bottom, black 50%, #010304 100%)"
        w="100vw"
        h="50vh"
        overflow="hidden"
        justifyContent={"center"}
      >
        <Flex m={20} width={"50%"} justifyContent={"center"}>
          <Image src="/elements/suits.png" alt="Suits" objectFit="cover" />
        </Flex>
      </Flex>

      <Box
        w="100vw"
        h="100vh"
        bgImage="url('/bg/bg-bottom-2.png')"
        bgSize="cover"
        bgPosition="center"
        color="white"
        overflow={"hidden"}
      >
        <Flex justifyContent={"center"} position="relative">
          <Image width={"40%"} src="/elements/mockup.png" />
          <Image
            position="absolute"
            top="6%"
            width={"31%"}
            height="80%"
            src="/elements/demo.png"
          />

          <Flex position="absolute" top="26%" left="67%">
            <Image width={"80%"} src="/elements/mobile-home-mockup.png" />
          </Flex>

          <Box
            as="iframe"
            src="https://www.youtube.com/embed/EvQawPSkAfE?loop=1&playlist=EvQawPSkAfE&autoplay=1&mute=1"
            position="absolute"
            top="6%"
            width="31.1%"
            height="80%"
            border="none"
          />
        </Flex>

        <Flex flexDirection={"column"} gap={10}>
          <Flex justifyContent={"center"} alignContent={"center"} pt={"5%"}>
            <Text
              color="white"
              fontSize={{ base: "md", sm: "lg" }}
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
          <Flex justifyContent={"center"} alignContent={"center"}>
            <Text maxWidth={"30%"} textAlign={"center"}>
              Step into a realm where every decision shapes your destiny. Unveil
              the secrets of victory in our enigmatic strategic deck-building
              game. Will you master the art of strategy and emerge triumphant?
            </Text>
          </Flex>

          <Flex
            pt={5}
            justifyContent="center"
            alignItems={"center"}
            width="100%"
            zIndex={1}
          >
            <Button
              variant={"solid"}
              borderRadius="12px"
              height={"50px"}
              width={"20%"}
            >
              <Text fontFamily="Orbitron" fontSize={[16, 18]}>
                PLAY NOW
              </Text>
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
