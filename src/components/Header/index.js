import React from "react";
import { Layout, Menu } from "antd";

import styles from "./index.module.scss";

const { Header } = Layout;


const TopHeader = () => (
  <div>
    <Header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <div>
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key='1'>nav 1</Menu.Item>
          <Menu.Item key='2'>nav 2</Menu.Item>
          <Menu.Item key='3'>nav 3</Menu.Item>
        </Menu>
      </div>
    </Header>
  </div>
);

export default TopHeader;
