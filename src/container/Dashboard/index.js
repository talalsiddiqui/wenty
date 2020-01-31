import React from "react";
import { PageHeader, Col, Row } from "antd";

import styles from "./index.module.scss";

import Charts from "../../components/Charts";
import Sessions from "../../components/Sessions";
import TabsComponent from "../../components/Tabs";

// import styles from "./index.module.scss";

const index = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.breadcrumb}>Good everning, Ali</div>
      <div className={styles.pageHeader}>
        <PageHeader title='Dasboard' />
      </div>
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

      <div>
        <TabsComponent />
      </div>
    </div>
  );
};

export default index;
