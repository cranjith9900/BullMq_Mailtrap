import { Worker } from "bullmq";
import config from "./config";
import dotenv from "dotenv";
import mailProcessor from "./mail.processor"; // ✅ direct import of function
dotenv.config();

export const worker = new Worker(
  config.queueName, // 👈 queue name from config
  mailProcessor,    // 👈 pass function directly
  {
    connection: config.connection,
    concurrency: config.concurrency,
  }
);

worker.on("completed", (job) =>
  console.log(`✅ Job ${job.id} completed: Email sent to ${job.data.to}`)
);

worker.on("failed", (job, err) =>
  console.error(`❌ Job ${job?.id} failed:`, err)
);

console.log("🚀 Worker listening for jobs on queue:", config.queueName);
