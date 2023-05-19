import React from "react";
import styles from "./Contact.module.css";
import fb_icon from "../../assets/images/contactIcons/fb.svg";
import instagram_icon from "../../assets/images/contactIcons/instagram.svg";
import logo from "../../assets/images/sfMedia.svg";
import ContactForm from "./ContactForm/index";

function Contact() {
  return (
    <section className={styles.contact} id="kontakt">
      <div className={styles.container}>
        <div className={styles.company_info}>
          <div className={styles.logo}>
            <img src={logo} alt="SFMedia Logo" />
          </div>
          <div className={styles.contact_info}>
            <div className={styles.social_media}>
              <div className={styles.social_icon}>
                <a
                  href="https://www.facebook.com/profile.php?id=100087052610283"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={fb_icon} alt="fb icon" />
                </a>
              </div>
              <div className={styles.social_icon}>
                <a
                  href="https://www.instagram.com/sfmedia__/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagram_icon} alt="instagram icon" />
                </a>
              </div>
              <div className={styles.social_icon}></div>
            </div>
          </div>
        </div>
        <div className={styles.contact_form}>
          <h2 className={styles.form_title}>
            Schreiben Sie uns <br /> um mehr zu <span>erfahren</span>
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
