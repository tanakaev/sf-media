import React, { useEffect, useRef, useState, useCallback } from "react";
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

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 980);
  const wrapperRef = useRef(null);
  const visibleImages = isMobile ? images.slice(0, 4) : images;

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
        i * (isMobile ? 0.2 : 0.3) // opóźnienie
      );
    });

    if (!isMobile) {
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "0% 100%",
        end: "0% 60%",
        animation: tl,
        scrub: 2,
      });
    }
  }, [isMobile, visibleImages]);

  return (
    <div
      className={`${styles.wrapper} ${isMobile ? styles.mobile : ""}`}
      ref={wrapperRef}
    >
      {images.map((image, i) => (
        <img key={i} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default HeroCollection;
