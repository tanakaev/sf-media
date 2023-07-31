import React, { useLayoutEffect, useRef, useState } from "react";
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

const HeroCollection = () => {
  const images = [
    { src: picture_1, alt: "image_1" },
    { src: picture_2, alt: "image_2" },
    { src: picture_3, alt: "image_3" },
    { src: picture_4, alt: "image_4" },
    { src: picture_5, alt: "image_5" },
    { src: picture_6, alt: "image_6" },
    { src: picture_7, alt: "image_7" },
    { src: picture_8, alt: "image_8" },
    { src: picture_9, alt: "image_9" },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 980);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 980);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const visibleImages = isMobile ? images.slice(0, 4) : images;

  const refs = images.map(() => useRef(null));

  useLayoutEffect(() => {
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
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default HeroCollection;
