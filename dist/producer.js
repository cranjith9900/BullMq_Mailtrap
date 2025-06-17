"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bullmq_1 = require("bullmq");
const config_1 = __importDefault(require("./config"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const queue = new bullmq_1.Queue(config_1.default.queueName, {
    connection: config_1.default.connection,
});
(async () => {
    await queue.add("sendMail", {
        from: "no-reply@example.com",
        to: "recipient@example.com",
        subject: "Hello from BullMQ",
        text: "Test email using Mailtrap + BullMQ",
    });
    console.log("📨 Email job added to queue");
})();
