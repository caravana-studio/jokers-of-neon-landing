import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CosmicCards from "./Cards";
import { isMobile } from "react-device-detect";

export const CardsSection = () => {
  const textElement = (
    <Box
      position="relative"
      width="100%"
      _after={{
        content: '""',
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0,0.8) 100%, rgba(0,0,0,0.1) 100%)",
        pointerEvents: "none",
        mixBlendMode: "multiply",
      }}
    >
      <Text
        mt={6}
        fontSize={[
          isMobile ? "sm" : "2xs",
          "md",
          "lg",
          "2xl",
          "3xl",
          "2.2rem",
          "3.6rem",
        ]}
        textTransform="uppercase"
        textAlign={"justify"}
        maxW="100%"
        mx="auto"
      >
        This game challenges you to accumulate points, enhance your deck, and
        face progressively tougher rounds. Designed for both PC and mobile
        platforms, Jokers of Neon ensures you can play anytime, anywhere with a
        user-friendly interface. Even those new to crypto can easily dive in and
        enjoy. The on-chain structure ensures transparency, security, and
        fairness, making every move and transaction publicly verifiable.
      </Text>
    </Box>
  );

  return (
    <Box
      bg="black"
      color="white"
      py={isMobile ? 0 : 10}
      px={isMobile ? 0 : 6}
      textAlign="center"
      w="100vw"
      h="100vh"
      overflow={isMobile ? "hidden" : "unset"}
    >
      {isMobile && (
        <Flex
          width="100vw"
          justifyContent="flex-start"
          alignItems={"start"}
          height="100px"
          background={"url(grid.png)"}
          backgroundRepeat="space"
          backgroundSize="52px auto"
          zIndex={1}
        />
      )}
      <Flex w="100%" maxHeight={"20%"} justify="center" overflow={"hidden"}>
        <motion.div
          animate={{ x: ["80%", "-80%"] }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          style={{ whiteSpace: "nowrap", display: "inline-block" }}
        >
          <Text
            fontSize={{ base: "4xl", md: "8xl" }}
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="wide"
            textShadow="0 0 10px rgba(255, 255, 255, 0.8)"
            fontFamily="Orbitron"
          >
            Build Your Deck, Rule the Game
          </Text>
        </motion.div>
      </Flex>

      <Flex
        flexDirection={isMobile ? "column" : "row"}
        justify="space-evenly"
        alignItems={"center"}
        width={"100%"}
        gap={isMobile ? 5 : 0}
        mt={"2%"}
      >
        <Flex
          flexDirection={"row"}
          gap={isMobile ? 20 : "8vw"}
          alignItems={"center"}
        >
          <Flex
            flexDirection={isMobile ? "row" : "column"}
            gap={isMobile ? 10 : "4vw"}
          >
            <CosmicCards cardUrl="/elements/cards/card-1.png" rotate={-15} />
            <Flex mt={isMobile ? 5 : 0}>
              <CosmicCards cardUrl="/elements/cards/card-3.png" rotate={5} />
            </Flex>
          </Flex>
          {!isMobile && (
            <Flex>
              <CosmicCards cardUrl="/elements/cards/card-2.png" rotate={10} />
            </Flex>
          )}
        </Flex>

        <Flex width={isMobile ? "80%" : "30%"} position="relative">
          {textElement}
        </Flex>

        {isMobile && (
          <Flex mt={5}>
            <CosmicCards cardUrl="/elements/cards/card-2.png" rotate={10} />
          </Flex>
        )}
      </Flex>
    </Box>
  );
};
