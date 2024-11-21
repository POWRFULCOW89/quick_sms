import express from "express";
import { body } from "express-validator";
import twilio from "twilio";

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const app = express();

app.use(express.json());

app.post(
  "/sms",
  body("message").trim().notEmpty().escape().isLength({ min: 1, max: 30 }),
  async (req, res) => {
    try {
      const message = await twilioClient.messages.create({
        to: process.env.TWILIO_TO,
        from: process.env.TWILIO_FROM,
        body: req.body.message,
      });

      console.log(
        "SMS sent to",
        process.env.TWILIO_TO,
        " with SID: ",
        message.sid
      );

      res.sendStatus(201);
    } catch (error) {
      res.sendStatus(500);
      console.error(error);
    }
  }
);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
