"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.worker = void 0;
const bullmq_1 = require("bullmq");
const config_1 = __importDefault(require("./config"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
exports.worker = new bullmq_1.Worker("config.queueName", path_1.default.join(__dirname, "mail.processor.ts"), {
    connection: config_1.default.connection,
    concurrency: config_1.default.concurrency,
});
exports.worker.on("completed", (job) => console.log(`✅ Job ${job.id} completed: Email sent to ${job.data.to}`));
exports.worker.on("failed", (job, err) => console.error(`❌ Job ${job === null || job === void 0 ? void 0 : job.id} failed:`, err));
console.log("🚀 Worker listening for jobs...");
