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
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { faInstagram, faTiktok, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBook, faGlobe, faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircleFlagLanguage } from "react-circle-flags";
import { type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { ANDROID_URL, IOS_URL } from "../constants/app";
import { VIOLET_LIGHT } from "./colors";

const PLAY_URL = "https://play.jokersofneon.com";
const MEDIA_KIT_URL =
  "https://drive.google.com/drive/folders/1gJod_71ZqW6FXNVhT9ZssPw4sJ68dtmO?usp=sharing";

type SectionAnchor = {
  id: string;
  labelKey: string;
};

type FactSheetItem = {
  label: string;
  value: ReactNode;
};

type OfficialLinkItem = {
  icon: unknown;
  labelKey: string;
  value: string;
  disabled?: boolean;
  tooltip?: string;
};

const sectionAnchors: SectionAnchor[] = [
  { id: "pitch", labelKey: "index.pitch" },
  { id: "stands-out", labelKey: "index.standsOut" },
  { id: "core-loop", labelKey: "index.coreLoop" },
  { id: "special-cards", labelKey: "index.specialCards" },
  { id: "seasonal-meta", labelKey: "index.seasonalMeta" },
  { id: "web3-matters", labelKey: "index.web3" },
  { id: "creator-videos", labelKey: "index.creatorVideos" },
  { id: "fact-sheet", labelKey: "index.factSheet" },
  { id: "about-studio", labelKey: "index.aboutStudio" },
  { id: "media-assets", labelKey: "index.mediaAssets" },
  { id: "official-links", labelKey: "index.officialLinks" },
];

const VioletKeyword = ({ children }: { children?: ReactNode }) => (
  <Box as="span" fontWeight="bold" color={VIOLET_LIGHT} fontSize="inherit" lineHeight="inherit">
    {children}
  </Box>
);

const BlueKeyword = ({ children }: { children?: ReactNode }) => (
  <Box as="span" fontWeight="bold" color="blueLight" fontSize="inherit" lineHeight="inherit">
    {children}
  </Box>
);

const standoutItemIndexes = [0, 1, 2, 3, 4, 5];
const gameLoopStepIndexes = [0, 1, 2, 3];

const officialLinks: OfficialLinkItem[] = [
  { labelKey: "officialLinks.labels.website", value: "https://jokersofneon.com", icon: faGlobe },
  {
    labelKey: "officialLinks.labels.marketplace",
    value: "https://jokersofneon.com/marketplace",
    icon: faStore,
    disabled: true,
    tooltip: "officialLinks.marketplaceComingSoon",
  },
  { labelKey: "officialLinks.labels.docs", value: "https://docs.jokersofneon.com/", icon: faBook },
  { labelKey: "officialLinks.labels.x", value: "https://x.com/jokers_of_neon", icon: faXTwitter },
  { labelKey: "officialLinks.labels.tiktok", value: "https://www.tiktok.com/@jokersofneon", icon: faTiktok },
  { labelKey: "officialLinks.labels.instagram", value: "https://www.instagram.com/jokersofneon.gg", icon: faInstagram },
];

const creatorVideos = [
  { id: "XpYMMWwnqAo", autoplay: true },
  { id: "QLYLb1K904c", autoplay: false },
  { id: "fX49g90ROVE", autoplay: false },
  { id: "AVfktRwRq1w", autoplay: false },
];

const languageOptions = [
  { code: "en", flagCode: "en-us" },
  { code: "es", flagCode: "es" },
  { code: "pt", flagCode: "pt" },
] as const;

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

const usePresskitSeo = (title: string, description: string, ogDescription: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const updates = [
      updateMetaTag("name", "description", description),
      updateMetaTag("property", "og:title", title),
      updateMetaTag("property", "og:description", ogDescription),
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
  }, [description, ogDescription, title]);
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

const PresskitHero = () => {
  const { t } = useTranslation("presskit");
  return (
    <Flex as="section" direction={{ base: "column", lg: "row" }} gap={8} align="center">
      <VStack align="stretch" spacing={6} flex="1 1 auto" justify="center" minH={{ base: "auto", lg: "170px" }}>
        <Text maxW="720px" fontSize={{ base: "md", md: "lg" }} lineHeight={1.75} color="whiteAlpha.900">
          <Trans i18nKey="hero.lead" t={t} components={{ violet: <VioletKeyword /> }} />
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
          {t("hero.playDesktop")}
        </Button>
      </VStack>
    </Flex>
  );
};

const TeaserPitchBlock = ({ autoplay }: { autoplay: boolean }) => {
  const { t } = useTranslation("presskit");
  return (
    <Grid templateColumns={{ base: "1fr", lg: "1.05fr 0.95fr" }} gap={6} alignItems="center">
      <VStack align="stretch" spacing={4}>
        <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
          <Trans i18nKey="pitch.body" t={t} components={{ blue: <BlueKeyword /> }} />
        </Text>
        <Box {...cardStyles}>
          <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.7} fontWeight="medium">
            <Trans i18nKey="pitch.quote" t={t} components={{ blue: <BlueKeyword /> }} />
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
          title={t("misc.teaserVideoTitle")}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </Box>
    </Grid>
  );
};

