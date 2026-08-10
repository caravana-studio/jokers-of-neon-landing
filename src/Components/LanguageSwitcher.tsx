import {
    Box,
    Button,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList
} from "@chakra-ui/react";
import { useState } from "react";
import { CircleFlagLanguage } from "react-circle-flags";
import { isMobile } from "react-device-detect";

export enum Languages {
  EN = "en",
  ES = "es",
  PT = "pt",
}

interface LanguageSwitcherProps {
    onLanguageChange: (lng: Languages) => void;
}

const LanguageSwitcher = ({
    onLanguageChange
}: LanguageSwitcherProps) => {
  const [language, setLanguage] = useState<Languages>(Languages.EN);

  const changeLanguage = (lng: Languages) => {
    setLanguage(lng);
    onLanguageChange(lng);
  };

  return (
    <Box
      transform={isMobile ? "scale(0.7)" : ""}
      zIndex={999}
      position="absolute"
      right={isMobile ? "5px" : "45px"}
      top={isMobile ? "5px" : "40px"}
    >
      <Menu placement="bottom-end">
        <MenuButton as={Button} p={"0 !important"} width={"auto"}>
          <Flex width={"25px"} m={"0 auto"}>
            <CircleFlagLanguage languageCode={language} />
          </Flex>
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => changeLanguage(Languages.EN)} gap={2}>
            <Box width={"30px"}>
              <CircleFlagLanguage languageCode="en-us" />
            </Box>
            English
          </MenuItem>
          <MenuItem onClick={() => changeLanguage(Languages.ES)} gap={2}>
            <Box width={"30px"}>
              <CircleFlagLanguage languageCode="es" />
            </Box>
            Español
          </MenuItem>
          <MenuItem onClick={() => changeLanguage(Languages.PT)} gap={2}>
            <Box width={"30px"}>
              <CircleFlagLanguage languageCode="pt" />
            </Box>
            Português
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSwitcher;
