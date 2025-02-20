import "./App.scss";
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import customTheme from "./theme/theme";
import Div4 from "./Components/Div4";
import Div5 from "./Components/Div5";
import { HomeSection } from "./Components/HomeSection";
import { CardsSection } from "./Components/CardsSection";
import { BoxSection } from "./Components/BoxSection";
import { DemoSection } from "./Components/DemoSection";

function App() {
  const theme = extendTheme(customTheme);

  return (
    <>
      <ChakraBaseProvider theme={theme}>
        <HomeSection />
        <CardsSection />
        <BoxSection />
        <DemoSection></DemoSection>
        {/* <Div4 /> */}
        {/* <Div5 /> */}
      </ChakraBaseProvider>
    </>
  );
}

export default App;