const CoreLoopBlock = ({ autoplay }: { autoplay: boolean }) => {
  const { t } = useTranslation("presskit");
  return (
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
          title={t("misc.coreLoopVideoTitle")}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={{ base: 3, md: 4 }}>
        {gameLoopStepIndexes.map((index) => (
          <Box key={index} {...cardStyles} py={0} minH={{ base: "172px", md: "190px" }}>
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
                <Text fontSize={{ base: "lg", md: "xl" }} lineHeight={1.3} fontWeight="semibold">
                  {t(`coreLoop.steps.${index}.title`)}
                </Text>
                <Text fontSize={{ base: "md", md: "md" }} lineHeight={1.7} color="whiteAlpha.900">
                  <Trans
                    i18nKey={`coreLoop.steps.${index}.description`}
                    t={t}
                    components={{ violet: <VioletKeyword /> }}
                  />
                </Text>
              </VStack>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

const SpecialCardsBlock = () => {
  const { t } = useTranslation("presskit");
  return (
    <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={6} alignItems="center">
      <VStack align="stretch" spacing={4}>
        <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
          <Trans i18nKey="specialCards.p1" t={t} components={{ blue: <BlueKeyword /> }} />
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
          <Trans i18nKey="specialCards.p2" t={t} components={{ blue: <BlueKeyword /> }} />
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
          {t("specialCards.p3")}
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
          <Trans i18nKey="specialCards.p4" t={t} components={{ blue: <BlueKeyword /> }} />
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
};

const FactSheetTable = () => {
  const { t } = useTranslation("presskit");
  const factSheetItems: FactSheetItem[] = useMemo(
    () => [
      { label: t("factSheet.fields.gameTitle"), value: t("factSheet.values.gameTitle") },
      { label: t("factSheet.fields.developer"), value: t("factSheet.values.developer") },
      { label: t("factSheet.fields.genre"), value: t("factSheet.values.genre") },
      { label: t("factSheet.fields.platform"), value: t("factSheet.values.platform") },
      { label: t("factSheet.fields.blockchain"), value: t("factSheet.values.blockchain") },
      { label: t("factSheet.fields.status"), value: t("factSheet.values.status") },
      { label: t("factSheet.fields.businessModel"), value: t("factSheet.values.businessModel") },
      { label: t("factSheet.fields.mode"), value: t("factSheet.values.mode") },
      { label: t("factSheet.fields.ownershipLayer"), value: t("factSheet.values.ownershipLayer") },
    ],
    [t]
  );

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

const AboutStudioBlock = () => {
  const { t } = useTranslation("presskit");
  return (
    <Grid templateColumns={{ base: "1fr", lg: "1.1fr 0.9fr" }} gap={8} alignItems="center">
      <VStack align="stretch" spacing={4}>
        <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
          <Trans i18nKey="aboutStudio.p1" t={t} components={{ blue: <BlueKeyword /> }} />
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
          {t("aboutStudio.p2")}
        </Text>
      </VStack>
      <Flex align="center" justify="center" minH="220px">
        <Image src="/press/caravana-logo.png" alt="Caravana Studio logo" maxW={{ base: "220px", md: "320px" }} />
      </Flex>
    </Grid>
  );
};

const TocCard = () => {
  const { t } = useTranslation("presskit");
  return (
    <Box display={{ base: "none", xl: "block" }} position="sticky" top="24px">
      <VStack align="stretch" spacing={3} {...cardStyles}>
        <Text
          fontFamily="Orbitron"
          textTransform="uppercase"
          letterSpacing="0.08em"
          fontSize="sm"
          color="whiteAlpha.800"
        >
          {t("index.title")}
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
            {t(item.labelKey)}
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

const MediaAssetsBlock = () => {
  const { t } = useTranslation("presskit");
  return (
    <VStack align="stretch" spacing={5}>
      <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
        <Trans i18nKey="mediaAssets.intro" t={t} components={{ violet: <VioletKeyword /> }} />
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
        {t("mediaAssets.cta")}
      </Button>
    </VStack>
  );
};

const CreatorVideosBlock = () => {
  const { t } = useTranslation("presskit");
  return (
    <VStack align="stretch" spacing={5}>
      <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
        {t("creatorVideos.intro")}
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
              title={t("misc.creatorShortTitle", { index: index + 1 })}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

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
  const { t, i18n } = useTranslation("presskit");
  usePresskitSeo(t("seo.title"), t("seo.description"), t("seo.ogDescription"));

  const currentLanguage = (i18n.resolvedLanguage ?? "en").slice(0, 2);
  const currentLanguageOption =
    languageOptions.find((language) => language.code === currentLanguage) ?? languageOptions[0];
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [heroScrollProgress, setHeroScrollProgress] = useState(0);
  const [autoplayTeaser, setAutoplayTeaser] = useState(false);
  const [autoplayCoreLoop, setAutoplayCoreLoop] = useState(false);
  const teaserRef = useRef<HTMLDivElement | null>(null);
  const coreLoopRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("presskit_language");
    if (!storedLanguage) return;
    if (storedLanguage !== currentLanguage && languageOptions.some((item) => item.code === storedLanguage)) {
      void i18n.changeLanguage(storedLanguage);
    }
  }, [currentLanguage, i18n]);

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

  const handleLanguageChange = (languageCode: string) => {
    if (languageCode === currentLanguage) return;
    void i18n.changeLanguage(languageCode);
    window.localStorage.setItem("presskit_language", languageCode);
  };

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
        position="fixed"
        top={{ base: 3, md: 4 }}
        right={{ base: 3, md: 4 }}
        zIndex={20}
      >
        <Menu placement="bottom-end" autoSelect={false}>
          <MenuButton
            as={Button}
            size="sm"
            variant="ghost"
            bg="blackAlpha.600"
            border="1px solid"
            borderColor="whiteAlpha.400"
            borderRadius="full"
            px={1.5}
            minW="unset"
            _hover={{ bg: "blackAlpha.700" }}
            _active={{ bg: "blackAlpha.700" }}
            backdropFilter="blur(6px)"
          >
            <HStack spacing={1}>
              <Box width="22px" height="22px" borderRadius="full" overflow="hidden">
                <CircleFlagLanguage
                  languageCode={currentLanguageOption.flagCode}
                  width="22"
                  height="22"
                  style={{ width: "22px", height: "22px", display: "block", objectFit: "cover" }}
                />
              </Box>
              <ChevronDownIcon boxSize={4} color="whiteAlpha.800" />
            </HStack>
          </MenuButton>
          <MenuList
            bg="blackAlpha.900"
            borderColor="whiteAlpha.300"
            minW="170px"
            py={1}
          >
            {languageOptions.map((language) => (
              <MenuItem
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                bg="transparent"
                color="white"
                _hover={{ bg: "whiteAlpha.200" }}
                _focus={{ bg: "whiteAlpha.200" }}
                isDisabled={language.code === currentLanguage}
              >
                <HStack spacing={3}>
                  <Box width="18px" height="18px" borderRadius="full" overflow="hidden" flexShrink={0}>
                    <CircleFlagLanguage
                      languageCode={language.flagCode}
                      width="18"
                      height="18"
                      style={{ width: "18px", height: "18px", display: "block", objectFit: "cover" }}
                    />
                  </Box>
                  <Text>{t(`language.${language.code}`)}</Text>
                </HStack>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>

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

              <PresskitSection id="pitch" title={t("pitch.title")}>
                <Box ref={teaserRef}>
                  <TeaserPitchBlock autoplay={autoplayTeaser} />
                </Box>
              </PresskitSection>

              <PresskitSection id="stands-out" title={t("standsOut.title")} titleColor={VIOLET_LIGHT}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 3, md: 4 }}>
                  {standoutItemIndexes.map((index) => (
                    <Box key={index} {...cardStyles} py={0} minH={{ base: "176px", md: "200px" }}>
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
                            {t(`standsOut.items.${index}.title`)}
                          </Text>
                          <Text fontSize={{ base: "md", md: "md" }} color="whiteAlpha.900" lineHeight={1.75}>
                            <Trans
                              i18nKey={`standsOut.items.${index}.description`}
                              t={t}
                              components={{ violet: <VioletKeyword /> }}
                            />
                          </Text>
                        </VStack>
                      </Flex>
                    </Box>
                  ))}
                </SimpleGrid>
              </PresskitSection>

              <FixedCardsBackgroundBand />

              <PresskitSection id="core-loop" title={t("coreLoop.title")} titleColor={VIOLET_LIGHT}>
                <Box ref={coreLoopRef}>
                  <CoreLoopBlock autoplay={autoplayCoreLoop} />
                </Box>
              </PresskitSection>

              <PresskitSection id="special-cards" title={t("specialCards.title")}>
                <SpecialCardsBlock />
              </PresskitSection>

              <PresskitSection id="seasonal-meta" title={t("seasonalMeta.title")} titleColor={VIOLET_LIGHT}>
                <VStack align="stretch" spacing={4}>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
                    <Trans i18nKey="seasonalMeta.p1" t={t} components={{ violet: <VioletKeyword /> }} />
                  </Text>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
                    <Trans i18nKey="seasonalMeta.p2" t={t} components={{ violet: <VioletKeyword /> }} />
                  </Text>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
                    <Trans i18nKey="seasonalMeta.p3" t={t} components={{ violet: <VioletKeyword /> }} />
                  </Text>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
                    <Trans i18nKey="seasonalMeta.p4" t={t} components={{ violet: <VioletKeyword /> }} />
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

              <PresskitSection id="web3-matters" title={t("web3.title")}>
                <VStack align="stretch" spacing={4}>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
                    <Trans i18nKey="web3.p1" t={t} components={{ blue: <BlueKeyword /> }} />
                  </Text>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
                    {t("web3.p2")}
                  </Text>
                  <Text fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
                    {t("web3.p3")}
                  </Text>
                </VStack>
              </PresskitSection>

              <PresskitSection id="creator-videos" title={t("creatorVideos.title")} titleColor={VIOLET_LIGHT}>
                <CreatorVideosBlock />
              </PresskitSection>

              <PresskitSection id="fact-sheet" title={t("factSheet.title")} titleColor={VIOLET_LIGHT}>
                <FactSheetTable />
              </PresskitSection>

              <PresskitSection id="about-studio" title={t("aboutStudio.title")}>
                <AboutStudioBlock />
              </PresskitSection>

              <PresskitSection id="media-assets" title={t("mediaAssets.title")} titleColor={VIOLET_LIGHT}>
                <MediaAssetsBlock />
              </PresskitSection>

              <PresskitSection id="official-links" title={t("officialLinks.title")}>
                <Grid templateColumns={{ base: "1fr", lg: "1fr 340px" }} gap={8} alignItems="center">
                  <Flex justify={{ base: "center", lg: "flex-start" }} align="center" gap={5} flexWrap="wrap" py={2}>
                    {officialLinks.map((item) => (
                      <Tooltip
                        key={item.labelKey}
                        label={item.tooltip ? t(item.tooltip) : t(item.labelKey)}
                        placement="top"
                      >
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
                      {t("officialLinks.pressContact")}
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
                    {t("footerCta.title")}
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
                    {t("footerCta.playDesktop")}
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
          zIndex={30}
          size="sm"
          variant="outlineSecondaryGlow"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          leftIcon={<ChevronUpIcon />}
        >
          {t("misc.backToTop")}
        </Button>
      )}
    </Box>
  );
};
