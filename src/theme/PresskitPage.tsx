import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { ChevronUpIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { faInstagram, faTiktok, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBook, faGlobe, faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { ANDROID_URL, IOS_URL } from "../constants/app";
import { VIOLET_LIGHT } from "./colors";

const PLAY_URL = "https://play.jokersofneon.com";
const MEDIA_KIT_URL =
  "https://drive.google.com/drive/folders/1gJod_71ZqW6FXNVhT9ZssPw4sJ68dtmO?usp=sharing";

type SectionAnchor = {
  id: string;
  label: string;
};

type FeatureItem = {
  title: string;
  description: ReactNode;
};

type FactSheetItem = {
  label: string;
  value: ReactNode;
};

type OfficialLinkItem = {
  icon: unknown;
  label: string;
  value: string;
  disabled?: boolean;
  tooltip?: string;
};

const sectionAnchors: SectionAnchor[] = [
  { id: "pitch", label: "The Pitch" },
  { id: "stands-out", label: "Why It Stands Out" },
  { id: "core-loop", label: "Core Game Loop" },
  { id: "special-cards", label: "Special Cards" },
  { id: "seasonal-meta", label: "Seasonal Meta & Ownership" },
  { id: "web3-matters", label: "Why It Matters for Web3" },
  { id: "creator-videos", label: "Creator Videos" },
  { id: "fact-sheet", label: "Fact Sheet" },
  { id: "about-studio", label: "About the Studio" },
  { id: "media-assets", label: "Media Assets" },
  { id: "official-links", label: "Official Links" },
];

const VioletKeyword = ({ children }: { children: ReactNode }) => (
  <Box as="span" fontWeight="bold" color={VIOLET_LIGHT} fontSize="inherit" lineHeight="inherit">
    {children}
  </Box>
);

const BlueKeyword = ({ children }: { children: ReactNode }) => (
  <Box as="span" fontWeight="bold" color="blueLight" fontSize="inherit" lineHeight="inherit">
    {children}
  </Box>
);

const standoutItems: FeatureItem[] = [
  {
    title: "Poker-based scoring",
    description: (
      <>
        Build hands, optimize probabilities, and score big through{" "}
        <VioletKeyword>poker combinations</VioletKeyword> instead of traditional combat.
      </>
    ),
  },
  {
    title: "Run-defining synergies",
    description: (
      <>
        Special Cards can completely reshape how a run plays, enabling{" "}
        <VioletKeyword>deep combos</VioletKeyword> and surprising strategies.
      </>
    ),
  },
  {
    title: "Seasonal meta",
    description: (
      <>
        Each season introduces <VioletKeyword>new cards</VioletKeyword>, new strategies, and new{" "}
        <VioletKeyword>progression goals</VioletKeyword>.
      </>
    ),
  },
  {
    title: "Competitive leaderboards",
    description: (
      <>
        Players compete across daily, weekly, and seasonal rankings for rewards and status.
      </>
    ),
  },
  {
    title: "Fully on-chain",
    description: (
      <>
        Game logic and assets live on Starknet, bringing <VioletKeyword>transparency</VioletKeyword> and
        permanence to progression and ownership.
      </>
    ),
  },
  {
    title: "Tradable cards",
    description: (
      <>
        Seasonal Special Cards are <VioletKeyword>NFTs</VioletKeyword> that players can use in-game and{" "}
        <VioletKeyword>trade in a marketplace</VioletKeyword>.
      </>
    ),
  },
];

const gameLoopSteps: FeatureItem[] = [
  {
    title: "Start with a basic deck",
    description: (
      <>
        Every run begins with a <VioletKeyword>standard poker deck</VioletKeyword> and a fresh opportunity
        to build something powerful.
      </>
    ),
  },
  {
    title: "Play hands and beat rounds",
    description: (
      <>
        Score points by creating <VioletKeyword>poker hands</VioletKeyword> and reaching the target score
        before running out of plays.
      </>
    ),
  },
  {
    title: "Visit shops and improve your build",
    description: (
      <>
        Between rounds, buy <VioletKeyword>Special Cards</VioletKeyword> and items that strengthen your deck
        and open new strategic paths.
      </>
    ),
  },
  {
    title: "Build synergies and push deeper",
    description: (
      <>
        The heart of the game is combining <VioletKeyword>effects</VioletKeyword> and scaling your score run
        after run, while adapting your build to tougher boss rounds called <VioletKeyword>rage rounds</VioletKeyword>.
      </>
    ),
  },
];

const factSheetItems: FactSheetItem[] = [
  { label: "Game Title", value: "Jokers of Neon" },
  { label: "Developer", value: "Caravana Studio" },
  { label: "Genre", value: "Roguelike Deck-Builder Card Game" },
  { label: "Platform", value: "iOS, Android and Desktop" },
  { label: "Blockchain", value: "Starknet" },
  { label: "Status", value: "Live" },
  { label: "Business Model", value: "Free to Play" },
  { label: "Mode", value: "Single-player runs with competitive leaderboard progression" },
  { label: "Ownership Layer", value: "Seasonal Special Cards as NFTs" },
];

const officialLinks: OfficialLinkItem[] = [
  { label: "Website", value: "https://jokersofneon.com", icon: faGlobe },
  {
    label: "Marketplace",
    value: "https://jokersofneon.com/marketplace",
    icon: faStore,
    disabled: true,
    tooltip: "Marketplace (coming soon)",
  },
  { label: "Docs", value: "https://docs.jokersofneon.com/", icon: faBook },
  { label: "X", value: "https://x.com/jokers_of_neon", icon: faXTwitter },
  { label: "TikTok", value: "https://www.tiktok.com/@jokersofneon", icon: faTiktok },
  { label: "Instagram", value: "https://www.instagram.com/jokersofneon.gg", icon: faInstagram },
];

const creatorVideos = [
  { id: "XpYMMWwnqAo", autoplay: true },
  { id: "QLYLb1K904c", autoplay: false },
  { id: "fX49g90ROVE", autoplay: false },
  { id: "AVfktRwRq1w", autoplay: false },
];

const scrollToId = (id: string) => {
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
};

const updateMetaTag = (
  key: "name" | "property",
  value: string,
  content: string
): { element: HTMLMetaElement; previousContent: string | null; created: boolean } => {
  const selector = `meta[${key}="${value}"]`;
  const existing = document.head.querySelector(selector) as HTMLMetaElement | null;
  const element = existing ?? document.createElement("meta");
  if (!existing) {
    element.setAttribute(key, value);
    document.head.appendChild(element);
  }
  const previousContent = existing?.getAttribute("content") ?? null;
  element.setAttribute("content", content);
  return { element, previousContent, created: !existing };
};

const usePresskitSeo = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Jokers of Neon Press Kit";

    const updates = [
      updateMetaTag(
        "name",
        "description",
        "Official Jokers of Neon press kit: game overview, key differentiators, gameplay loop, media assets, and official links."
      ),
      updateMetaTag("property", "og:title", "Jokers of Neon Press Kit"),
      updateMetaTag(
        "property",
        "og:description",
        "A fully on-chain roguelike deck-builder with poker scoring, seasonal progression, and tradable ownership."
      ),
      updateMetaTag("property", "og:type", "website"),
      updateMetaTag("property", "og:url", "https://jokersofneon.com/presskit"),
    ];

    // TODO: Add og:image when final press kit social image is available.
    // updateMetaTag("property", "og:image", "https://jokersofneon.com/og/presskit.png");

    return () => {
      document.title = previousTitle;
      updates.forEach(({ element, previousContent, created }) => {
        if (created) {
          element.remove();
          return;
        }
        if (previousContent === null) {
          element.removeAttribute("content");
          return;
        }
        element.setAttribute("content", previousContent);
      });
    };
  }, []);
};

