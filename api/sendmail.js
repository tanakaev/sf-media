import nodemailer from "nodemailer";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.VITE_REACT_APP_EMAIL_USERNAME,
    pass: process.env.VITE_REACT_APP_EMAIL_PASSWORD,
  },
});

const createMailOptions = (name, vorname, email, telefonnummer, nachricht) => ({
  from: `${name} <${email}>`,
  to: process.env.VITE_REACT_APP_RECEIVING_EMAIL,
  subject: "Neue Textnachricht für SF Media",
  html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto;">
            <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-bottom: 1px solid #e9ecef;">
                <h2 style="margin-bottom: 0;">Neue Nachricht von ${name} ${vorname}</h2>
            </div>
            <div style="background-color: #fff; padding: 20px; color: #495057;">
                <h3 style="border-bottom: 1px solid #e9ecef; padding-bottom: 10px;">Kontaktinformation:</h3>
                <ul>
                    <li><b>Email:</b> ${email}</li>
                    <li><b>Telefonnummer:</b> ${telefonnummer}</li>
                </ul>
                <h3 style="border-bottom: 1px solid #e9ecef; padding-bottom: 10px; margin-top: 20px;">Nachricht:</h3>
                <p>${nachricht}</p>
            </div>
        </div>
    `,
});

const createReplyOptions = (name, vorname, email, nachricht) => ({
  from: `SF Media | Ihre Social Media Agentur <${process.env.VITE_REACT_APP_RECEIVING_EMAIL}>`,
  to: `${email}`,
  subject: "Vielen Dank für Ihr Interesse",
  html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto;">
            <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-bottom: 1px solid #e9ecef;">
                <h2 style="margin-bottom: 0;">Hallo ${name} ${vorname},</h2>
            </div>
            <div style="background-color: #fff; padding: 20px; color: #495057;">
                <p>Danke, dass Sie uns kontaktiert haben. Wir haben Ihre Nachricht erhalten und werden so schnell wie möglich darauf antworten.</p>
                <p>Die Nachricht, die Sie uns gesendet haben:</p>
                <p>"<em>${nachricht}</em>"</p>
                <p>Auf Wiederhören,</p>
                <p>dein Team, SF Media</p>
            </div>
        </div>
    `,
});

export default async (req, res) => {
  const { name, vorname, email, telefonnummer, nachricht, recaptchaToken } =
    req.body;

  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.VITE_REACT_APP_SECRET_KEY}&response=${recaptchaToken}`;
  try {
    const response = await axios.post(verificationURL);
    if (!response.data.success) {
      return res.status(400).send({ error: "reCAPTCHA verification failed." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Error verifying reCAPTCHA." });
  }

  try {
    await transporter.sendMail(
      createMailOptions(name, vorname, email, telefonnummer, nachricht)
    );
    await transporter.sendMail(
      createReplyOptions(name, vorname, email, nachricht)
    );
    res.status(200).send({ message: "Message sent successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error while sending the message." });
  }
};
