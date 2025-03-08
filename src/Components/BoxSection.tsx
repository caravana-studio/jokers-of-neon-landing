import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import theme from "../theme/theme";
import SpineAnimation, { SpineAnimationRef } from "./SpineAnimation";
import { useRef } from "react";
import { CARD_HEIGHT } from "../constants/visualProps";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

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

  const specialBox = (
    <Flex flexDirection={"column"} justifyContent={"center"} pt={"5%"} pb={0}>
      <Flex
        flexDirection={"column"}
        alignItems={"flex-end"}
        width={{ base: "95%", sm: "50%" }}
        margin={"0 auto"}
        bg="rgba(0, 0, 0, 0.6)"
        borderRadius="25px"
        p={isMobile ? 4 : 6}
        boxShadow={`0px 0px 10px 1px ${white}`}
        zIndex={1}
        height={"100%"}
      >
        <Flex
          flexDirection={{ base: "column", sm: "row" }}
          alignItems={isMobile ? "flex-end" : "center"}
          gap={4}
          flex="1"
          height="100%"
          width="100%"
          justify={"flex-end"}
          position={"relative"}
        >
          <Flex
            position={"absolute"}
            top={0}
            left={isMobile ? "-35%" : "-15%"}
            w={{ base: "100%", sm: "35%" }}
            h={{
              base: `${CARD_HEIGHT * 2 + 30}px`,
              xl: `${CARD_HEIGHT * 2.5 + 30}px`,
              xxl: `${CARD_HEIGHT * 3 + 30}px`,
            }}
            justifyContent="center"
            flexDir="column"
          >
            {spineAnim}
          </Flex>
          <Flex position={"absolute"} bottom={0} right={"-13.5%"} width={"20%"}>
            <Image src="/elements/star.png" />
          </Flex>
          <Flex width={isMobile ? "55%" : "75%"}>
            <Flex
              flexDirection={"column"}
              ml={{ base: "15px", sm: "30px" }}
              flex="1"
              height="100%"
              justifyContent={"space-between"}
            >
              <Flex justifyContent="space-between">
                <Heading
                  fontSize={{ base: "sm", sm: "md", xl: "2.5rem", xxl: "4rem" }}
                  variant="italic"
                >
                  SPECIAL PACKS
                </Heading>

                <Image
                  src={`/logos/jn-logo.png`}
                  alt={"JN logo"}
                  width={isMobile ? "50px" : "120px"}
                />
              </Flex>

              <Box mb={4}>
                <Text
                  color="white"
                  fontSize={{ base: "md", sm: "lg", xl: "2rem", xxl: "3rem" }}
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
                <Text
                  color={neonGreen}
                  fontSize={{ base: "md", sm: "xl", xl: "1.5rem", xxl: "2rem" }}
                >
                  More chances of getting a special card.
                </Text>
              </Box>

              {details && (
                <Box mb={4}>
                  <Text
                    color="white"
                    fontSize={{ base: "md", sm: "lg", xl: "2rem", xxl: "3rem" }}
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
                  <Text
                    color={neonGreen}
                    fontSize={{
                      base: "md",
                      sm: "xl",
                      xl: "1.5rem",
                      xxl: "2rem",
                    }}
                  >
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
                        fontSize={{
                          base: "sm",
                          sm: "lg",
                          xl: "1.5rem",
                          xxl: "2rem",
                        }}
                        variant="italic"
                      >
                        Price:
                      </Heading>
                      <Heading
                        fontSize={{
                          base: "sm",
                          sm: "lg",
                          xl: "1.5rem",
                          xxl: "2rem",
                        }}
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
      ></Flex>
    </Flex>
  );

  const jokerCard = (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      pt={isMobile ? "25%" : "5%"}
      pb={0}
    >
      <Flex
        flexDirection={"column"}
        alignItems={"flex-end"}
        width={{ base: "95%", sm: "50%" }}
        margin={"0 auto"}
        bg="rgba(0, 0, 0, 0.6)"
        borderRadius="25px"
        p={isMobile ? 4 : 6}
        boxShadow={`0px 0px 10px 1px ${white}`}
        zIndex={1}
        height={"100%"}
      >
        <Flex
          flexDirection={{ base: "column", sm: "row" }}
          alignItems={isMobile ? "flex-end" : "center"}
          gap={4}
          flex="1"
          height="100%"
          width="100%"
          justify={isMobile ? "center" : "flex-end"}
          position={"relative"}
        >
          <Flex
            position={"absolute"}
            bottom={0}
            left={isMobile ? "-20%" : "-10%"}
            w={{ base: "70%", sm: "40%" }}
            justifyContent="center"
            flexDir="column"
          >
            <Image src="/elements/neon-joker.png" />
          </Flex>
          <Flex
            position={"absolute"}
            bottom={isMobile ? "-5%" : "-10%"}
            right={isMobile ? "-10%" : "-20.5%"}
            width={isMobile ? "15%" : "20%"}
          >
            <motion.img
              src="/elements/coins-1.png"
              alt="Coin 1"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: [0, -15, 15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </Flex>

          <Flex
            position={"absolute"}
            bottom={0}
            right={isMobile ? "-5%" : "-5%"}
            width={isMobile ? "20%" : "15%"}
          >
            <motion.img
              src="/elements/coins-4.png"
              alt="Coin 1"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: [0, -15, 15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </Flex>

          <Flex
            position={"absolute"}
            bottom={"-20%"}
            left={"-15%"}
            width={"15%"}
          >
            <motion.img
              src="/elements/coins-4.png"
              alt="Coin 1"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: [0, -15, 15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </Flex>

          <Flex width={isMobile ? "55%" : "75%"}>
            <Flex
              flexDirection={"column"}
              ml={{ base: "15px", sm: "30px" }}
              flex="1"
              height="100%"
              justifyContent={"space-between"}
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Heading
                  fontSize={{ base: "xs", sm: "md", xl: "2.5rem", xxl: "4rem" }}
                  variant="italic"
                >
                  NEON JOKER
                </Heading>

                <Image
                  src={`/logos/jn-logo.png`}
                  alt={"JN logo"}
                  width={isMobile ? "50px" : "120px"}
                />
              </Flex>

              <Box mb={4}>
                <Text
                  color="white"
                  fontSize={{ base: "md", sm: "lg", xl: "2rem", xxl: "3rem" }}
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
                  CARD TYPE:
                </Text>
                <Text
                  color={neonGreen}
                  fontSize={{ base: "md", sm: "xl", xl: "1.5rem", xxl: "2rem" }}
                >
                  Special
                </Text>
              </Box>

              <Box mb={4}>
                <Text
                  color="white"
                  fontSize={{ base: "md", sm: "lg", xl: "2rem", xxl: "3rem" }}
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
                  DESCRIPTION
                </Text>
                <Text
                  color={neonGreen}
                  fontSize={{
                    base: "md",
                    sm: "xl",
                    xl: "1.5rem",
                    xxl: "2rem",
                  }}
                >
                  Score double points and multi
                </Text>
              </Box>

              <Box flex={1} alignItems={"end"} display={"flex"} flexDir={"row"}>
                <Flex flexDirection={"column"} gap={5}>
                  <Flex gap={3}>
                    <Flex gap={3}>
                      <Heading
                        fontSize={{
                          base: "sm",
                          sm: "lg",
                          xl: "1.5rem",
                          xxl: "2rem",
                        }}
                        variant="italic"
                      >
                        Price:
                      </Heading>
                      <Heading
                        fontSize={{
                          base: "sm",
                          sm: "lg",
                          xl: "1.5rem",
                          xxl: "2rem",
                        }}
                        variant="italic"
                        textDecoration={"none"}
                      >
                        600
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
      ></Flex>
    </Flex>
  );

  const leaderboard = (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      pt={"5%"}
      pb={isMobile ? "5%" : 0}
    >
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        width={{ base: "85%", sm: "50%" }}
        margin={"0 auto"}
        bg="rgba(0, 0, 0, 0.6)"
        borderRadius="25px"
        p={6}
        boxShadow={`0px 0px 10px 1px ${white}`}
        zIndex={1}
        height={"100%"}
      >
        <Image
          src={
            isMobile
              ? "/elements/leaderboard-mobile.png"
              : "/elements/leaderboard.png"
          }
          borderRadius="25px"
        />
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
      ></Flex>
    </Flex>
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
      bgColor={"black"}
    >
      <Flex position={"relative"}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          // autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
        >
          <SwiperSlide>
            {/* Title */}
            <Flex
              position="relative"
              pt={isMobile ? 3 : 100}
              justify={"center"}
              alignItems={"center"}
              flexDir={"column"}
            >
              <Box
                position="absolute"
                top="32%"
                right={isMobile ? "45%" : "38%"}
                width={"100%"}
              >
                <motion.img
                  width={isMobile ? "6%" : "4%"}
                  src="/elements/star.png"
                  alt="Rotating Star"
                  style={{
                    position: "absolute",
                    bottom: "10%",
                    left: isMobile ? "70%" : "65%",
                  }}
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: [0, -15, 15, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.img
                  width={isMobile ? "15%" : "14%"}
                  src="/elements/ring.png"
                  alt="Rotating Ring"
                  style={{
                    position: "absolute",
                    left: isMobile ? "70%" : "64%",
                  }}
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </Box>

              <Box
                position="absolute"
                top={isMobile ? "10%" : "40%"}
                right={isMobile ? "5%" : "25%"}
              >
                <Image
                  width={isMobile ? "50%" : "60%"}
                  src="/elements/sparkles-crop-1.png"
                ></Image>
              </Box>

              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
              >
                <Text
                  fontSize={{ base: "m", md: "m", xl: "2rem", xxl: "3rem" }}
                  letterSpacing="widest"
                  color="white"
                  fontFamily="Orbitron"
                >
                  STEP INTO
                </Text>
              </motion.div>

              <motion.div
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 1.5 }}
              >
                <Text
                  fontSize={{
                    base: isMobile ? "xl" : "3.5rem",
                    md: "5.3rem",
                    xl: "7.4rem",
                    xxl: "10rem",
                  }}
                  fontWeight="bold"
                  textTransform="uppercase"
                  textShadow="0 0 15px rgba(255, 255, 255, 0.9)"
                  letterSpacing="widest"
                  fontFamily="Orbitron"
                >
                  STRATEGY
                </Text>
              </motion.div>
            </Flex>

            {/* Box preview */}
            {specialBox}
          </SwiperSlide>

          <SwiperSlide>
            {/* Title */}
            <Flex
              position="relative"
              pt={isMobile ? 3 : 100}
              justify={"center"}
              alignItems={"center"}
              flexDir={"column"}
            >
              <Box
                position="absolute"
                right={isMobile ? "0%" : "30%"}
                bottom={isMobile ? "0%" : "50%"}
                width={"100%"}
              >
                <motion.img
                  width={isMobile ? "12%" : "8%"}
                  src="/elements/coins-1.png"
                  alt="Coin 1"
                  style={{
                    position: "absolute",
                    bottom: "0%",
                    left: isMobile ? "70%" : "85%",
                  }}
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: [0, -15, 15, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </Box>

              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
              >
                <Text
                  fontSize={{ base: "m", md: "m", xl: "2rem", xxl: "3rem" }}
                  letterSpacing="widest"
                  color="white"
                  fontFamily="Orbitron"
                >
                  STEP INTO
                </Text>
              </motion.div>

              <motion.div
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 1.5 }}
              >
                <Text
                  fontSize={{
                    base: isMobile ? "xl" : "3.5rem",
                    md: "5.3rem",
                    xl: "7.4rem",
                    xxl: "10rem",
                  }}
                  fontWeight="bold"
                  textTransform="uppercase"
                  textShadow="0 0 15px rgba(255, 255, 255, 0.9)"
                  letterSpacing="widest"
                  fontFamily="Orbitron"
                >
                  BOOSTING
                </Text>
              </motion.div>
            </Flex>

            {/* Joker preview */}
            {jokerCard}
          </SwiperSlide>

          <SwiperSlide>
            {/* Title */}
            <Flex
              position="relative"
              pt={isMobile ? 3 : 100}
              justify={"center"}
              alignItems={"center"}
              flexDir={"column"}
            >
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
              >
                <Text
                  fontSize={{ base: "m", md: "m", xl: "2rem", xxl: "3rem" }}
                  letterSpacing="widest"
                  color="white"
                  fontFamily="Orbitron"
                >
                  STEP INTO
                </Text>
              </motion.div>

              <motion.div
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 1.5 }}
              >
                <Text
                  fontSize={{
                    base: isMobile ? "xl" : "3.5rem",
                    md: "5.3rem",
                    xl: "7.4rem",
                    xxl: "10rem",
                  }}
                  fontWeight="bold"
                  textTransform="uppercase"
                  textShadow="0 0 15px rgba(255, 255, 255, 0.9)"
                  letterSpacing="widest"
                  fontFamily="Orbitron"
                >
                  COMPETENCE
                </Text>
              </motion.div>
            </Flex>

            {/* Leaderboard preview */}
            {leaderboard}
          </SwiperSlide>
        </Swiper>

        {/* Swiper navigation arrows */}
        <Box
          className="swiper-button-prev"
          position="absolute"
          bottom="0%"
          left={"30%"}
          zIndex="1"
          cursor="pointer"
        >
          <ChevronLeftIcon boxSize={10} color="white" />
        </Box>
        <Box
          className="swiper-button-next"
          position="absolute"
          right={"30%"}
          bottom="0%"
          zIndex="1"
          cursor="pointer"
        >
          <ChevronRightIcon boxSize={10} color="white" />
        </Box>
      </Flex>
    </Box>
  );
};
