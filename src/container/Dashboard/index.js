import React from "react";
import { Typography, Col, Row } from "antd";
import Charts from "../../components/Charts";
import Sessions from "../../components/Sessions";

import styles from "./index.module.scss";

const { Text } = Typography;

const index = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.breadcrumb}>Good everning, Ali</div>
      <Text className={styles.dashboardTitle}>Dasboard</Text>

      <div className={styles.infoRow}>
        <Row>
          <Col span={8}>Weekly Snapshot</Col>
          <Col span={16}>Upcoming sessions this week </Col>
        </Row>
        <br />
        <Row>
          <Col span={8}>
            <Charts />
          </Col>
          <Col span={16}>
            <Sessions />
          </Col>
        </Row>
      </div>

      {/* <div>
        <TabsComponent />
      </div> */}
    </div>
  );
};

export default index;
