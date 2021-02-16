import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globalStyles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
