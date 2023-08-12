import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tick from "../../assets/images/others/tick.svg";
import crosshair from "../../assets/images/decorations/crosshair.svg";
import circleDashed from "../../assets/images/decorations/circleDashed.svg";
import styles from "./WhyUs.module.css";
import useIsMobile from "../../hooks/useIsMobile";
import useScrollRotateAnimation from "../../hooks/useScrollRotateAnimation";

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const isMobile = useIsMobile();
  const decoWordRef = useRef(null);
  const advantagesListRef = useRef(null);
  const colorSpanRef = useRef(null);
  useScrollRotateAnimation(styles.circleDashed);

  useEffect(() => {
    const startTrigger = isMobile ? "top 90%" : "top 70%";
    const endTrigger = isMobile ? "bottom 60%" : "top 20%";

    const advantagesList = advantagesListRef.current;
    const children = Array.from(advantagesList.children).slice(1);

    const decoWord = decoWordRef.current;
    const colorSpan = colorSpanRef.current;

    gsap.fromTo(
      decoWord,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 0.02,
        scrollTrigger: {
          trigger: decoWord,
          start: startTrigger,
          end: endTrigger,
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      colorSpan,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: colorSpan,
          start: startTrigger,
          end: endTrigger,
          scrub: 1,
        },
      }
    );

    children.forEach((child, index) => {
      gsap.fromTo(
        child,
        { y: 50, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          scrollTrigger: {
            trigger: child,
            start: startTrigger,
            end: endTrigger,
            scrub: 1,
          },
        }
      );
    });
  }, [isMobile]);

  return (
    <section className={styles.whyUs} id="warum-wir">
      <div className={styles.rightColumn}>
        <img
          className={styles.crosshair}
          src={crosshair}
          alt="crosshair decoration"
        />
        <img
          className={styles.circleDashed}
          src={circleDashed}
          alt="dashed circle decoration"
        />
        <div className={styles.whyUsIntro}>
          <p className={styles.decoWord} ref={decoWordRef}>
            Media
          </p>
          <h2>
            Konvertieren Sie Ihre <br />
            <span className="color" ref={colorSpanRef}>
              Followers
            </span>
            in Leads
          </h2>
          <div className="spacer"></div>
          <p className={styles.descriptionIntro}>
            Wir setzen unser Know-how und unsere Erfahrung ein, um durch
            kreative und ansprechende
            <br />
            Inhalte Kunden für Ihr Unternehmen zu gewinnen. Mit sorgfältig
            gestalteten und optimierten
            <br />
            Werbekampagnen konvertieren wir diese dann in potenzielle Kunden.
          </p>
        </div>
        <div className={styles.advantagesList} ref={advantagesListRef}>
          <h4>
            Wenn Sie mit uns zusammenarbeiten, können Sie sicher sein, dass:
          </h4>
          <div className={styles.advantageItem}>
            <div className={styles.advantageIcon}>
              <img src={tick} alt="tick icon" />
            </div>
            <p>
              Ihre Präsenz in den sozialen Medien ästhetisch ansprechend
              gestaltet wird
            </p>
          </div>
          <div className={styles.advantageItem}>
            <div className={styles.advantageIcon}>
              <img src={tick} alt="tick icon" />
            </div>
            <p>sich von der Konkurrenz abhebt</p>
          </div>
          <div className={styles.advantageItem}>
            <div className={styles.advantageIcon}>
              <img src={tick} alt="tick icon" />
            </div>
            <p>
              Garantieren wir einen professionellen und personalisierten
              Kundenservice
            </p>
          </div>
          <div className={styles.advantageItem}>
            <div className={styles.advantageIcon}>
              <img src={tick} alt="tick icon" />
            </div>
            <p>
              Marketingziele auf die effektivste und effizienteste Weise zu
              erreichen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
