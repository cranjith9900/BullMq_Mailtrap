import dotenv from "dotenv";
dotenv.config();

export default {
  queueName: process.env.QUEUE_NAME || "mailbot",
  concurrency: parseInt(process.env.QUEUE_CONCURRENCY || "1"),
  connection: {
    host: process.env.REDIS_HOST || "localhost",
    port: parseInt(process.env.REDIS_PORT || "6379"),
  },
  smtp: {
     host: process.env.SMTP_HOST || "sandbox.smtp.mailtrap.io",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // Mailtrap uses STARTTLS (not SMTPS)
    auth: {
      user: process.env.SMTP_AUTH_USER,
      pass: process.env.SMTP_AUTH_PASS,
    },
  },
  limiter:{
    max:parseInt(process.env.MAX_LIMIT || "1"),
    duration:parseInt(process.env.DURATION_LIMIT || "1000")
  },
};

