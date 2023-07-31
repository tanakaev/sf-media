import React, { useRef, useState, useEffect } from "react";
import styles from "./ServicesItem.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesItem = ({ icon, title, description }) => {
  const [showMore, setShowMore] = useState(false);
  const textWrapperRef = useRef(null);

  const toggleShowMore = (e) => {
    e.preventDefault();
    setShowMore(!showMore);
  };

  useEffect(() => {
    gsap.set(textWrapperRef.current, { overflow: "hidden" });
    if (showMore) {
      gsap.to(textWrapperRef.current, {
        duration: 0.3,
        height: "auto",
        opacity: "1",
      });
    } else {
      gsap.to(textWrapperRef.current, {
        duration: 0.3,
        height: "5em",
        opacity: ".4",
      });
    }
  }, [showMore]);

  return (
    <div className={styles.service}>
      <div className={styles.serviceIcon}>{icon}</div>
      <h4 className={styles.serviceTitle}>{title}</h4>
      <div ref={textWrapperRef} className={styles.serviceDescription}>
        <p>{description}</p>
      </div>
      <button onClick={toggleShowMore} className={styles.btnShowMore}>
        {showMore ? "Weniger anzeigen ▲" : "Weiterlesen ▼"}
      </button>
    </div>
  );
};

export default ServicesItem;
