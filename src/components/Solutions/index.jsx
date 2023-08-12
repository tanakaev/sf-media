import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import crosshair from "../../assets/images/decorations/crosshair.svg";
import circles from "../../assets/images/decorations/circles.svg";
import circleDashed from "../../assets/images/decorations/circleDashed.svg";
import styles from "./Solutions.module.css";
import SolutionItem from "./SolutionItems/index";
import useIsMobile from "../../hooks/useIsMobile";
import useScrollRotateAnimation from "../../hooks/useScrollRotateAnimation";

gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
  const solutionsListRef = useRef(null);
  const decoWordRef = useRef(null);
  const colorSpanRef = useRef(null);
  const descriptionIntroRef = useRef(null);
  const isMobile = useIsMobile();
  useScrollRotateAnimation(styles.circleDashed);

  useEffect(() => {
    const solutionsList = solutionsListRef.current;
    const children = Array.from(solutionsList.children);
    const decoWord = decoWordRef.current;
    const colorSpan = colorSpanRef.current;
    const descriptionIntro = descriptionIntroRef.current;

    const startTrigger = isMobile ? "top 90%" : "top 80%";
    const endTrigger = isMobile ? "bottom 60%" : "top 30%";

    children.forEach((child) => {
      gsap.fromTo(
        child,
        { autoAlpha: 0, y: 100 },
        {
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: child,
            start: startTrigger,
            end: endTrigger,
            scrub: 1,
          },
        }
      );
    });

    gsap.fromTo(
      decoWord,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 0.02,
        scrollTrigger: {
          trigger: decoWord,
          start: "top 80%",
          end: "top 30%",
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
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      descriptionIntro,
      { y: 50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: descriptionIntro,
          start: "top center",
          end: "center bottom",
          scrub: 1,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.set([decoWord, colorSpan, descriptionIntro, ...children], {
        clearProps: "all",
      });
    };
  }, [isMobile]);

  return (
    <div className={styles.solutions} id="losungen">
      <img
        className={styles.crosshair}
        src={crosshair}
        alt="crosshair decoration"
      />
      <img
        className={styles.circles}
        src={circles}
        alt="simple circles decoration"
      />
      <img
        className={styles.circleDashed}
        src={circleDashed}
        alt="dashed circle decoration"
      />
      <div className={styles.solutionsIntro}>
        <p className={styles.decoWord} ref={decoWordRef}>
          Social
        </p>
        <h2>
          Digitale{" "}
          <span className="color" ref={colorSpanRef}>
            Effizienz{" "}
          </span>
          <br />
          gleich um die Ecke
        </h2>
        <div className="spacer"></div>
        <p ref={descriptionIntroRef}>
          Unsere Marketing Agentur besteht aus Enthusiasten der Social
          <br /> Media Branche, die unseren Kunden helfen, ihre Effektivität im
          <br />
          Online-Marketing zu steigern
        </p>
      </div>
      <div className={styles.solutionsList} ref={solutionsListRef}>
        <SolutionItem
          title="Strategieplanung"
          description="Wir helfen Ihnen bei der Entwicklung einer umfassenden Social Media Marketingstrategie, mit der Sie Ihre Geschäftsziele erreichen können."
        />
        <SolutionItem
          title="Innovation"
          description="Kontinuierliche Marktforschung und Einführung neuer Lösungen, die einen Wettbewerbsvorteil im Bereich Social Media Marketing verschaffen."
        />
        <SolutionItem
          title="Beratung"
          description="Wir beraten Sie bei der Auswahl der für Ihre Marke und Ihre Zielgruppe am besten geeigneten Social Media Plattformen."
        />
        <SolutionItem
          title="Werbung"
          description="Wir erstellen attraktive Inhalte, führen Werbekampagnen durch und sorgen dafür, dass Ihre Marke im Web sichtbar ist."
        />
      </div>
    </div>
  );
};

export default Solutions;
