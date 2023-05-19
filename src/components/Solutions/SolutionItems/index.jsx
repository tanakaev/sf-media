import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./SolutonItem.module.css";

gsap.registerPlugin(ScrollTrigger);

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
