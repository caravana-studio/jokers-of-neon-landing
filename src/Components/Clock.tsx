import { Flex, Text } from "@chakra-ui/react";
import ClockIcon from "/icons/clock.svg?component";
import { IconComponent } from "./IconComponent";
import { Countdown } from "./Countdown";

interface ClockProps {
  date: Date;
  fontSize?: number;
  iconSize?: string;
}

export const Clock = ({ date, fontSize, iconSize = "12px"}: ClockProps) => {
  return (
    <Flex
      gap={1}
      borderRadius={"full"}
      border="1px solid white"
      px={1.5}
      pb={0.5}
      alignItems={"center"}
      justifyContent={"center"}
      zIndex={10}
      bgColor="white"
      mb={1}
    >
      <IconComponent icon={ClockIcon} color={"white"} width={iconSize} height={iconSize} />
      <Countdown targetDate={date}>
        {({ formatted }) => <Text mt={0.5} color="black" fontSize={fontSize}>{formatted}</Text>}
      </Countdown>
    </Flex>
  );
};
