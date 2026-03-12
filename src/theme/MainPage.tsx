import { Box } from "@chakra-ui/react";
import { BoxSection } from "../Components/BoxSection";
import { CardsSection } from "../Components/CardsSection";
import { DemoSection } from "../Components/DemoSection";
import { FooterSection } from "../Components/FooterSection";
import { HomeSection } from "../Components/HomeSection";
import { I18nLanguageSwitcher } from "../Components/I18nLanguageSwitcher";

export const MainPage = () => {
  return (
    <>
      <Box
        position="fixed"
        top={{ base: 3, md: 4 }}
        right={{ base: 3, md: 4 }}
        zIndex={20}
      >
        <I18nLanguageSwitcher namespace="landing" />
      </Box>
      <HomeSection />
      <CardsSection />
      <BoxSection />
      <DemoSection />
      <FooterSection />
    </>
  );
};
