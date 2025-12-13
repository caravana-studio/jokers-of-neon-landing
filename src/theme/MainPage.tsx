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
      <HomeSection setFullScreenAlphaOpen={setFullScreenAlphaOpen} />
      <Modal
        isOpen={earlyAccessModalOpen}
        onClose={() => setEarlyAccessModalOpen(false)}
        size="4xl"
      >
        <ModalOverlay bg="rgba(0, 0, 0, 0.6)" />
        <ModalContent p={3} overflow="visible">
        <ModalCloseButton m={4} />
          <EarlyAccessSeason />
        </ModalContent>
      </Modal>
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
