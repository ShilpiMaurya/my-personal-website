import { lightTheme, darkTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globalStyles";
import TopBar from "../components/topBar";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <TopBar changeHandler={themeToggler}></TopBar>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
