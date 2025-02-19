import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import theme from "../theme/theme";
import SpineAnimation, { SpineAnimationRef } from "./SpineAnimation";
import { useRef } from "react";
import { CARD_HEIGHT } from "../constants/visualProps";

const SIZE_MULTIPLIER = isMobile ? 1.3 : 2;
const { white, neonGreen } = theme.colors;

const animationsData = {
  initialAnimation: "0.idle",
  hoverAnimation: "1.opening",
  loopAnimation: "2.opened",
  openBoxAnimation: "3.expand",
};

export const BoxSection = () => {
  const details =
    "25% chance of getting a special card\n15% chance of getting a modifier\n60% chance of getting a traditional card\nLoot box size 3";

  const spineAnimationRef = useRef<SpineAnimationRef>(null);

  const spineAnim = (
    <SpineAnimation
      ref={spineAnimationRef}
      jsonUrl={`/spine-animations/loot_box_4.json`}
      atlasUrl={`/spine-animations/loot_box_4.atlas`}
      initialAnimation={animationsData.loopAnimation}
      loopAnimation={animationsData.loopAnimation}
      openBoxAnimation={animationsData.openBoxAnimation}
      width={1200}
      height={1500}
      xOffset={-650}
      scale={1}
    />
  );

  return (
    <Box
      w="100vw"
      h="100vh"
      bgImage="url('/bg/bg-top.png')"
      bgSize="cover"
      bgPosition="center"
      color="white"
      overflow={"hidden"}
    >
      {/* Title */}
      <Flex></Flex>

      {/* Box preview */}
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        minHeight={isMobile ? "100%" : "unset"}
        height={isMobile ? "unset" : "100%"}
      >
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          width={{ base: "85%", sm: "60%" }}
          margin={"0 auto"}
          bg="rgba(0, 0, 0, 0.6)"
          borderRadius="25px"
          mt={4}
          p={6}
          boxShadow={`0px 0px 10px 1px ${white}`}
          zIndex={1}
        >
          <Flex
            flexDirection={{ base: "column", sm: "row" }}
            alignItems="center"
            gap={4}
            flex="1"
            height="100%"
          >
            <Flex
              w={{ base: "100%", sm: "35%" }}
              h={`${CARD_HEIGHT * SIZE_MULTIPLIER + 30}px`}
              justifyContent="center"
              flexDir="column"
            >
              {spineAnim}
            </Flex>

            <Flex
              flexDirection={"column"}
              width="100%"
              ml={{ base: "15px", sm: "30px" }}
              flex="1"
              height="100%"
              justifyContent={"space-between"}
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Heading size={{ base: "sm", sm: "l" }} variant="italic">
                  SPECIAL PACKS
                </Heading>
                {!isMobile && (
                  <Image
                    src={`/logos/jn-logo.png`}
                    alt={"JN logo"}
                    width="120px"
                  />
                )}
              </Flex>

              <Box mb={4}>
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
                  DESCRIPTION:
                </Text>
                <Text color={neonGreen} fontSize={{ base: "md", sm: "xl" }}>
                  More chances of getting a special card.
                </Text>
              </Box>

              {details && (
                <Box mb={4}>
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
                    DETAILS:
                  </Text>
                  <Text color={neonGreen} fontSize={{ base: "md", sm: "xl" }}>
                    {details?.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </Text>
                </Box>
              )}
              <Box flex={1} alignItems={"end"} display={"flex"} flexDir={"row"}>
                <Flex flexDirection={"column"} gap={5}>
                  <Flex gap={3}>
                    <Flex gap={3}>
                      <Heading
                        fontSize={{ base: "sm", sm: "lg" }}
                        variant="italic"
                      >
                        Price:
                      </Heading>
                      <Heading
                        fontSize={{ base: "sm", sm: "lg" }}
                        variant="italic"
                        textDecoration={"none"}
                      >
                        750
                        <span
                          style={{ fontFamily: "Orbitron", marginLeft: "3px" }}
                        >
                          ¢
                        </span>
                      </Heading>
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          width="60%"
          gap={4}
          m={1000}
          mt={{ base: 4, sm: 8 }}
          mb={4}
          justifyContent={"space-between"}
          margin={"0 auto"}
          flexDirection={{ base: "column", sm: "row" }}
        >
          {/* <Coins />
          <HStack gap={4}>
            {buyButton}
            <Button
              variant="outlineSecondaryGlow"
              onClick={() => navigate("/store")}
              height={{ base: "40px", sm: "100%" }}
              width={{ base: "50%", sm: "unset" }}
            >
              {t("store.preview-card.labels.close")}
            </Button>
          </HStack> */}
        </Flex>
      </Flex>

      {/* icons */}
      <Flex></Flex>
    </Box>
  );
};
