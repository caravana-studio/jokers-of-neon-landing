import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { EarlyAccessPage } from "./Components/EarlyAccessPage";
import { StarknetProvider } from "./Components/StarknetProvider";
import { StatsPage } from "./StatsPage";
import { StoresPage } from "./StoresPage";
import { DeleteAccount } from "./theme/DeleteAccount";
import { MainPage } from "./theme/MainPage";
import { PrivacyPolicy } from "./theme/PrivacyPolicy";
import { TermsAndConditions } from "./theme/TermsAndConditions";
import customTheme from "./theme/theme";

function App() {
  const theme = extendTheme(customTheme);
  return (
    <StarknetProvider>
      <ChakraBaseProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<MainPage />}
            />
            <Route path="/early" element={<EarlyAccessPage />} />
            <Route path="/play" element={<StoresPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/delete-account" element={<DeleteAccount />} />
            <Route path="/stats" element={<StatsPage />} />
          </Routes>
        </BrowserRouter>
        <Analytics />
      </ChakraBaseProvider>
    </StarknetProvider>
  );
}

export default App;
