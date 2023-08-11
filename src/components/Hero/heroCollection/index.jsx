import React, { useEffect, useRef, useState } from "react";
import styles from "./HeroCollection.module.css";
import { gsap } from "gsap";
import picture_1 from "../../../assets/images/heroCollection/1.webp";
import picture_2 from "../../../assets/images/heroCollection/2.webp";
import picture_3 from "../../../assets/images/heroCollection/3.webp";
import picture_4 from "../../../assets/images/heroCollection/4.webp";
import picture_5 from "../../../assets/images/heroCollection/5.webp";
import picture_6 from "../../../assets/images/heroCollection/6.webp";
import picture_7 from "../../../assets/images/heroCollection/7.webp";
import picture_8 from "../../../assets/images/heroCollection/8.webp";
import picture_9 from "../../../assets/images/heroCollection/9.webp";

const HeroCollection = () => {
  const images = [
    { src: picture_1, alt: "Opis obrazu 1" },
    { src: picture_2, alt: "Opis obrazu 2" },
    { src: picture_3, alt: "Opis obrazu 2" },
    { src: picture_4, alt: "Opis obrazu 2" },
    { src: picture_5, alt: "Opis obrazu 2" },
    { src: picture_6, alt: "Opis obrazu 2" },
    { src: picture_7, alt: "Opis obrazu 2" },
    { src: picture_8, alt: "Opis obrazu 2" },
    { src: picture_9, alt: "Opis obrazu 2" },
  ];

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

  const visibleImages = isMobile ? images.slice(0, 4) : images;

  const refs = images.map(() => useRef(null));

  useEffect(() => {
    refs.forEach((ref, i) => {
      if (i >= visibleImages.length) {
        return;
      }

      gsap.killTweensOf(ref.current);

      if (isMobile) {
        gsap.fromTo(
          ref.current,
          { autoAlpha: 0, y: 20 },
          {
            delay: i * 0.1,
            duration: 0.3, // Zwiększam czas trwania animacji
            autoAlpha: 1,
            y: 0,
            ease: "power3.out", // Zmieniam ease na wyjście
            scrollTrigger: {
              trigger: ref.current,
              start: "top center",
              end: "top bottom",
              scrub: 1,
              markers: true,
            },
          }
        );
      } else {
        gsap.set(ref.current, { autoAlpha: 1 });
      }
    });
  }, [isMobile, refs]);

  return (
    <div className={styles.wrapper}>
      {images.map((image, i) => (
        <img
          ref={refs[i]}
          key={i}
          src={image.src}
          alt={image.alt}
          style={{ display: i < visibleImages.length ? "block" : "none" }}
        />
      ))}
    </div>
  );
};

export default HeroCollection;
