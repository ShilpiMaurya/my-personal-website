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
  border: none;
  outline: none;
  padding: 0px;
  margin: 0px;
}
hr {
  color: #f5f5f5;
  margin: 0px;
}
.logo_image {
  border-radius: 5px;
}
.cover_image{
  border-radius: 10px;
}
`;

export default GlobalStyles;
