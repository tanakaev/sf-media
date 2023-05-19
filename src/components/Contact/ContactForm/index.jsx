import React, { useState } from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormError, setIsFormError] = useState(false);

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
    try {
      const response = await fetch("http://localhost:3001/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        setIsFormSubmitted(true);
        setIsFormError(false);
      } else {
        setIsFormError(true);
      }

      setFormData({
        name: "",
        vorname: "",
        email: "",
        telefonnummer: "",
        nachricht: "",
      });
    } catch (error) {
      console.error(error);
      setIsFormError(true);
    }
  };

  return (
    <form className={styles.form_fields} onSubmit={handleSubmit} method="POST">
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
      <div className={styles.btn_send}>
        <button type="submit">Senden</button>
      </div>
    </form>
  );
}

export default ContactForm;
