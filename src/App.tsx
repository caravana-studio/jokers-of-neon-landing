import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { MainPage } from "./theme/MainPage";
import customTheme from "./theme/theme";
import { PrivacyPolicy } from "./theme/PrivacyPolicy";

function App() {
  const theme = extendTheme(customTheme);

  return (
    <ChakraBaseProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </ChakraBaseProvider>
  );
}

export default App;
