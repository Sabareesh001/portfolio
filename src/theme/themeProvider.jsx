import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme.jsx";

function ThemeWrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export { ThemeWrapper };
