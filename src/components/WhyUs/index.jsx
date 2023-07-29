import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useScrollRotateAnimation from "../../hooks/useScrollRotateAnimation";
import tick from "../../assets/images/others/tick.svg";
import crosshair from "../../assets/images/decorations/crosshair.svg";
import circleDashed from "../../assets/images/decorations/circleDashed.svg";
import styles from "./WhyUs.module.css";

function WhyUs({ scrollWidth }) {
  useScrollRotateAnimation(styles.circleDashed);

  const decoWordRef = useRef(null);
  const advantagesListRef = useRef(null);
  const colorSpanRef = useRef(null);

  useEffect(() => {
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
          start: `50%+=${scrollWidth} 70%`,
          end: `70%-=${scrollWidth} 20%`,
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
          start: `50%+=${scrollWidth} 70%`,
          end: `70%-=${scrollWidth} 20%`,
          scrub: 1,
        },
      }
    );

    children.forEach((child, index) => {
      gsap.fromTo(
        child,
        { y: 100, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          scrollTrigger: {
            trigger: child,
            start: `50%+=${scrollWidth} 70%`,
            end: `70%-=${scrollWidth} 20%`,
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.set([decoWord, colorSpan, ...children], {
        clearProps: "all",
      });
    };
  }, [scrollWidth]);

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
            Konvertieren Sie Ihre <br />{" "}
            <span className="color" ref={colorSpanRef}>
              Followers{" "}
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
}

export default WhyUs;
