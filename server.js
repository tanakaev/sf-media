import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sendmail", async (req, res) => {
  const { name, vorname, email, telefonnummer, nachricht } = req.body;

  let transporter = nodemailer.createTransport({
    host: "mail.gmx.net",
    port: 587,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: `${name} <${email}>`,
    to: process.env.RECEIVING_EMAIL,
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
  };

  let replyOptions = {
    from: `SF Media | Ihre Social Media Agentur <${process.env.RECEIVING_EMAIL}>`,
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
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(replyOptions);
    res.status(200).send({ message: "Message sent successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error while sending the message." });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
