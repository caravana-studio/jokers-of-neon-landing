import { Button, Flex, Heading, Image, Text, useToast } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";
import { useCallback, useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { VIOLET_LIGHT } from "../theme/colors";
import { registerEarlyAccess } from "../utils/registerEarlyAccess";
import { controller } from "./StarknetProvider";

const coinPulse = keyframes`
  0% {
    transform: scale(1.5) rotate(0deg);
  }
  50% {
    transform: scale(1.6) rotate(3deg);
  }
  100% {
    transform: scale(1.5) rotate(0deg);
  }
`;
const coinPulseBack = keyframes`
  0% {
    transform: scale(1.3) rotate(0deg);
  }
  50% {
    transform: scale(1.4) rotate(-3deg);
  }
  100% {
    transform: scale(1.3) rotate(0deg);
  }
`;

export const EarlyAccessSeason = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const toast = useToast();

  const [username, setUsername] = useState<string | null>(null);
  const [hasRegistered, setHasRegistered] = useState(false);
  const [registerError, setRegisterError] = useState<string | null>(null);
  const [autoRegisterAttempted, setAutoRegisterAttempted] = useState(false);
  const retryIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchUsername = useCallback(() => {
    controller.username()?.then((resolvedUsername) => {
      if (resolvedUsername) {
        setUsername(resolvedUsername);
      }
    });
  }, []);

  const clearRetry = () => {
    if (retryIntervalRef.current) {
      clearInterval(retryIntervalRef.current);
      retryIntervalRef.current = null;
    }
    setIsRetrying(false);
    setIsLoading(false);
  };

  const attemptConnect = useCallback(async () => {
    setIsLoading(true);
    const connector = connectors?.[0];

    if (!connector) {
      setIsRetrying(true);
      return;
    }

    try {
      await connect({ connector });
      const ready = controller.isReady();
      if (ready) {
        clearRetry();
        fetchUsername();
      } else {
        setIsRetrying(true);
      }
    } catch (err) {
      if (!isRetrying) {
        console.error("Connect failed, retrying...", err);
      }
      setIsRetrying(true);
    }
  }, [connect, connectors, fetchUsername, isRetrying]);

  useEffect(() => {
    fetchUsername();
  }, [fetchUsername]);

  const registerUser = useCallback(async () => {
    if (!username || !address) return;

    setRegisterError(null);
    setIsLoading(true);

    try {
      await registerEarlyAccess(username, address);
      setHasRegistered(true);
    } catch (error) {
      console.error("Failed to register early access", error);
      const status = (error as any)?.status;
      const description =
        status === 409
          ? "Player already registered"
          : error instanceof Error
          ? error.message
          : "Could not register. Please try again.";
      setRegisterError(description);
      toast({
        title: "Registration failed",
        description,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setHasRegistered(false);
      clearRetry();
      setAutoRegisterAttempted(false);
      setIsRetrying(false);
      setUsername(null);
      disconnect();
      try {
        await controller.disconnect();
      } catch (disconnectError) {
        console.error(
          "Failed to disconnect controller after error",
          disconnectError
        );
      }
    } finally {
      setIsLoading(false);
    }
  }, [address, toast, username]);

  // Once we have username + address, call register endpoint once.
  useEffect(() => {
    if (
      username &&
      address &&
      !hasRegistered &&
      !registerError &&
      !autoRegisterAttempted
    ) {
      setAutoRegisterAttempted(true);
      registerUser();
    }
  }, [
    address,
    autoRegisterAttempted,
    hasRegistered,
    registerError,
    registerUser,
    username,
  ]);

  // Poll for username once the controller is ready; clears loading/retry once obtained.
  useEffect(() => {
    if (username) return;

    const intervalId = setInterval(() => {
      if (!controller.isReady()) return;

      controller.username()?.then((resolvedUsername) => {
        if (resolvedUsername) {
          setUsername(resolvedUsername);
          clearRetry();
          clearInterval(intervalId);
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [username]);

  useEffect(() => {
    if (isRetrying && !retryIntervalRef.current) {
      retryIntervalRef.current = setInterval(() => {
        attemptConnect();
      }, 1000);
    }

    return () => {
      if (retryIntervalRef.current) {
        clearInterval(retryIntervalRef.current);
        retryIntervalRef.current = null;
      }
    };
  }, [attemptConnect, isRetrying]);

  return (
    <Flex
      flexDir={"column"}
      px={4}
      alignItems={"center"}
      background="url(/shop/season-pass/bg.jpg)"
      backgroundSize="cover"
      backgroundPosition="center"
      height={isMobile ? "400px" : "500px"}
      width={"100%"}
      justifyContent="center"
      overflow="hidden"
    >
      <Flex
        position="absolute"
        top={isMobile ? "20%" : 0}
        w={isMobile ? "120%" : "60%"}
      >
        <Image
          src="/shop/season-pass/coins-front.png"
          position="absolute"
          animation={`${coinPulse} 4s ease-in-out infinite`}
          transformOrigin="center"
          zIndex={2}
        />
        <Image
          src="/shop/season-pass/coins-back.png"
          zIndex={0}
          opacity={0.6}
          position="absolute"
          animation={`${coinPulseBack} 4s ease-in-out infinite`}
          transformOrigin="center"
        />
      </Flex>
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        gap={1}
      >
        <Heading
          color="lightViolet"
          variant={"italic"}
          fontSize={isMobile ? 27 : 65}
          lineHeight={1}
          textShadow={`0 0 7px ${VIOLET_LIGHT}`}
        >
          SEASON 1
        </Heading>
        <Text
          textTransform={"uppercase"}
          fontSize={isMobile ? 13 : 24}
          lineHeight={1.1}
          textAlign={"center"}
        >
          EARLY ACCESS
        </Text>
      </Flex>
      <Flex
        w="100%"
        justifyContent="center"
        alignItems="center"
        my={isMobile ? 4 : 10}
      >
        <Flex
          w={isMobile ? "80%" : "50%"}
          flexDir={"column"}
          gap={isMobile ? 3 : 5}
        >
          <Flex flexDir={"column"} gap={2}>
            <Text
              fontSize={isMobile ? 15 : 27}
              lineHeight={1.2}
              textAlign={"center"}
            >
              Be among the{" "}
              <span
                style={{
                  color: VIOLET_LIGHT,
                  fontWeight: "500",
                  textShadow: `0 0 5px ${VIOLET_LIGHT}`,
                }}
              >
                FIRST
              </span>{" "}
              to play Season 1 <br />
              starting December 19
            </Text>
            <Text
              fontSize={isMobile ? 9 : 15}
              lineHeight={1.2}
              textAlign={"center"}
              opacity={0.6}
            >
              (Desktop only)
            </Text>
          </Flex>
          <Text
            fontSize={isMobile ? 15 : 27}
            lineHeight={1.2}
            textAlign={"center"}
          >
            with{" "}
            <span
              style={{
                color: VIOLET_LIGHT,
                fontWeight: "500",
                textShadow: `0 0 5px ${VIOLET_LIGHT}`,
              }}
            >
              30% OFF
            </span>{" "}
            <br />
            on ALL shop items
          </Text>
        </Flex>
      </Flex>
      {username && hasRegistered && !registerError ? (
        <Heading fontSize={isMobile ? 10 : 20} textAlign={"center"}>
          {"REGISTERED AS " + username}
        </Heading>
      ) : null}
      {(!username || !hasRegistered) && (
        <Button
          variant={"secondarySolid"}
          w="50%"
          maxW="400px"
          fontFamily="Oxanium"
          fontSize={isMobile ? 13 : 18}
          mt={isMobile ? 2 : 6}
          h={isMobile ? "30px" : "50px"}
          onClick={username ? registerUser : attemptConnect}
          isLoading={isLoading}
          isDisabled={isLoading}
          loadingText={username ? "REGISTERING..." : "CONNECTING..."}
          mb={2}
        >
          REGISTER NOW
        </Button>
      )}
    </Flex>
  );
};
