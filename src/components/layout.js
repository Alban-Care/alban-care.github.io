import * as React from "react";
import { GlobalStyle } from "../styles";

const Layout = ({ children }) => {
  return (
    <div id="root">
      <GlobalStyle />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
