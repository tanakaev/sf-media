import React from "react";
import styles from "./Impressum.module.css";

function Impressum() {
  return (
    <div className={styles.content}>
      <h2>Impressum</h2>

      <h4>Angaben gem&auml;&szlig; &sect; 5 TMG</h4>
      <p>
        Alexis Bouchama
        <br />
        Online Marketing
        <br />
        Bruchstra&szlig;e 16
        <br />
        67655 Kaiserslautern
      </p>

      <h4>Kontakt</h4>
      <p>
        Telefon: 0033661628315
        <br />
        E-Mail: alexis.bouchama@gmx.de
      </p>

      <h4>EU-Streitschlichtung</h4>
      <p>
        Die Europ&auml;ische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h4>
        Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
      </h4>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <p>
        Quelle:
        <a href="https://www.e-recht24.de/impressum-generator.html">
          https://www.e-recht24.de/impressum-generator.html
        </a>
      </p>
    </div>
  );
}

export default Impressum;
