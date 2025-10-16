import { Flex, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { isAndroid, isMobile } from "react-device-detect";
import { ANDROID_URL, IOS_URL } from "./constants/app";

export const StoresPage = () => {
  useEffect(() => {
    window.open(isAndroid ? ANDROID_URL : IOS_URL, "_blank");
  }, []);
  return (
    <Flex
      bgImage="url('/bg/bg-top.png')"
      bgSize="cover"
      bgPosition="center"
      color="white"
      flexDir={"column"}
      height="100svh"
      width="100vw"
      position="fixed"
      bottom={0}
      overflow="hidden"
      justifyContent="center"
      alignItems="center"
      onClick={() => {
        window.open(isAndroid ? ANDROID_URL : IOS_URL, "_blank");
      }}
    >
      <Image
        src={`/borders/top.png`}
        width="100%"
        maxHeight="70px"
        position="fixed"
        top={1}
        zIndex={2}
      />
      <Image
        src={`/borders/bottom.png`}
        width="100%"
        maxHeight="70px"
        position="fixed"
        bottom={1}
        zIndex={2}
      />
      <img width={isMobile ? "90%" : "60%"} src="logos/logo.png" alt="logo" />
      <Flex flexDirection={"row"} mt={isAndroid ? 0 : 3}>
        <img
          src={`/download/${isAndroid ? "android" : "ios-black"}.svg`}
          width={isAndroid ? "190px" : "170px"}
          alt="Download"
        />
      </Flex>
    </Flex>
  );
};
