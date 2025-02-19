import "./App.scss";
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import customTheme from "./theme/theme";
import Div3 from "./Components/Div3";
import Div4 from "./Components/Div4";
import Div5 from "./Components/Div5";
import { HomeSection } from "./Components/HomeSection";
import { CardsSection } from "./Components/CardsSection";
import { BoxSection } from "./Components/BoxSection";
import Div2 from "./Components/Div2";

function App() {
  const theme = extendTheme(customTheme);

  return (
    <>
      <ChakraBaseProvider theme={theme}>
        <HomeSection />
        <CardsSection />
        <BoxSection />
        <Div3 />
        <Div4 />
        {/* <Div5 /> */}
      </ChakraBaseProvider>
    </>
  );
}

export default App;
