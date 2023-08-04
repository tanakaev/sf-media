import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
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

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 980
  );

  const handleResize = () => {
    setIsMobile(typeof window !== "undefined" && window.innerWidth <= 980);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const wrapperRef = useRef(null);
  const refs = images.map(() => useRef(null));

  useEffect(() => {
    gsap.set(
      refs.map((ref) => ref.current),
      { autoAlpha: 0 }
    );

    if (isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1,
          onUpdate: (self) => {
            const velocity = self.getVelocity();
            const yPercent = velocity / -300;

            gsap.set(
              refs.slice(1, 5).map((ref) => ref.current),
              {
                yPercent: yPercent,
              }
            );
          },
        },
      });

      tl.fromTo(
        refs[0].current,
        { autoAlpha: 0, y: 50, scale: 0.9 },
        { autoAlpha: 1, y: 0, scale: 1 }
      );

      tl.fromTo(
        refs.slice(1, 5).map((ref) => ref.current),
        { autoAlpha: 0, y: 50, scale: 0.9 },
        { autoAlpha: 1, y: 0, scale: 1, stagger: 0.1 }
      );

      tl.fromTo(
        refs.slice(5).map((ref) => ref.current),
        { autoAlpha: 0 },
        { autoAlpha: 1 }
      );
    } else {
      // Efekt dla desktopu
      gsap.set(
        refs.map((ref) => ref.current),
        { autoAlpha: 0.3 }
      );

      gsap.to(
        refs.map((ref) => ref.current),
        {
          autoAlpha: 1,
          duration: 1,
          ease: "ease.inOut",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 70%",
            end: "bottom 75%",
            scrub: 1,
          },
        }
      );
    }
  }, [refs, isMobile]);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      {images.map((image, i) => (
        <img
          key={i}
          ref={refs[i]}
          src={image.src}
          alt={image.alt}
          style={{
            display: i < (isMobile ? 4 : images.length) ? "block" : "none",
          }}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default HeroCollection;
