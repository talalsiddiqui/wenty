import React from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { Content } from "carbon-components-react/lib/components/UIShell";

import "./index.scss";

const Layout = props => {
  return (
    <div>
      <Header />
      <br />
      <SideBar />
      <Content id="main-content">{props.children}</Content>
    </div>
  );
};

export default Layout;
