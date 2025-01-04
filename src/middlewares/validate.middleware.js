import logger from '../utils/logger.util.js';


export const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body, {
        abortEarly: false,
    });

    if (error) {
        const errors = error.details.map((el) => ({
            field: el.context.key,
            message: el.message,
        }));

        logger.error('Validation error occurred', {
            errors,
            method: req.method,
            url: req.url,
        });

        return res.status(400).json({ errors });
    }

    next();
};