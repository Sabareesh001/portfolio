import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeWrapper } from "./theme/themeProvider.jsx";
import { ContextProvider } from "./store/contextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
        <ContextProvider>
      <ThemeWrapper>
        <App/>
        </ThemeWrapper>
        </ContextProvider>
  </StrictMode>
);
