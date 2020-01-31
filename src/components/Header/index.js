import React from "react";
import { Layout, Menu, Icon } from "antd";

import styles from "./index.module.scss";

const { Header } = Layout;

const TopHeader = () => (
  <div>
    <Header className={styles.header}>
      <div className={styles.logo}>Wenty</div>
      <div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">Advise</Menu.Item>
          <Menu.Item key="2">Seek</Menu.Item>
          <Menu.Item key="3">
            <Icon type="notification" />
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="info-circle" />
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  </div>
);

export default TopHeader;
