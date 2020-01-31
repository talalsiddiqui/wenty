import React from "react";
import { Icon } from "antd";
import styles from "./index.module.scss";

const MeterChart = () => {
  return (
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
  );
};

export default MeterChart;
