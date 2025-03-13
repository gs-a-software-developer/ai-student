import React from "react";
import { upgrade } from "../../assets";
import styles from "./Settings.module.css";

const Settings = () => {
  return (
    <div className={styles.container}>
      <img
        src={upgrade}
        alt="Under Construction"
        className={styles.image}
      />
      <p className={styles.message}>
        We’re busy working on something awesome! Our site is under construction,
        but we’ll be up and running soon.
      </p>
    </div>
  );
};

export default Settings;
