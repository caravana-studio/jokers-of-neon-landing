import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { DeleteAccount } from "./theme/DeleteAccount";
import { MainPage } from "./theme/MainPage";
import { PrivacyPolicy } from "./theme/PrivacyPolicy";
import customTheme from "./theme/theme";
import { TermsAndConditions } from "./theme/TermsAndConditions";

function App() {
  const theme = extendTheme(customTheme);

  return (
    <ChakraBaseProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </ChakraBaseProvider>
  );
}

export default App;
