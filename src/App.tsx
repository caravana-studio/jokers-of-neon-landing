import "./App.scss";
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import customTheme from "./theme/theme";
import Div3 from "./Components/Div3";
import Div4 from "./Components/Div4";
import Div5 from "./Components/Div5";
import { HomeSection } from "./Components/HomeSection";
import { CardsSection } from "./Components/CardsSection";

function App() {
  const theme = extendTheme(customTheme);

  return (
    <>
      <ChakraBaseProvider theme={theme}>
        <HomeSection />
        {/* <Nav />
        <Div1 /> */}
        <CardsSection />
        {/* <Div2 />  */}
        <Div3 />
        <Div4 />
        {/* <Div5 /> */}
      </ChakraBaseProvider>
    </>
  );
}

export default App;
