// Home.jsx
import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroCollection from "./heroCollection/index";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const homeRef = useRef(null);
  const introRef = useRef(null);
  const heroRef = useRef(null);
  const containerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 980);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 980);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    if (isMobile) {
      tl.to(homeRef.current, {
        y: () => `-${containerRef.current.getBoundingClientRect().height}px`,
      });
    } else {
      tl.to(homeRef.current, {
        x: () => `-${containerRef.current.getBoundingClientRect().width}px`,
      });
    }

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    const scrollTriggerConfig = {
      trigger: homeRef.current,
      animation: tl,
      scrub: 1,
      pin: !isMobile,
    };

    const scrollTrigger = ScrollTrigger.create(scrollTriggerConfig);

    return () => {
      scrollTrigger.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div ref={homeRef} className={styles.home} id="startseite">
      <div ref={introRef} className={styles.intro}>
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
      <div className={styles.hero} ref={heroRef}>
        <div className={styles.container} ref={containerRef}>
          <HeroCollection isMobile={isMobile} />
        </div>
      </div>
    </div>
  );
};

export default Home;
