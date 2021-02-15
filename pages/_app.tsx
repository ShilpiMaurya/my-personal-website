import theme from "../styles/theme";
// import ThemeProvider from "styled-components";
import GlobalStyles from "../styles/globalStyles";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
