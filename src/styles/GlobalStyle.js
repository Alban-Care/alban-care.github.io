import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
  }

  body {
    background-color: #1a1b26;
    color: #f1f1f1;
  }
`;

export default GlobalStyle;
