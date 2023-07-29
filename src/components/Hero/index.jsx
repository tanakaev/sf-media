import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styles from "./Home.module.css";
import HeroCollection from "./heroCollection/index";

function Home({ setScrollWidth }) {
  const heroRef = useRef(null);
  const homeRef = useRef(null);
  const introRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateScrollWidth = () => {
      if (window.innerWidth <= 980) {
        setScrollWidth(0);
      } else {
        setScrollWidth(containerRef.current.getBoundingClientRect().width);
      }
    };

    window.addEventListener("resize", updateScrollWidth);
    updateScrollWidth();

    return () => {
      window.removeEventListener("resize", updateScrollWidth);
    };
  }, [setScrollWidth]);

  useEffect(() => {
    const init = async () => {
      if (window.innerWidth <= 980) return;

      // Dynamiczne importowanie GSAP
      const { gsap } = await import("gsap");

      const home = homeRef.current;
      const hero = heroRef.current;
      const container = containerRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: home,
          pin: true,
          scrub: 2,
          end: () => `${container.getBoundingClientRect().width}px`,
          anticipatePin: 1,
        },
      });

      tl.to(hero, {
        x: () => `-${container.getBoundingClientRect().width}px`,
      });
    };

    window.addEventListener("load", init);

    return () => {
      window.removeEventListener("load", init);
    };
  }, []);

  return (
    <div ref={homeRef} className={styles.home} id="startseite">
      <div className={styles.intro} ref={introRef}>
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
}

export default Home;
