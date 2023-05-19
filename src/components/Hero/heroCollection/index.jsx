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

      if (i === 0) {
        gsap.set(ref.current, { autoAlpha: 1 });
      } else if (i < 4 && isMobile) {
        gsap.fromTo(
          ref.current,
          { autoAlpha: 0, y: 50, scale: 0.9 },
          {
            delay: i * 0.1,
            duration: 0.4,
            autoAlpha: 1,
            y: 0,
            scale: 1,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 60%",
              end: "bottom 80%",
              scrub: 1,
              onUpdate: (self) => {
                gsap.set(ref.current, {
                  yPercent: self.getVelocity() / -300,
                });
              },
            },
          }
        );
      } else {
        gsap.killTweensOf(ref.current);
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