const sectionTitleStyles = {
  fontFamily: "Orbitron",
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  fontSize: { base: "2xl", md: "3xl" },
  lineHeight: 1.2,
  fontWeight: "semibold",
  color: "blueLight",
} as const;

const cardStyles = {
  border: "1px solid",
  borderColor: "whiteAlpha.300",
  bg: "whiteAlpha.100",
  backdropFilter: "blur(6px)",
  borderRadius: "xl",
  p: { base: 5, md: 6 },
} as const;

const SectionTitle = ({ title, color = "blueLight" }: { title: string; color?: string }) => (
  <Flex as="h2" align="center" gap={4}>
    <Text sx={{ ...sectionTitleStyles, color }}>{title}</Text>
    <Box flex="1" height="1px" bg="whiteAlpha.300" />
  </Flex>
);

const PresskitSection = ({
  id,
  title,
  children,
  titleColor,
}: {
  id: string;
  title: string;
  children: ReactNode;
  titleColor?: string;
}) => (
  <VStack id={id} as="section" align="stretch" spacing={6} scrollMarginTop="100px">
    <SectionTitle title={title} color={titleColor} />
    {children}
  </VStack>
);

const PresskitHero = () => (
  <Flex as="section" direction={{ base: "column", lg: "row" }} gap={8} align="center">
    <VStack align="stretch" spacing={6} flex="1 1 auto" justify="center" minH={{ base: "auto", lg: "170px" }}>
      <Text maxW="720px" fontSize={{ base: "md", md: "lg" }} lineHeight={1.75} color="whiteAlpha.900">
        A fully on-chain roguelike deck-builder that blends{" "}
        <VioletKeyword>poker hands</VioletKeyword>, powerful card synergies, competitive seasonal progression, and{" "}
        <VioletKeyword>true digital ownership</VioletKeyword>.
      </Text>
    </VStack>

    <VStack
      align="stretch"
      spacing={4}
      width={{ base: "100%", lg: "430px" }}
      ml={{ base: 0, lg: "auto" }}
      px={{ base: 2, lg: 1 }}
    >
      <HStack spacing={3} flexWrap="nowrap" justify={{ base: "center", lg: "flex-end" }}>
        <Link href={IOS_URL} isExternal _hover={{ textDecoration: "none" }}>
          <Image
            src="/download/ios-black.svg"
            alt="Download on the App Store"
            width={{ base: "150px", md: "180px" }}
          />
        </Link>

        <Link href={ANDROID_URL} isExternal _hover={{ textDecoration: "none" }}>
          <Image
            src="/download/android.svg"
            alt="Get it on Google Play"
            width={{ base: "180px", md: "220px" }}
          />
        </Link>
      </HStack>

      <Button
        as="a"
        href={PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        variant="outlinePrimaryGlow"
        rightIcon={<ExternalLinkIcon />}
        width="calc(100% - 20px)"
        ml={2}
        mr={3}
      >
        Play on Desktop
      </Button>
    </VStack>
  </Flex>
);

const TeaserPitchBlock = ({ autoplay }: { autoplay: boolean }) => (
  <Grid templateColumns={{ base: "1fr", lg: "1.05fr 0.95fr" }} gap={6} alignItems="center">
    <VStack align="stretch" spacing={4}>
      <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
        Jokers of Neon is a fully on-chain roguelike card game built on Starknet, combining{" "}
        <BlueKeyword>poker mechanics</BlueKeyword>, <BlueKeyword>deck-building strategy</BlueKeyword>, and a{" "}
        <BlueKeyword>seasonal TCG meta</BlueKeyword> with real asset ownership.
      </Text>
      <Box {...cardStyles}>
        <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.7} fontWeight="medium">
          Think <BlueKeyword>Balatro meets Slay the Spire</BlueKeyword>, with seasonal competition and
          tradable card ownership built in from day one.
        </Text>
      </Box>
    </VStack>
    <Box
      borderRadius="xl"
      border="1px solid"
      borderColor="whiteAlpha.300"
      overflow="hidden"
      bg="black"
      minH={{ base: "240px", md: "320px" }}
    >
      <Box
        as="iframe"
        width="100%"
        height="100%"
        minH={{ base: "240px", md: "320px" }}
        src={`https://www.youtube.com/embed/Pv-m60LBw8w?rel=0&playsinline=1&mute=1${autoplay ? "&autoplay=1&loop=1&playlist=Pv-m60LBw8w" : ""}`}
        title="Jokers of Neon - Teaser"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </Box>
  </Grid>
);

