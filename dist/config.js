"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    queueName: process.env.QUEUE_NAME || "mailbot",
    concurrency: parseInt(process.env.QUEUE_CONCURRENCY || "1"),
    connection: {
        host: process.env.REDIS_HOST || "localhost",
        port: parseInt(process.env.REDIS_PORT || "6379"),
    },
    smtp: {
        host: process.env.SMTP_HOST || "smtp.mailtrap.io",
        port: parseInt(process.env.SMTP_PORT || "587"),
        auth: {
            user: process.env.SMTP_AUTH_USER,
            pass: process.env.SMTP_AUTH_PASS,
        },
    }
};
