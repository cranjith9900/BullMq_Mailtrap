import { Queue } from "bullmq";
import config from  "./config";
import dotenv from 'dotenv';
dotenv.config();
const queue= new Queue(config.queueName,{
    connection:config.connection,
});
(async () => {
  await queue.add("sendMail", {
    from: "no-reply@example.com",
    to: "cranjithforbusiness@gmail.com",
    subject: "Hello from BullMQ",
    text: "Test email using Mailtrap + BullMQ",
  });

  console.log("📨 Email job added to queue");
})();
