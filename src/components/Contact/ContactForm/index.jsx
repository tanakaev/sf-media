import React, { useState, useRef } from "react";
import styles from "./ContactForm.module.css";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormError, setIsFormError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SITE_KEY = import.meta.env.VITE_REACT_APP_SITE_KEY;

  const captchaRef = useRef(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    vorname: "",
    email: "",
    telefonnummer: "",
    nachricht: "",
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    const recaptchaValue = captchaRef.current.getValue();
    if (!recaptchaValue) {
      alert("Please validate the reCAPTCHA.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://www.media-sf.de/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, recaptchaToken: recaptchaValue }),
      });

      if (response.status === 200) {
        setIsFormSubmitted(true);
        setIsFormError(false);
        formRef.current.reset();
        setFormData({
          name: "",
          vorname: "",
          email: "",
          telefonnummer: "",
          nachricht: "",
        });
      } else {
        setIsFormError(true);
      }
    } catch (error) {
      setIsFormError(true);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      className={styles.form_fields}
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className={styles.row_fields}>
        <div className={styles.form_field}>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className={styles.form_input}
            required
          />
        </div>
        <div className={styles.form_field}>
          <input
            type="text"
            id="vorname"
            value={formData.vorname}
            onChange={handleInputChange}
            placeholder="Vorname"
            className={styles.form_input}
            required
          />
        </div>
        <div className={styles.form_field}>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="E-mail"
            className={styles.form_input}
            required
          />
        </div>
        <div className={styles.form_field}>
          <input
            type="tel"
            id="telefonnummer"
            value={formData.telefonnummer}
            onChange={handleInputChange}
            placeholder="Telefonnummer"
            className={styles.form_input}
            required
          />
        </div>
      </div>
      <div className={styles.form_field}>
        <textarea
          id="nachricht"
          value={formData.nachricht}
          onChange={handleInputChange}
          rows="4"
          placeholder="Nachricht"
          className={styles.form_input}
          required
        ></textarea>
      </div>
      {isSubmitting && <div className={styles.form_submitting}>Senden...</div>}
      {isFormSubmitted && !isFormError && (
        <div className={styles.form_success}>
          Vielen Dank für das Absenden des Formulars!
        </div>
      )}
      {isFormError && (
        <div className={styles.form_error}>
          Etwas stimmt nicht. Bitte versuchen Sie es später erneut.
        </div>
      )}
      <ReCAPTCHA sitekey={SITE_KEY} ref={captchaRef} />
      <div className={styles.btn_send}>
        <button type="submit" value="Submit" disabled={isSubmitting}>
          Senden
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
