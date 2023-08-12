import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./HeroCollection.module.css";
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
    picture_1,
    picture_2,
    picture_3,
    picture_4,
    picture_5,
    picture_6,
    picture_7,
    picture_8,
    picture_9,
  ];

  const wrapperRef = useRef(null);
  const displayImages = isMobile ? images.slice(0, 4) : images;

  useEffect(() => {
    const tl = gsap.timeline();
    const duration = isMobile ? 0.9 : 0.5;
    const direction = isMobile ? 100 : 30;
    const staggerDelay = isMobile ? 0.6 : 0.4;

    displayImages.forEach((_, i) => {
      const initialScale = isMobile ? 0.7 : 1;
      // Ustawiamy początkową wartość autoAlpha na 0.8 dla pierwszego obrazka, a dla reszty na 0
      const initialAutoAlpha = i === 0 ? 0.5 : 0;
      tl.fromTo(
        wrapperRef.current.children[i],
        { autoAlpha: initialAutoAlpha, y: direction, scale: initialScale },
        {
          duration: duration,
          autoAlpha: 1,
          y: 0,
          scale: 1,
          ease: "power2.out",
        },
        i * staggerDelay
      );
    });

    const scrollTrigger = ScrollTrigger.create({
      animation: tl,
      trigger: wrapperRef.current,
      start: isMobile ? "top bottom" : "top 100%",
      end: isMobile ? "bottom top" : "bottom 60%",
      scrub: 1,
    });

    return () => {
      scrollTrigger.kill();
      tl.kill();
    };
  }, [isMobile, displayImages]);

  return (
    <div
      ref={wrapperRef}
      className={isMobile ? styles.wrapperMobile : styles.wrapper}
    >
      {displayImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Hero Image ${i + 1}`}
          className={styles.image}
        />
      ))}
    </div>
  );
};

export default HeroCollection;
