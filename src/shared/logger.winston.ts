import winston from "winston";
import 'winston-daily-rotate-file'
import path from "path"
const formate = winston.format.printf(({ message, level, timestamp }) => {
    const date = new Date(timestamp)
    return `${level}->  "${message}"   :${date.toDateString()}/ ${date.toLocaleString('en-US', { hour: 'numeric', minute: "numeric", hour12: true })}`
})

export const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        formate
    ),
    level: "info",
    transports: [
        new winston.transports.Console(),
        new winston.transports.DailyRotateFile({
            filename: path.join(process.cwd(), "loggers", "winston", "successes", "success-%DATE%.log"),
            datePattern: "HH-DD-MM-YY",
            zippedArchive: true,
            maxSize: "20m",
            maxFiles: "7d"
        }),
        new winston.transports.DailyRotateFile({
            filename: path.join(process.cwd(), "loggers", "winston", "errors", "error-%DATE%.log"),
            datePattern: "HH-DD-MM-YY",
            zippedArchive: true,
            level:"error",
            maxSize: "20m",
            maxFiles: "7d"
        })
    ]
})