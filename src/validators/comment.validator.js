import Joi from 'joi';
import { validate } from '../middlewares/validate.middleware.js';

const createCommentValidations = Joi.object({
    content: Joi.string()
        .required()
        .messages({
            'string.base': 'Content must be a string.',
            'string.empty': 'Content cannot be empty.',
            'any.required': 'Content is required.',
        }),
});


export const validateCreateCommentPayload = validate(createCommentValidations);
