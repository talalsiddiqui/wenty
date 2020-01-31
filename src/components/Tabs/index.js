import React from "react";
import { Tabs } from "antd";

import styles from "./index.module.scss";

const { TabPane } = Tabs;

const TabsComponent = () => {
  return (
    <div className={styles.tabs}>
      <Tabs>
        <TabPane tab='Tab 1' key='1'>
          Content of tab 1
        </TabPane>
        <TabPane tab='Tab 2' key='2'>
          Content of tab 2
        </TabPane>
        <TabPane tab='Tab 3' key='3'>
          Content of tab 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
