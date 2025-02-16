import "./App.scss";
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import customTheme from "./theme/theme";
import Nav from "./Components/Nav";
import Div1 from "./Components/Div1";
import Div2 from "./Components/Div2";
import Div3 from "./Components/Div3";
import Div4 from "./Components/Div4";
import Div5 from "./Components/Div5";

function App() {
  const theme = extendTheme(customTheme);

  return (
    <>
      <ChakraBaseProvider theme={theme}>
        <Nav />
        <Div1 />
        <Div2 />
        <Div3 />
        <Div4 />
        <Div5 />
      </ChakraBaseProvider>
    </>
  );
}

export default App;
