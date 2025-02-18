import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CosmicCards from "./Cards";

export const CardsSection = () => {
  return (
    <Box
      bg="black"
      color="white"
      py={10}
      px={6}
      textAlign="center"
      w="100vw"
      h="100vh"
    >
      <Flex w="100%" maxHeight={"20%"} justify="center" overflow={"hidden"}>
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{ whiteSpace: "nowrap", display: "inline-block" }}
        >
          <Text
            fontSize={{ base: "4xl", md: "8xl" }}
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="wide"
            textShadow="0 0 10px rgba(255, 255, 255, 0.8)"
          >
            Build Your Deck, Rule the Game &nbsp;•&nbsp; Build Your Deck, Rule
            the Game &nbsp;•&nbsp;
          </Text>
        </motion.div>
      </Flex>

      <Flex
        flexDirection={"row"}
        justify="space-around"
        width={"100%"}
        gap={20}
      >
        <Flex flexDirection={"row"} gap={20} alignItems={"center"}>
          <Flex flexDirection={"column"} gap={10}>
            <CosmicCards cardUrl="/elements/cards/card-1.png" rotate={-15} />
            <CosmicCards cardUrl="/elements/cards/card-3.png" rotate={5} />
          </Flex>
          <Flex>
            <CosmicCards cardUrl="/elements/cards/card-2.png" rotate={10} />
          </Flex>
        </Flex>

        {/* <Flex width={"40%"}>
          <Text
            mt={6}
            fontSize={{ base: "1rem", md: "1.7rem" }}
            textTransform="uppercase"
            textAlign={"justify"}
            maxW="100%"
            mx="auto"
            color="gray.300"
          >
            This game challenges you to accumulate points, enhance your deck,
            and face progressively tougher rounds. Designed for both PC and
            mobile platforms, Jokers of Neon ensures you can play anytime,
            anywhere with a user-friendly interface. Even those new to crypto
            can easily dive in and enjoy. The on-chain structure ensures
            transparency, security, and fairness, making every move and
            transaction publicly verifiable.
          </Text>
        </Flex> */}

        <Flex width={"40%"} position="relative">
          {/* Container with linear gradient mask */}
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
              fontSize={{ base: "1rem", md: "1.7rem" }}
              textTransform="uppercase"
              textAlign={"justify"}
              maxW="100%"
              mx="auto"
            >
              This game challenges you to accumulate points, enhance your deck,
              and face progressively tougher rounds. Designed for both PC and
              mobile platforms, Jokers of Neon ensures you can play anytime,
              anywhere with a user-friendly interface. Even those new to crypto
              can easily dive in and enjoy. The on-chain structure ensures
              transparency, security, and fairness, making every move and
              transaction publicly verifiable.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
