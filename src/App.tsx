import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import { useState } from "react";
import "./App.scss";
import { BoxSection } from "./Components/BoxSection";
import { CardsSection } from "./Components/CardsSection";
import { DemoSection } from "./Components/DemoSection";
import { FooterSection } from "./Components/FooterSection";
import { FullScreenAlpha } from "./Components/FullScreenAlpha";
import { HomeSection } from "./Components/HomeSection";
import customTheme from "./theme/theme";

function App() {
  const theme = extendTheme(customTheme);

  const [fullScreenAlphaOpen, setFullScreenAlphaOpen] = useState(false);

  return (
    <>
      <ChakraBaseProvider theme={theme}>
        <HomeSection setFullScreenAlphaOpen={setFullScreenAlphaOpen} />
        <CardsSection />
        <BoxSection />
        <DemoSection setFullScreenAlphaOpen={setFullScreenAlphaOpen} />
        <FooterSection />
        {fullScreenAlphaOpen && (
          <FullScreenAlpha onClose={() => setFullScreenAlphaOpen(false)} />
        )}
      </ChakraBaseProvider>
    </>
  );
}

export default App;
