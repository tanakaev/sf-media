// Home.jsx
import React, { useEffect, useRef } from "react";
import styles from "./Home.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroCollection from "./heroCollection/index";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const homeRef = useRef(null);
  const heroRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 980;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: homeRef.current,
        scrub: 1,
        pin: true,
      },
    });

    if (isMobile) {
      // Przewijanie wertykalne na ekranach mniejszych niż 980px
      tl.to(containerRef.current, {
        y: () => `-${homeRef.current.getBoundingClientRect().height}px`,
      });
    } else {
      // Przewijanie horyzontalne na ekranach większych niż 980px
      tl.to(heroRef.current, {
        x: () => `-${containerRef.current.getBoundingClientRect().width}px`,
      });
    }
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
