import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

const Card: React.FC<{
  imageSrc: string;
  zIndex: number;
  rotate: number;
}> = ({ imageSrc, zIndex, rotate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileTap={
        isMobile
          ? {
              scale: 1.05,
              rotate: rotate + 20,
              transition: { duration: 0.5 },
            }
          : {}
      }
      whileHover={{
        scale: 1.05,
        rotate: rotate + 2,
        transition: { duration: 0.2 },
      }}
      style={{
        zIndex,
      }}
    >
      <Box
        width={isMobile ? "20vw" : "11.5vw"}
        borderRadius="12px"
        position="relative"
        transform={`rotate(${rotate}deg)`}
      >
        {/* Glow effect */}
        <Box
          position="absolute"
          top="-2px"
          left="-2px"
          right="-2px"
          bottom="-2px"
          borderRadius="14px"
          border="2px solid white"
          boxShadow="0 0 20px 5px rgba(255, 255, 255, 0.7)"
          zIndex={2}
        />

        {/* Card content */}
        <Image
          p={3}
          src={imageSrc}
          alt="Card"
          width="100%"
          height="100%"
          objectFit="cover"
          borderRadius="10px"
          zIndex={1}
        />
      </Box>
    </motion.div>
  );
};

interface CosmicCardsProps {
  cardUrl: string;
  rotate: number;
}

const CosmicCards: React.FC<CosmicCardsProps> = ({ cardUrl, rotate }) => {
  return (
    <Flex width="100%" justifyContent="center" alignItems="center" bg="black">
      <Box position="relative" width="100%" height="100%">
        <Card imageSrc={cardUrl} zIndex={3} rotate={rotate} />
      </Box>
    </Flex>
  );
};

export default CosmicCards;
