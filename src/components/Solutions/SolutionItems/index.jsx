import React from "react";
import styles from "./SolutonItem.module.css";

function SolutionItem({ title, description }) {
  return (
    <div className={styles.solutionItem}>
      <div className={styles.textContainer}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SolutionItem;
