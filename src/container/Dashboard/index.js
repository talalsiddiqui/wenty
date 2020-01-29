import React from "react";
import styles from "./index.module.scss";
import girlIcon from "../../icons/girl.png";

const index = () => {
  return (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col-sm-16">
          <div className={styles.label}>Good evening, Ali</div>
          <div className={styles.dashboard}>Dashboard</div>
          <div className={styles.weekly}>Upcoming sessions this week</div>
        </div>
      </div>
      <div className="bx--row">
        <div className="bx--col-sm-4">
          <img src={girlIcon} alt="12" height={70} width={100} />
        </div>
      </div>
    </div>
  );
};

export default index;