const CoreLoopBlock = ({ autoplay }: { autoplay: boolean }) => (
  <VStack align="stretch" spacing={{ base: 4, md: 6 }}>
    <Box
      borderRadius="xl"
      border="1px solid"
      borderColor="whiteAlpha.300"
      overflow="hidden"
      bg="black"
      minH={{ base: "240px", md: "420px" }}
    >
      <Box
        as="iframe"
        width="100%"
        height="100%"
        minH={{ base: "240px", md: "420px" }}
        src={`https://www.youtube.com/embed/yCac6cfDm3k?si=99qqW4eLetzZbs75&rel=0&playsinline=1&mute=1${autoplay ? "&autoplay=1&loop=1&playlist=yCac6cfDm3k" : ""}`}
        title="Jokers of Neon - Core Game Loop"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </Box>

    <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={{ base: 3, md: 4 }}>
      {gameLoopSteps.map((step, index) => (
        <Box key={step.title} {...cardStyles} py={0} minH={{ base: "172px", md: "190px" }}>
          <Flex align="stretch" height="100%">
            <Flex
              width={{ base: "78px", md: "90px" }}
              align="center"
              justify="center"
              borderRight="1px solid"
              borderColor="whiteAlpha.300"
              flexShrink={0}
              pr={{ base: 2, md: 3 }}
            >
              <Text fontFamily="Orbitron" fontSize={{ base: "3xl", md: "5xl" }} color={VIOLET_LIGHT} lineHeight={1}>
                {String(index + 1).padStart(2, "0")}
              </Text>
            </Flex>
            <VStack align="stretch" justify="center" spacing={3} px={5} py={4} flex="1">
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                lineHeight={1.3}
                fontWeight="semibold"
              >
                {step.title}
              </Text>
              <Text fontSize={{ base: "md", md: "md" }} lineHeight={1.7} color="whiteAlpha.900">
                {step.description}
              </Text>
            </VStack>
          </Flex>
        </Box>
      ))}
    </SimpleGrid>
  </VStack>
);

