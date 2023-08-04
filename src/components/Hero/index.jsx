import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Home.module.css";
import HeroCollection from "./heroCollection/index";

gsap.registerPlugin(ScrollTrigger);

const Home = ({ setScrollWidth }) => {
  const heroRef = useRef(null);
  const containerRef = useRef(null);
  const homeRef = useRef(null);
  const introRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 980);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 980);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

      const { gsap } = await import("gsap");
      gsap.registerPlugin(ScrollTrigger);

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

    const onLoad = () => {
      init();
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      window.removeEventListener("load", onLoad);
      gsap.killTweensOf(heroRef.current);
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
};

export default Home;
