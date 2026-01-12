import { BoxSection } from "../Components/BoxSection";
import { CardsSection } from "../Components/CardsSection";
import { DemoSection } from "../Components/DemoSection";
import { FooterSection } from "../Components/FooterSection";
import { HomeSection } from "../Components/HomeSection";

export const MainPage = () => {
  return (
    <>
      <HomeSection />
      <CardsSection />
      <BoxSection />
      <DemoSection />
      <FooterSection />
    </>
  );
};
