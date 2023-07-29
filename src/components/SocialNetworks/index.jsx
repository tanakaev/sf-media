import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./SocialNetworks.module.css";
import google from "../../assets/images/socialBelt/google.svg";
import instagram from "../../assets/images/socialBelt/instagram.svg";
import meta from "../../assets/images/socialBelt/meta.svg";
import tiktok from "../../assets/images/socialBelt/tiktok.svg";
import twitter from "../../assets/images/socialBelt/twitter.svg";
import youtube from "../../assets/images/socialBelt/youtube.svg";

function SocialNetworks({ scrollWidth }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const children = Array.from(container.children);

    children.forEach((child, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: child,
          start: () => `20%+=${scrollWidth} 80%`,
          end: `20%-=${scrollWidth} 20%`,
          scrub: 1,
        },
      });

      tl.fromTo(
        child,
        { x: -100, autoAlpha: 0 },
        {
          delay: i * 0.2,
          x: 0,
          autoAlpha: 1,
          ease: "power3.out",
        }
      )
        .to(child, { y: -10, yoyo: true, repeat: 1, duration: 0.2 }, "+=0.2")
        .to(child, { y: 0, duration: 0.2 });
    });
  }, [scrollWidth]);

  return (
    <div className={styles.socialNetworks} ref={containerRef}>
      <div>
        <img src={google} alt="google icon" />
      </div>
      <div>
        <img src={instagram} alt="instagram icon" />
      </div>
      <div>
        <img src={meta} alt="meta icon" />
      </div>
      <div>
        <img src={tiktok} alt="tiktok icon" />
      </div>
      <div>
        <img src={twitter} alt="twitter icon" />
      </div>
      <div>
        <img src={youtube} alt="youtube icon" />
      </div>
    </div>
  );
}

export default SocialNetworks;