const SpecialCardsBlock = () => (
  <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={6} alignItems="center">
    <VStack align="stretch" spacing={4}>
      <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
        Special Cards are the <BlueKeyword>strategic core of Jokers of Neon</BlueKeyword>.
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
        These cards apply <BlueKeyword>powerful effects</BlueKeyword> that influence your entire run and
        often determine the type of build you want to pursue.
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
        Some reward specific poker hands. Others change how your deck scales, how your score grows, or how
        efficiently you can play.
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
        The fun comes from stacking these effects, discovering <BlueKeyword>synergies</BlueKeyword>, and
        finding overpowered combinations.
      </Text>
    </VStack>

    <Image
      src="/press/specials.png"
      alt="Jokers of Neon special cards"
      width={{ base: "95%", lg: "90%" }}
      mx="auto"
      height="auto"
      objectFit="contain"
      display="block"
    />
  </Grid>
);

const FactSheetTable = () => {
  const splitIndex = Math.ceil(factSheetItems.length / 2);
  const leftItems = factSheetItems.slice(0, splitIndex);
  const rightItems = factSheetItems.slice(splitIndex);
  const rowCount = Math.max(leftItems.length, rightItems.length);

  return (
    <Box px={{ base: 4, md: 8, lg: 12 }} my={{ base: 4, md: 6 }}>
      <VStack align="stretch" spacing={0} borderTop="1px solid" borderColor="whiteAlpha.300">
      {Array.from({ length: rowCount }).map((_, index) => (
        <Grid
          key={`fact-sheet-row-${index}`}
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          columnGap={{ base: 0, lg: 10 }}
          rowGap={0}
          borderBottom="1px solid"
          borderColor="whiteAlpha.300"
        >
          {leftItems[index] && (
            <Grid templateColumns={{ base: "1fr", md: "220px 1fr" }} gap={4} py={4}>
              <Text
                fontFamily="Orbitron"
                textTransform="uppercase"
                letterSpacing="0.06em"
                fontSize="xs"
                color="whiteAlpha.700"
              >
                {leftItems[index].label}
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.55}>
                {leftItems[index].value}
              </Text>
            </Grid>
          )}
          {rightItems[index] ? (
            <Grid
              templateColumns={{ base: "1fr", md: "220px 1fr" }}
              gap={4}
              py={4}
              borderTop={{ base: "1px solid", lg: "none" }}
              pl={{ base: 0, lg: 0 }}
            >
              <Text
                fontFamily="Orbitron"
                textTransform="uppercase"
                letterSpacing="0.06em"
                fontSize="xs"
                color="whiteAlpha.700"
              >
                {rightItems[index].label}
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.55}>
                {rightItems[index].value}
              </Text>
            </Grid>
          ) : (
            <Box display={{ base: "none", lg: "block" }} />
          )}
        </Grid>
      ))}
      </VStack>
    </Box>
  );
};

