import React from "react";
import styles from "./Footer.module.css";

function Footer() {
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
          <li>
            <a href="/" className={styles.footerLink}>
              Impressum
            </a>
          </li>
          <li>
            <a href="/" className={styles.footerLink}>
              Datenschutzbestimmungen
            </a>
          </li>
          <li>
            <a href="/" className={styles.footerLink}>
              AGB
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
