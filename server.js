import express from "express";
import cors from "cors";
import sendMail from "./sendmail";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post("/api/sendmail", sendMail);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
