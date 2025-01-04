import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

// Define the daily rotation file transport
const transport = [
    new DailyRotateFile({
        filename: 'logs/app-%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxFiles: '30d',
    }),
];

// Create the logger
const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.errors({ stack: true }),
        format.printf(({ timestamp, level, message, stack, ...metadata }) => {
            let log = `${timestamp} [${level.toUpperCase()}]: ${message}`;
            if (metadata.method && metadata.url) {
                log += ` | Endpoint: ${metadata.method} ${metadata.url}`;
            }
            if (stack) {
                log += ` | Stack: ${stack}`;
            }
            if (Object.keys(metadata).length) {
                log += ` | Metadata: ${JSON.stringify(metadata)}`;
            }
            return log;
        })
    ),
    transports: transport,
});

export default logger;