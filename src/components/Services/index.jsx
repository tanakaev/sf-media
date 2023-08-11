import React, { useEffect, useRef } from "react";
import styles from "./Services.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useScrollRotateAnimation from "../../hooks/useScrollRotateAnimation";
import crosshair from "../../assets/images/decorations/crosshair.svg";
import circles from "../../assets/images/decorations/circles.svg";
import circleDashed from "../../assets/images/decorations/circleDashed.svg";
import ServicesItem from "./ServicesList/index";
import werbungen from "../../assets/images/servicesIcons/werbungen.png";
import betreuung from "../../assets/images/servicesIcons/betreuung.png";
import seo_google from "../../assets/images/servicesIcons/seo-google.png";
import email_marketing from "../../assets/images/servicesIcons/email-marketing.png";
import copywriting from "../../assets/images/servicesIcons/copywriting.png";
import landingpages from "../../assets/images/servicesIcons/landingpages.png";

gsap.registerPlugin(ScrollTrigger);

function Services({ scrollWidth }) {
  useScrollRotateAnimation(styles.circleDashed);

  const decoWordRef = useRef(null);
  const colorSpanRef = useRef(null);
  const servicesListRef = useRef(null);

  useEffect(() => {
    const decoWord = decoWordRef.current;
    const colorSpan = colorSpanRef.current;
    const servicesList = servicesListRef.current;

    gsap.from(decoWord, {
      scrollTrigger: {
        trigger: decoWord,
        start: `50%+=${scrollWidth} 70%`,
        end: `70%-=${scrollWidth} 20%`,
        scrub: 1,
      },
      y: 50,
      autoAlpha: 0,
      ease: "none",
    });

    gsap.from(colorSpan, {
      scrollTrigger: {
        trigger: colorSpan,
        start: `50%+=${scrollWidth} 70%`,
        end: `70%-=${scrollWidth} 20%`,
        scrub: 1,
      },
      y: 50,
      autoAlpha: 0,
      ease: "none",
    });

    const children = Array.from(servicesList.children);

    children.forEach((child) => {
      gsap.from(child, {
        scrollTrigger: {
          trigger: child,
          start: `50%+=${scrollWidth} 70%`,
          end: `70%-=${scrollWidth} 20%`,
          scrub: 1,
        },
        y: 50,
        autoAlpha: 0,
        ease: "none",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.set([decoWord, colorSpan, ...children], {
        clearProps: "all",
      });
    };
  }, [scrollWidth]);

  return (
    <section className={styles.services} id="dienstleistungen">
      <div className={styles.container}>
        <div className={styles.servicesIntro}>
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
          <p className={styles.decoWord} ref={decoWordRef}>
            Agentur
          </p>
          <h2>
            Unsere
            <br />
            <span className="color" ref={colorSpanRef}>
              Dienstleistungen
            </span>
          </h2>
          <div className="spacer"></div>
          <p>
            Erstellung einzigartiger und ansprechender Inhalte,
            <br /> die sich von der Konkurrenz abheben und Kunden
            <br />
            anziehen werden.
          </p>
        </div>
        <div className={styles.servicesList} ref={servicesListRef}>
          <img
            className={styles.circles}
            src={circles}
            alt="simple circles decoration"
          />
          <ServicesItem
            icon={<img src={werbungen} alt="werbungen icon" />}
            title="Werbungen"
            description="Erstellen von Werbeanzeigen und Kampagnen auf den sozialen Medien (Facebook, Instagram, TikTok) zur Lead-Generierung und Kundenakquise. Zielgruppenanalyse und -ansprache, um effektive Werbekampagnen auf den entsprechenden Kanälen zu schalten."
          />
          <ServicesItem
            icon={<img src={betreuung} alt="betreuung icon" />}
            title="Betreuung"
            description="Ästhetisches Gestalten und Organisieren von Postings und Kampagnen auf den sozialen Medien, um die Sichtbarkeit und Wahrnehmung des Kunden auf den Kanälen zu erhöhen.
            Regelmäßige Aktualisierung und Überwachung der sozialen Medien, um eine erfolgreiche Kommunikation mit der Zielgruppe zu gewährleisten."
          />
          <ServicesItem
            icon={<img src={seo_google} alt="seo google icon" />}
            title="SEO Google Pflege"
            description="Analyse und Pflege der Webseite in Bezug auf Suchmaschinenoptimierung (SEO), um eine bessere Sichtbarkeit der Webseite bei Google-Suchen zu erreichen. Keyword-Analyse und -Recherche zur gezielten Optimierung der Webseite."
          />
          <ServicesItem
            icon={<img src={email_marketing} alt="email marketing icon" />}
            title="Email Marketing"
            description="Erstellung und Versand von Newslettern und Angeboten per E-Mail, um die Kundenbindung zu stärken und den Kundenstamm zu erweitern.
            Verwaltung und Pflege von E-Mail-Listen, um eine zielgerichtete Kommunikation mit der Zielgruppe zu ermöglichen."
          />
          <ServicesItem
            icon={<img src={copywriting} alt="copywriting icon" />}
            title="Copywriting"
            description="Erstellung von Texten für die sozialen Medien und die Webseite, um eine ansprechende und klare Kommunikation mit der Zielgruppe zu erreichen.
            Optimierung von Texten in Bezug auf Suchmaschinenoptimierung und Anpassung an die Zielgruppe."
          />
          <ServicesItem
            icon={
              <img src={landingpages} alt="landingpages & sales funnel icon" />
            }
            title="Landingpages & Sales Funnel"
            description="Erstellung von Landingpages und Salesfunnel, um die Kundenakquise und -bindung zu erhöhen.
            Optimierung und Überwachung der Landingpages und Salesfunnel zur Erhöhung der Conversion-Rate und des Verkaufserfolgs."
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
