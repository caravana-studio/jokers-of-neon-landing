import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CARD_HEIGHT } from "../constants/visualProps";
import SpineAnimation, { SpineAnimationRef } from "./SpineAnimation";

const animationsData = {
  initialAnimation: "0.idle",
  hoverAnimation: "1.opening",
  loopAnimation: "2.opened",
  openBoxAnimation: "3.expand",
};

export const BoxSection = () => {
  const { t } = useTranslation("landing");
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

  const coin1 = (
    <Flex
      position={"absolute"}
      bottom={isMobile ? "0%" : "5%"}
      right={isMobile ? "-10%" : "-19%"}
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
  );
  const coin2 = (
    <Flex
      position={"absolute"}
      bottom={isMobile ? "0%" : "5%"}
      right={isMobile ? "-5%" : "-8%"}
      width={isMobile ? "20%" : "18%"}
      transform={"rotate(90deg)"}
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
  );

  const coin3 = (
    <Flex
      position={"absolute"}
      bottom={"-3%"}
      left={0}
      width={"16%"}
      zIndex={-1}
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
  );

  const specialBox = (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      mb={{ base: 6, sm: 2 }}
      mt={{base: '-40px', sm: '-120px'}}
    >
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        width={{ base: "95%", sm: "70%", md: "65%", lg: "1100px" }}
        margin={"0 auto"}
        p={6}
        zIndex={1}
        height={"100%"}
      >
        <Flex
          flexDirection={{ base: "column", sm: "column" }}
          alignItems={isMobile ? "flex-end" : "flex-end"}
          width="100%"
          justifyContent={"flex-end"}
          position={"relative"}
          alignContent="flex-end"
        >
          {isMobile ? (
            <Flex
              position={"absolute"}
              bottom={0}
              left={{ base: "-25%", mb: "-35%" }}
              w={{ base: "80%", mb: "100%" }}
              h={{
                base: `${CARD_HEIGHT * 1 + 30}px`,
              }}
              justifyContent="center"
              flexDir="column"
            >
              {spineAnim}
            </Flex>
          ) : (
            <Flex
              position={"absolute"}
              bottom={0}
              left={isMobile ? "-35%" : "-5%"}
              w={{ base: "100%", sm: "50%" }}
              h={{
                base: `600px`,
              }}
              justifyContent="center"
              flexDir="column"
            >
              {spineAnim}
            </Flex>
          )}
          <Image w="100%" src={"/elements/specials.png"} borderRadius="25px" />
        </Flex>
      </Flex>
    </Flex>
  );

  const jokerCard = (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      mb={{ base: 6, sm: 2 }}
      mt={{base: '-40px', sm: '-120px'}}
    >
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        width={{ base: "95%", sm: "70%", md: "65%", lg: "1100px" }}
        margin={"0 auto"}
        p={6}
        zIndex={1}
        height={"100%"}
      >
        <Flex
          flexDirection={{ base: "column", sm: "column" }}
          alignItems={isMobile ? "flex-end" : "flex-end"}
          width="100%"
          justifyContent={"flex-end"}
          position={"relative"}
          alignContent="flex-end"
        >
          {coin1}
          {coin2}
          {coin3}
          <Image w="100%" src={"/elements/joker.png"} borderRadius="25px" />
        </Flex>
      </Flex>
    </Flex>
  );

  const leaderboard = (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      mb={{ base: 6, sm: 2 }}
      mt={{base: '-40px', sm: '-120px'}}
    >
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        width={{ base: "95%", sm: "70%", md: "65%", lg: "1100px" }}
        margin={"0 auto"}
        p={6}
        zIndex={1}
        height={"100%"}
      >
        <Image w="100%" src={"/elements/leaderboard.png"} borderRadius="25px" />
      </Flex>
    </Flex>
  );

  return (
    <Box
      w="100vw"
      h={{ base: "70vh", sm: "130vh" }}
      bgImage="url('/bg/bg-top.jpg')"
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
          autoplay={{ delay: 5000, disableOnInteraction: true }}
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
                right={isMobile ? "60%" : "38%"}
                width={"100%"}
                zIndex={-1}
              >
                <motion.img
                  width={isMobile ? "8%" : "4%"}
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
                  width={isMobile ? "15%" : "8%"}
                  src="/elements/ring.png"
                  alt="Rotating Ring"
                  style={{
                    position: "absolute",
                    left: isMobile ? "70%" : "68%",
                    top: isMobile? 0 : "32px"
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
                right={isMobile ? "-8%" : "25%"}
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
                  fontSize={{
                    base: isMobile ? "2xs" : "m",
                    md: "m",
                    xl: "2rem",
                    xxl: "3rem",
                  }}
                  letterSpacing="widest"
                  color="white"
                  fontFamily="Orbitron"
                >
                  {t("box.stepInto")}
                </Text>
              </motion.div>

              <motion.div
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 1.5 }}
              >
                <Text
                  fontSize={{
                    base: isMobile ? "4xl" : "3.5rem",
                    md: "5.3rem",
                    xl: "7.4rem",
                    xxl: "10rem",
                  }}
                  fontWeight="bold"
                  textTransform="uppercase"
                  textShadow={{base: "0 0 8px rgba(255, 255, 255, 0.4)", sm: "0 0 15px rgba(255, 255, 255, 0.9)"}}  
                  letterSpacing="widest"
                  fontFamily="Orbitron"
                >
                  {t("box.strategy")}
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
                bottom={isMobile ? "50%" : "50%"}
                width={"100%"}
              >
                <motion.img
                  width={isMobile ? "15%" : "110px"}
                  src="/elements/coins-1.png"
                  alt="Coin 1"
                  style={{
                    position: "absolute",
                    bottom: "0%",
                    left: isMobile ? "70%" : "90%",
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
                  fontSize={{
                    base: isMobile ? "2xs" : "m",
                    md: "m",
                    xl: "2rem",
                    xxl: "3rem",
                  }}
                  letterSpacing="widest"
                  color="white"
                  fontFamily="Orbitron"
                >
                  {t("box.stepInto")}
                </Text>
              </motion.div>

              <motion.div
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 1.5 }}
              >
                <Text
                  fontSize={{
                    base: isMobile ? "4xl" : "3.5rem",
                    md: "5.3rem",
                    xl: "7.4rem",
                    xxl: "10rem",
                  }}
                  fontWeight="bold"
                  textTransform="uppercase"
                  textShadow={{base: "0 0 8px rgba(255, 255, 255, 0.4)", sm: "0 0 15px rgba(255, 255, 255, 0.9)"}}  
                  letterSpacing="widest"
                  fontFamily="Orbitron"
                >
                  {t("box.boosting")}
                </Text>
              </motion.div>
            </Flex>

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
                  fontSize={{
                    base: isMobile ? "2xs" : "m",
                    md: "m",
                    xl: "2rem",
                    xxl: "3rem",
                  }}
                  letterSpacing="widest"
                  color="white"
                  fontFamily="Orbitron"
                >
                  {t("box.stepInto")}
                </Text>
              </motion.div>

              <motion.div
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{ duration: 1.5 }}
              >
                <Text
                  fontSize={{
                    base: isMobile ? "4xl" : "3.5rem",
                    md: "5.3rem",
                    xl: "7.4rem",
                    xxl: "10rem",
                  }}
                  fontWeight="bold"
                  textTransform="uppercase"
                  textShadow={{base: "0 0 8px rgba(255, 255, 255, 0.4)", sm: "0 0 15px rgba(255, 255, 255, 0.9)"}}  
                  letterSpacing="widest"
                  fontFamily="Orbitron"
                >
                  {t("box.competence")}
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
