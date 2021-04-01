import { lightTheme, darkTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globalStyles";
import TopBar from "../components/topBar";
import { useState } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <Head>
        <title>Shilpi Maurya</title>
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <TopBar changeHandler={themeToggler}></TopBar>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