const AboutStudioBlock = () => (
  <Grid templateColumns={{ base: "1fr", lg: "1.1fr 0.9fr" }} gap={8} alignItems="center">
    <VStack align="stretch" spacing={4}>
      <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
        Caravana Studio is an <BlueKeyword>independent game studio</BlueKeyword> building competitive,
        replayable, and ownership-driven games.
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
        The team combines game design, frontend development, and blockchain
        infrastructure to create experiences that connect traditional gameplay depth with Web3-native systems.
      </Text>
    </VStack>
    <Flex align="center" justify="center" minH="220px">
      <Image
        src="/press/caravana-logo.png"
        alt="Caravana Studio logo"
        maxW={{ base: "220px", md: "320px" }}
      />
    </Flex>
  </Grid>
);

const TocCard = () => (
  <Box display={{ base: "none", xl: "block" }} position="sticky" top="24px">
    <VStack align="stretch" spacing={3} {...cardStyles}>
      <Text fontFamily="Orbitron" textTransform="uppercase" letterSpacing="0.08em" fontSize="sm" color="whiteAlpha.800">
        Press Kit Index
      </Text>
      {sectionAnchors.map((item) => (
        <Link
          key={item.id}
          href={`#${item.id}`}
          color="whiteAlpha.900"
          _hover={{ color: "blueLight", textDecoration: "none" }}
          onClick={(event) => {
            event.preventDefault();
            scrollToId(item.id);
          }}
          fontSize="sm"
          lineHeight={1.4}
        >
          {item.label}
        </Link>
      ))}
    </VStack>
  </Box>
);

const MediaAssetsBlock = () => (
  <VStack align="stretch" spacing={5}>
    <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
      Need visuals, logos, screenshots, or gameplay assets? Download the <VioletKeyword>official media
      kit</VioletKeyword> below.
    </Text>
    <Button
      as="a"
      href={MEDIA_KIT_URL}
      target="_blank"
      rel="noopener noreferrer"
      width={{ base: "100%", sm: "fit-content" }}
      variant="outlinePrimaryGlow"
      rightIcon={<ExternalLinkIcon />}
    >
      Open Media Kit
    </Button>
  </VStack>
);

