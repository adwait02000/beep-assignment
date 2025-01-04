import Joi from 'joi';
import { validate } from '../middlewares/validate.middleware.js';

const createTaskValidations = Joi.object({
    title: Joi.string()
        .required()
        .messages({
            'string.base': 'Title must be a string.',
            'string.empty': 'Title is required.',
            'any.required': 'Title is required.',
        }),
    description: Joi.string()
        .required()
        .messages({
            'string.base': 'Description must be a string.',
            'string.empty': 'Description is required.',
            'any.required': 'Description is required.',
        }),
    due_date: Joi.date()
        .required()
        .messages({
            'date.base': 'Due Date must be a valid date.',
            'date.empty': 'Due Date is required.',
            'any.required': 'Due Date is required.',
        }),
    priority: Joi.string()
        .valid('low', 'medium', 'high')
        .default('medium')
        .messages({
            'string.base': 'Priority must be a string.',
            'string.empty': 'Priority is required.',
            'any.only': 'Priority must be one of: low, medium, or high.',
            'any.required': 'Priority is required.',
        }),
    status: Joi.string()
        .valid('pending', 'in_progress', 'completed')
        .default('pending')
        .messages({
            'string.base': 'Status must be a string.',
            'any.only': 'Status must be one of: pending, in_progress, or completed.',
        }),
    assigned_to: Joi.string()
        .optional()
        .messages({
            'string.base': 'Assigned To must be a string.',
        }),
});


export const validateCreateTaskPayload = validate(createTaskValidations);