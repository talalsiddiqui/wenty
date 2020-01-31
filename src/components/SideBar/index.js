import React from "react";
import { Layout, Menu, Icon, Tag } from "antd";
import styles from "./index.module.scss";

const { SubMenu } = Menu;
const { Sider } = Layout;

const SideBar = () => (
  <div className={styles.sideBar}>
    <div className={styles.sidebarMain}>
      <Sider width={280} style={{ background: "#F0F2F5" }}>
        <div className={styles.sideBarHeader}>Home</div>
        <div>
          <Menu
            className={styles.ul}
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item className={styles.active}>Dashboard</Menu.Item>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                  Sessions
                </span>
              }
            >
              <Menu.Item key="5">
                <Icon type="user" /> New sessions <Tag>New</Tag> <Tag>2</Tag>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="bulb" /> Upcoming sessions <Tag>4</Tag>
              </Menu.Item>
              <Menu.Item key="7">
                <Icon type="message" /> Past sessions <Tag>8</Tag>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </Sider>
    </div>
  </div>
);

export default SideBar;
