import "./App.scss";
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import customTheme from "./theme/theme";
import { HomeSection } from "./Components/HomeSection";
import { CardsSection } from "./Components/CardsSection";
import { BoxSection } from "./Components/BoxSection";
import { DemoSection } from "./Components/DemoSection";
import { FooterSection } from "./Components/FooterSection";

function App() {
  const theme = extendTheme(customTheme);

  return (
    <>
      <ChakraBaseProvider theme={theme}>
        <HomeSection />
        <CardsSection />
        <BoxSection />
        <DemoSection />
        <FooterSection />
      </ChakraBaseProvider>
    </>
  );
}

export default App;
