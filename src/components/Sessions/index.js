import React from "react";
import { Row, Col, Tag, Button, Icon } from "antd";

import styles from "./index.module.scss";

import girlIcon from "../../icons/girl.jpg";
import maleIcon from "../../icons/male.jpg";

const SessionComponent = () => {
  return (
    <Row>
      <Col span={11}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.headerImg}>
              <img src={girlIcon} alt='' />
            </div>
            <div className={styles.headerMoreButton}>...</div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.contentHeader}>
              <div className={styles.cardTitle}>Jemima Toya</div>
              <div className={styles.cardTags}>
                <Tag color='red'>Attendee has joined</Tag>
              </div>
            </div>
            <div className={styles.cardTime}>
              <p>6:30 PM - 7:30 PM, 18 January 2020</p>
            </div>
            <div className={styles.contentFooter}>
              <a href='#'>View session brief</a> . <a href='#'>Send message</a>
              <div className={styles.contentFooter2}>
                <Button block color='primary' type='primary'>
                  <div className={styles.buttonText}>Join call</div>
                  <div className={styles.buttonIcon}>
                    <Icon type='arrow-right' />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col span={11} offset={1}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.headerImg}>
              <img src={maleIcon} alt='' />
            </div>
            <div className={styles.headerMoreButton}>...</div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.contentHeader}>
              <div className={styles.cardTitle}>Nicholas Castillo</div>
              <div className={styles.cardTags}>
                <Tag>02:12:16:32</Tag>
              </div>
            </div>
            <div className={styles.cardTime}>
              <p>3:30 PM - 4:45 PM, 20 January 2020</p>
            </div>
            <div className={styles.contentFooter}>
              <a href='#'>Send message</a> . <a href='#'>Reschedule</a>
              <div className={styles.contentFooter2}>
                <Button block type='primary' className={styles.button2}>
                  <div className={styles.buttonText}>View session brief</div>
                  <div className={styles.buttonIcon}>
                    <Icon type='arrow-right' />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default SessionComponent;
