import React, { useEffect } from "react";
import Body from "./body";
import styles from "./dashboard.module.css";
import { useSelector } from "react-redux";
const Dashboard = (props) => {
  return (
    <div className={styles.homeBody}>
      <Body />;
    </div>
  );
};

export default Dashboard;