const CreatorVideosBlock = () => (
  <VStack align="stretch" spacing={5}>
    <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
      Creator-style short videos showing how Jokers of Neon is presented in social-first gaming content.
    </Text>
    <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={{ base: 3, md: 5 }}>
      {creatorVideos.map((video, index) => (
        <Box
          key={`${video.id}-${index}`}
          borderRadius="xl"
          border="1px solid"
          borderColor="whiteAlpha.300"
          overflow="hidden"
          bg="black"
        >
          <Box
            as="iframe"
            width="100%"
            aspectRatio="9 / 16"
            src={`https://www.youtube.com/embed/${video.id}?rel=0&playsinline=1${video.autoplay ? `&mute=1&autoplay=1&loop=1&playlist=${video.id}` : ""}`}
            title={`Jokers of Neon creator short ${index + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </Box>
      ))}
    </SimpleGrid>
  </VStack>
);

const FixedCardsBackgroundBand = () => (
  <Box
    width="100vw"
    ml="calc(50% - 50vw)"
    minH={{ base: "280px", md: "420px", lg: "520px" }}
    position="relative"
    overflow="hidden"
  >
    <Box
      position="absolute"
      inset={0}
      bgImage="url('/press/all-cards.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgAttachment="fixed"
    />
    <Box
      position="absolute"
      inset={0}
      bg="linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.7) 100%)"
      pointerEvents="none"
    />
  </Box>
);

export const PresskitPage = () => {
  usePresskitSeo();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [heroScrollProgress, setHeroScrollProgress] = useState(0);
  const [autoplayTeaser, setAutoplayTeaser] = useState(false);
  const [autoplayCoreLoop, setAutoplayCoreLoop] = useState(false);
  const teaserRef = useRef<HTMLDivElement | null>(null);
  const coreLoopRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 900);
      const progress = Math.min(window.scrollY / 360, 1);
      setHeroScrollProgress(progress);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const target = teaserRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setAutoplayTeaser(entry.isIntersecting),
      { threshold: 0.45 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const target = coreLoopRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setAutoplayCoreLoop(entry.isIntersecting),
      { threshold: 0.45 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      minH="100vh"
      color="white"
      bg="black"
      position="relative"
      py={0}
      px={0}
    >
      <Box
        id="hero"
        as="section"
        scrollMarginTop="0"
        position="sticky"
        top={0}
        zIndex={0}
        overflow="hidden"
      >
        <Image
          src="/press/head-img.jpg"
          alt="Jokers of Neon press header"
          width="100%"
          height={{ base: "auto", md: "360px", lg: "460px" }}
          objectFit={{ base: "cover", md: "cover" }}
          filter={`blur(${(heroScrollProgress * 6).toFixed(2)}px) brightness(${(1 - heroScrollProgress * 0.35).toFixed(2)})`}
          transition="filter 120ms linear"
          willChange="filter"
          display="block"
        />
        <Box
          position="absolute"
          inset={0}
          bg={`rgba(0, 0, 0, ${(heroScrollProgress * 0.35).toFixed(2)})`}
          pointerEvents="none"
        />
      </Box>

      <Box
        position="relative"
        zIndex={1}
        mt="-2px"
        pt={{ base: 10, md: 16 }}
        pb={{ base: 10, md: 14 }}
        bg="radial-gradient(120% 120% at 0% 0%, rgba(6,107,155,0.5) 0%, rgba(3,6,16,0.98) 45%, rgba(0,0,0,0.98) 100%)"
      >
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        <Grid templateColumns={{ base: "1fr", xl: "260px minmax(0,1fr)" }} gap={{ base: 8, xl: 12 }}>
          <GridItem>
            <TocCard />
          </GridItem>

          <GridItem>
            <VStack align="stretch" spacing={{ base: 12, md: 16 }}>
              <PresskitHero />

              <PresskitSection id="pitch" title="The Pitch">
                <Box ref={teaserRef}>
                  <TeaserPitchBlock autoplay={autoplayTeaser} />
                </Box>
              </PresskitSection>

              <PresskitSection id="stands-out" title="Why It Stands Out" titleColor={VIOLET_LIGHT}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 3, md: 4 }}>
                  {standoutItems.map((item, index) => (
                    <Box key={item.title} {...cardStyles} py={0} minH={{ base: "176px", md: "200px" }}>
                      <Flex align="stretch" height="100%">
                        <Flex
                          width={{ base: "90px", md: "126px" }}
                          align="center"
                          justify="center"
                          borderRight="1px solid"
                          borderColor="whiteAlpha.300"
                          flexShrink={0}
                          pr={{ base: 2, md: 4 }}
                        >
                          <Text
                            fontFamily="Orbitron"
                            fontSize={{ base: "4xl", md: "6xl" }}
                            color={VIOLET_LIGHT}
                            lineHeight={1}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </Text>
                        </Flex>
                        <VStack align="stretch" justify="center" spacing={3} px={{ base: 4, md: 6 }} py={{ base: 4, md: 5 }} flex="1">
                          <Text fontSize={{ base: "lg", md: "xl" }} lineHeight={1.3} fontWeight="semibold">
                            {item.title}
                          </Text>
                          <Text fontSize={{ base: "md", md: "md" }} color="whiteAlpha.900" lineHeight={1.75}>
                            {item.description}
                          </Text>
                        </VStack>
                      </Flex>
                    </Box>
                  ))}
                </SimpleGrid>
              </PresskitSection>

              <FixedCardsBackgroundBand />

              <PresskitSection id="core-loop" title="Core Game Loop" titleColor={VIOLET_LIGHT}>
                <Box ref={coreLoopRef}>
                  <CoreLoopBlock autoplay={autoplayCoreLoop} />
                </Box>
              </PresskitSection>

              <PresskitSection id="special-cards" title="Special Cards">
                <SpecialCardsBlock />
              </PresskitSection>

              <PresskitSection id="seasonal-meta" title="Seasonal Meta & Ownership" titleColor={VIOLET_LIGHT}>
                <VStack align="stretch" spacing={4}>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
                    Beyond its <VioletKeyword>roguelike gameplay</VioletKeyword>, Jokers of Neon features a{" "}
                    <VioletKeyword>season-based meta layer</VioletKeyword>.
                  </Text>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
                    Each season introduces a new set of <VioletKeyword>Special Cards</VioletKeyword> that players can
                    earn through <VioletKeyword>progression and packs</VioletKeyword>. These cards shape the strategy
                    space of the season and create new build possibilities.
                  </Text>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
                    <VioletKeyword>Special Cards are NFTs</VioletKeyword>. Once a player owns a card, they can use it
                    in-game and also trade or list it on the <VioletKeyword>marketplace</VioletKeyword>.
                  </Text>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
                    Players can get started without needing to understand crypto upfront, while{" "}
                    <VioletKeyword>ownership</VioletKeyword> becomes a meaningful layer for those who want it.
                  </Text>
                </VStack>
                <Image
                  src="/press/seasons.jpg"
                  alt="Jokers of Neon seasonal meta visual"
                  width="100%"
                  height="auto"
                  objectFit="contain"
                  display="block"
                />
              </PresskitSection>

              <PresskitSection id="web3-matters" title="Why It Matters for Web3">
                <VStack align="stretch" spacing={4}>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
                    Jokers of Neon is fully on-chain, with <BlueKeyword>verifiable game logic</BlueKeyword>,{" "}
                    <BlueKeyword>transparent scarcity</BlueKeyword>, and assets that exist beyond the client
                    itself.
                  </Text>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
                    Rather than using blockchain as a cosmetic add-on, the game treats ownership, permanence,
                    and open economies as part of its core design.
                  </Text>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
                    The result is a game that aims to stay accessible to traditional players while remaining
                    genuinely native to Web3 infrastructure.
                  </Text>
                </VStack>
              </PresskitSection>

              <PresskitSection id="creator-videos" title="Creator Video Examples" titleColor={VIOLET_LIGHT}>
                <CreatorVideosBlock />
              </PresskitSection>

              <PresskitSection id="fact-sheet" title="Fact Sheet" titleColor={VIOLET_LIGHT}>
                <FactSheetTable />
              </PresskitSection>

              <PresskitSection id="about-studio" title="About Caravana Studio">
                <AboutStudioBlock />
              </PresskitSection>

              <PresskitSection id="media-assets" title="Media Assets" titleColor={VIOLET_LIGHT}>
                <MediaAssetsBlock />
              </PresskitSection>

              <PresskitSection id="official-links" title="Official Links">
                <Grid templateColumns={{ base: "1fr", lg: "1fr 340px" }} gap={8} alignItems="center">
                  <Flex justify={{ base: "center", lg: "flex-start" }} align="center" gap={5} flexWrap="wrap" py={2}>
                    {officialLinks.map((item) => (
                      <Tooltip key={item.label} label={item.tooltip ?? item.label} placement="top">
                        <Flex
                          as={item.disabled ? "div" : Link}
                          {...(item.disabled ? {} : { href: item.value, isExternal: true })}
                          border="1px solid white"
                          w="60px"
                          h="60px"
                          borderRadius="full"
                          alignItems="center"
                          justifyContent="center"
                          opacity={item.disabled ? 0.45 : 1}
                          cursor={item.disabled ? "not-allowed" : "pointer"}
                          _hover={
                            item.disabled
                              ? { borderColor: "white" }
                              : { borderColor: "blueLight", textDecoration: "none" }
                          }
                          aria-disabled={item.disabled ? true : undefined}
                        >
                          <FontAwesomeIcon icon={item.icon as never} color="white" fontSize="26px" />
                        </Flex>
                      </Tooltip>
                    ))}
                  </Flex>

                  <Box {...cardStyles}>
                    <Text fontFamily="Orbitron" textTransform="uppercase" letterSpacing="0.06em" fontSize="xs" color="whiteAlpha.700">
                      Press Contact
                    </Text>
                    <Text mt={2} fontSize={{ base: "md", md: "lg" }}>gm@jokersofneon.com</Text>
                  </Box>
                </Grid>
              </PresskitSection>

              <Box
                as="section"
                border="1px solid"
                borderColor="whiteAlpha.300"
                borderRadius="2xl"
                px={{ base: 5, md: 8 }}
                py={{ base: 8, md: 10 }}
                mb={{ base: 6, md: 8 }}
                bg="linear-gradient(135deg, rgba(161,68,178,0.2) 0%, rgba(6,107,155,0.2) 100%)"
                textAlign="center"
              >
                <VStack spacing={5}>
                  <Text fontFamily="Orbitron" textTransform="uppercase" letterSpacing="0.05em" fontSize={{ base: "xl", md: "2xl" }}>
                    Want to see Jokers of Neon in action?
                  </Text>
                  <HStack spacing={3} flexWrap="wrap" justify="center">
                    <Link href={IOS_URL} isExternal _hover={{ textDecoration: "none" }}>
                      <Image src="/download/ios-black.svg" alt="Download on the App Store" width="170px" />
                    </Link>
                    <Link href={ANDROID_URL} isExternal _hover={{ textDecoration: "none" }}>
                      <Image src="/download/android.svg" alt="Get it on Google Play" width="205px" />
                    </Link>
                  </HStack>
                  <Button
                    as="a"
                    href={PLAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlinePrimaryGlow"
                    rightIcon={<ExternalLinkIcon />}
                    width={{ base: "100%", sm: "fit-content" }}
                  >
                    Play on Desktop
                  </Button>
                </VStack>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
      </Box>

      {showBackToTop && (
        <Button
          position="fixed"
          right={{ base: 4, md: 6 }}
          bottom={{ base: 4, md: 6 }}
          size="sm"
          variant="outlineSecondaryGlow"
          onClick={() => scrollToId("hero")}
          leftIcon={<ChevronUpIcon />}
        >
          Back to top
        </Button>
      )}
    </Box>
  );
};
