import { useState } from "react";
import { BoxSection } from "../Components/BoxSection";
import { CardsSection } from "../Components/CardsSection";
import { DemoSection } from "../Components/DemoSection";
import { FooterSection } from "../Components/FooterSection";
import { FullScreenAlpha } from "../Components/FullScreenAlpha";
import { HomeSection } from "../Components/HomeSection";

export const MainPage = () => {
  const [fullScreenAlphaOpen, setFullScreenAlphaOpen] = useState(false);

  return (
    <>
      <HomeSection setFullScreenAlphaOpen={setFullScreenAlphaOpen} />
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
