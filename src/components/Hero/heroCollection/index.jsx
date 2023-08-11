import React, { useEffect, useRef, useMemo, useLayoutEffect } from "react";
import styles from "./HeroCollection.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import picture_1 from "../../../assets/images/heroCollection/1.webp";
import picture_2 from "../../../assets/images/heroCollection/2.webp";
import picture_3 from "../../../assets/images/heroCollection/3.webp";
import picture_4 from "../../../assets/images/heroCollection/4.webp";
import picture_5 from "../../../assets/images/heroCollection/5.webp";
import picture_6 from "../../../assets/images/heroCollection/6.webp";
import picture_7 from "../../../assets/images/heroCollection/7.webp";
import picture_8 from "../../../assets/images/heroCollection/8.webp";
import picture_9 from "../../../assets/images/heroCollection/9.webp";

gsap.registerPlugin(ScrollTrigger);

const HeroCollection = ({ isMobile }) => {
  const images = [
    { src: picture_1, alt: "Opis obrazu 1" },
    { src: picture_2, alt: "Opis obrazu 2" },
    { src: picture_3, alt: "Opis obrazu 3" },
    { src: picture_4, alt: "Opis obrazu 4" },
    { src: picture_5, alt: "Opis obrazu 5" },
    { src: picture_6, alt: "Opis obrazu 6" },
    { src: picture_7, alt: "Opis obrazu 7" },
    { src: picture_8, alt: "Opis obrazu 8" },
    { src: picture_9, alt: "Opis obrazu 9" },
  ];

  const wrapperRef = useRef(null);
  const visibleImages = useMemo(
    () => (isMobile ? images.slice(0, 4) : images),
    [isMobile]
  );

  useEffect(() => {
    if (!wrapperRef.current) return;

    const tl = gsap.timeline();

    visibleImages.forEach((_, i) => {
      tl.fromTo(
        wrapperRef.current.children[i],
        { autoAlpha: 0, y: isMobile ? 10 : 30 },
        {
          duration: isMobile ? 0.2 : 0.3,
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
        },
        i * (isMobile ? 0.2 : 0.3)
      );
    });

    const scrollTriggerConfig = {
      trigger: wrapperRef.current,
      start: "0% 100%",
      end: "0% 60%",
      scrub: 2,
    };

    const scrollTrigger = ScrollTrigger.create({
      ...scrollTriggerConfig,
      animation: tl,
    });

    ScrollTrigger.refresh();

    return () => {
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
    };
  }, [isMobile, visibleImages]);

  return (
    <div
      className={`${styles.wrapper} ${isMobile ? styles.mobile : ""}`}
      ref={wrapperRef}
    >
      {visibleImages.map((image, i) => (
        <img key={i} src={image.src} alt={image.alt} className={styles.image} />
      ))}
    </div>
  );
};

export default HeroCollection;
