import { ThemeProvider } from "@emotion/react";
import { getTheme } from "./theme.jsx";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../store/contextProvider.jsx";

function ThemeWrapper({ children }) {
   const data = useContext(ThemeContext);
   const theme = getTheme(data.mode);
   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export { ThemeWrapper };
