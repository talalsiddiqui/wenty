import React from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import { Layout } from "antd";
const { Content } = Layout;

const LayoutDesign = props => {
  return (
    <Layout>
      <Header />
      <Layout style={{ height: "calc(100vh -  65px)" }}>
        <SideBar />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            Contentwevwevwevwevwev
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutDesign;
