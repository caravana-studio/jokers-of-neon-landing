import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { CircleFlagLanguage } from "react-circle-flags";
import { useTranslation } from "react-i18next";
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  LEGACY_PRESSKIT_LANGUAGE_STORAGE_KEY,
  type SupportedLanguage,
  isSupportedLanguage,
} from "../i18n/constants";

const languageOptions: Array<{ code: SupportedLanguage; flagCode: string }> = [
  { code: "en", flagCode: "en-us" },
  { code: "es", flagCode: "es" },
  { code: "pt", flagCode: "pt" },
];
const defaultLegacyStorageKeys = [LEGACY_PRESSKIT_LANGUAGE_STORAGE_KEY];

type I18nLanguageSwitcherProps = {
  namespace: "presskit" | "landing";
  storageKey?: string;
  legacyStorageKeys?: string[];
};

const readStoredLanguage = (keys: string[]): SupportedLanguage | null => {
  if (typeof window === "undefined") {
    return null;
  }

  for (const key of keys) {
    const value = window.localStorage.getItem(key);
    if (value && isSupportedLanguage(value)) {
      return value;
    }
  }

  return null;
};

export const I18nLanguageSwitcher = ({
  namespace,
  storageKey = LANGUAGE_STORAGE_KEY,
  legacyStorageKeys = defaultLegacyStorageKeys,
}: I18nLanguageSwitcherProps) => {
  const { t, i18n } = useTranslation(namespace);
  const currentLanguageCandidate = (i18n.resolvedLanguage ?? DEFAULT_LANGUAGE).slice(0, 2);
  const currentLanguage = isSupportedLanguage(currentLanguageCandidate)
    ? currentLanguageCandidate
    : DEFAULT_LANGUAGE;

  const currentLanguageOption =
    languageOptions.find((language) => language.code === currentLanguage) ?? languageOptions[0];

  useEffect(() => {
    const storedLanguage = readStoredLanguage([storageKey, ...legacyStorageKeys]);
    if (!storedLanguage || storedLanguage === currentLanguage) {
      return;
    }

    void i18n.changeLanguage(storedLanguage);
  }, [currentLanguage, i18n, legacyStorageKeys, storageKey]);

  const handleLanguageChange = (languageCode: SupportedLanguage) => {
    if (languageCode === currentLanguage) {
      return;
    }

    void i18n.changeLanguage(languageCode);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(storageKey, languageCode);
    }
  };

  return (
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
      <MenuList bg="blackAlpha.900" borderColor="whiteAlpha.300" minW="170px" py={1}>
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
  );
};
