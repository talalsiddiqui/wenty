import React from "react";
import { PageHeader, Col, Row, Button, Icon } from "antd";

import styles from "./index.module.scss";

// import styles from "./index.module.scss";
// import girlIcon from "../../icons/girl.png";

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
          <Col span={12}>Upcoming sessions this week </Col>
        </Row>
        <Row>
          <Col span={8}>
            <div className={styles.reviews}>
              <h2>Chart</h2>
              <div className={styles.chartInfo}>
                <h4>Your current rating</h4>
                <p>Average rating from 16 reviews</p>
                <a href='http://localhost:3000'>
                  See your reviews <Icon type='arrow-right' />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default index;
