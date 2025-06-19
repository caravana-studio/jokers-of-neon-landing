import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile } from "react-device-detect";

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
      <Text size="xl">
        Test the game now and join our Discord to engage with the community.
      </Text>
      <Flex gap={8}>
        <Link
          href="https://discord.gg/4y296W6jaq"
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
            JOIN DISCORD
            <FontAwesomeIcon
              cursor="pointer"
              color="white"
              fontSize={isMobile ? "20px" : "18px"}
              icon={faDiscord}
            />
          </Button>
        </Link>
        <Link
          href="https://gg.jokersofneon.com/"
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
            PLAY NOW
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};
