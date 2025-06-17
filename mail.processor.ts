import { Job } from "bullmq";
import nodemailer from "nodemailer";
import { Mail } from "./mail.interface";
import config from "./config";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport(config.smtp);

export default async (job: Job<Mail>) => {
  console.log("📬 Processing job:", job.id);
  console.log("📧 Mail data:", job.data);

  try {
    const info = await transporter.sendMail(job.data);
    console.log("✅ Email sent:", info.messageId || info.response);
    return info;
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    throw error;
  }
};
