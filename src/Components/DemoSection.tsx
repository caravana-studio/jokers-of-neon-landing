import { Box, Flex, Image } from "@chakra-ui/react";
import { relative } from "path";

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
          <Image width={"80%"} src="/elements/mockup.png" />
          <Image
            position="absolute"
            top="19%"
            left="27.6%"
            width={"45%"}
            height="53%"
            src="/elements/demo.png"
          />
          <Flex position="absolute" top="45%" left="74%">
            <Image width={"80%"} src="/elements/mobile-home-mockup.png" />
          </Flex>

          <Box
            as="iframe"
            src="https://www.youtube.com/embed/EvQawPSkAfE?autoplay=1&mute=1"
            position="absolute"
            top="19%"
            left="27%"
            width="46%"
            height="53%"
            border="none"
          />
        </Flex>
      </Box>
    </>
  );
};
