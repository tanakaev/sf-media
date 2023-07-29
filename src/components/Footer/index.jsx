import React, { useState } from "react";
import styles from "./Footer.module.css";
import Impressum from "../Impressum/Impressum";
import Datenschutz from "../Datenschutz/Datenschutz";
import Agb from "../AGB/Agb";

function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  const handleModalOpen = (modalName) => {
    setActiveModal(modalName);
  };

  const handleModalClose = () => {
    setActiveModal(null);
  };

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footerContainer}>
        <div className={styles.rights}>
          <p className={styles.footerText}>©2023 all rights reserved</p>
          <p className={styles.madeBy}>
            <a href="https://tanakaev.com" target="_blank" rel="noreferrer">
              powered by <span className={styles.weight}>tanakaev</span>
              <span className={styles.color}>.</span>
            </a>
          </p>
        </div>
        <ul className={styles.footerList}>
          <li
            className={styles.footerLink}
            onClick={() => handleModalOpen("Impressum")}
          >
            <p>Impressum</p>
          </li>
          <li
            className={styles.footerLink}
            onClick={() => handleModalOpen("Datenschutz")}
          >
            <p>Datenschutzbestimmungen</p>
          </li>
          <li
            className={styles.footerLink}
            onClick={() => handleModalOpen("AGB")}
          >
            <p>AGB</p>
          </li>
        </ul>
      </div>

      {/* Modal z "Impressum" */}
      {activeModal === "Impressum" && (
        <div className={styles.modalOverlay} onClick={handleModalClose}>
          <div className={styles.modalContent}>
            <Impressum />
          </div>
        </div>
      )}

      {/* Modal z "Datenschutzbestimmungen" */}
      {activeModal === "Datenschutz" && (
        <div className={styles.modalOverlay} onClick={handleModalClose}>
          <div className={styles.modalContent}>
            <Datenschutz />
          </div>
        </div>
      )}

      {/* Modal z "AGB" */}
      {activeModal === "AGB" && (
        <div className={styles.modalOverlay} onClick={handleModalClose}>
          <div className={styles.modalContent}>
            <Agb />
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
