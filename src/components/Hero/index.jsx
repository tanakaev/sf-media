import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Home.module.css";
import HeroCollection from "./heroCollection/index";

const Home = ({ setScrollWidth }) => {
  const homeRef = useRef(null);
  const heroRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: homeRef.current,
        pin: true,
        scrub: true,
      },
    });

    tl.to(heroRef.current, {
      x: () => `-${containerRef.current.getBoundingClientRect().width}px`,
    });
  }, []);

  return (
    <div ref={homeRef} className={styles.home} id="startseite">
      <div className={styles.intro}>
        <h1 className={styles.title}>
          Social Media
          <br /> Marketing Agentur
        </h1>
        <p className={styles.description}>
          Wir helfen Ihnen, die richtige Zielgruppe zu identifizieren und
          gezielte <br />
          Werbekampagnen zu erstellen, um Ihre Marketingziele zu erreichen.
        </p>
      </div>
      <header className={styles.hero} ref={heroRef}>
        <div className={styles.container} ref={containerRef}>
          <HeroCollection />
        </div>
      </header>
    </div>
  );
};

export default Home;
