import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";

interface FullScreenAlphaProps {
  onClose: () => void;
}

export const FullScreenAlpha = ({ onClose }: FullScreenAlphaProps) => {
  return (
    <Flex
      position={"fixed"}
      top={0}
      left={0}
      width={"100%"}
      height={"100%"}
      zIndex={1100}
      flexDirection={"column"}
      transition="opacity 0.5s ease"
      justifyContent={"center"}
      alignItems={"center"}
      backdropFilter="blur(5px)"
      backgroundColor=" rgba(0, 0, 0, 0.5)"
      onClick={() => {
        onClose();
      }}
      gap={4}
      p={8}
      textAlign="center"
    >
      <Heading size="lg">Jokers of Neon is in early access</Heading>
      <Text size="xl" width="80%" textAlign={"center"}>
        If you have registered for season 1, you can play it right now on Desktop. <br />{" "}
        If not, you can test the game by playing the early access version.
      </Text>
      <Flex gap={8}>
        <Link
          href="https://play.jokersofneon.com/"
          target="_blank"
          textDecoration="none !important"
        >
          <Button
            variant={"secondarySolid"}
            borderRadius="12px"
            height={"40px"}
            width={{ base: "100%", sm: "300px" }}
            mt={6}
            sx={{ flexDirection: "row", display: "flex", gap: 3 }}
            textDecoration={"none"}
          >
            PLAY SEASON 1
            {/*             <FontAwesomeIcon
              cursor="pointer"
              color="white"
              fontSize={isMobile ? "20px" : "18px"}
              icon={faDiscord}
            /> */}
          </Button>
        </Link>
        <Link
          href="https://alpha.jokersofneon.com/"
          target="_blank"
          textDecoration="none !important"
        >
          <Button
            variant={"solid"}
            borderRadius="12px"
            height={"40px"}
            width={{ base: "100%", sm: "300px" }}
            mt={6}
            sx={{ flexDirection: "row", display: "flex", gap: 3 }}
            textDecoration={"none"}
          >
            TEST THE GAME
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};
