import React from "react";
import styles from "../styles/style.module.css";

const Component = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <h1>Test Landing</h1>
        </div>
        <div className={styles.navRight}>
          <a href="#">About</a>
          <a href="#">Tests</a>
          <a href="#">Start</a>
        </div>
      </nav>
      <div className={styles.hero}>
        <h2>Test Landing</h2>
      </div>
    </div>
  );
};

export default Component;