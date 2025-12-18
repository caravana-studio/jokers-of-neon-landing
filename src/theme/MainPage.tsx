import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { BoxSection } from "../Components/BoxSection";
import { CardsSection } from "../Components/CardsSection";
import { DemoSection } from "../Components/DemoSection";
import { EarlyAccessSeason } from "../Components/EarlyAccessSeason";
import { FooterSection } from "../Components/FooterSection";
import { FullScreenAlpha } from "../Components/FullScreenAlpha";
import { HomeSection } from "../Components/HomeSection";

export const MainPage = () => {
  const [fullScreenAlphaOpen, setFullScreenAlphaOpen] = useState(false);
  const [earlyAccessModalOpen, setEarlyAccessModalOpen] = useState(true);

  return (
    <>
      <HomeSection
        setFullScreenAlphaOpen={setFullScreenAlphaOpen}
      />
      <CardsSection />
      <BoxSection />
      <DemoSection setFullScreenAlphaOpen={setFullScreenAlphaOpen} />
      <FooterSection />

      {fullScreenAlphaOpen && (
        <FullScreenAlpha onClose={() => setFullScreenAlphaOpen(false)} />
      )}
    </>
  );
};
