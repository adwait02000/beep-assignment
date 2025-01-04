import logger from "../utils/logger.util.js";

export const requestLogger = (req, res, next) => {
    logger.info('Incoming request', {
        method: req.method,
        url: req.originalUrl,
        headers: req.headers,
    });
    next();
};

export const errorLogger = (err, req, res, next) => {
    logger.error('Error occurred', {
        method: req.method,
        url: req.originalUrl,
        error: err.message,
        stack: err.stack,
    });
    next(err);
};