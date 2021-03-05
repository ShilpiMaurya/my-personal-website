import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}
body {
  margin: 0;
  padding: 0;
  font-family: CircularStd,Myriad Pro,Gill Sans,Gill Sans MT,Calibri,sans-serif;
}
a {
  color: inherit;
  text-decoration: none;
}
button {
  border:none;
}
`;

export default GlobalStyles;
