import Joi from "joi";
import { validate } from "../middlewares/validate.middleware.js";

const registerUserValidations = Joi.object({
    username: Joi.string()
        .min(3)
        .required()
        .messages({
            'string.base': 'username should be a type of text',
            'string.empty': 'username cannot be an empty field',
            'any.required': 'username is a required field'
        }),

    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.base': 'email should be a type of text',
            'string.empty': 'email cannot be an empty field',
            'string.email': 'email must be a valid email address',
            'any.required': 'email is a required field'
        }),

    password: Joi.string()
        .min(8)
        .required()
        .messages({
            'string.base': 'password should be a type of text',
            'string.empty': 'password cannot be an empty field',
            'string.min': 'password should have a minimum length of {#limit}',
            'any.required': 'password is a required field'
        }),
});

export const validateRegisterUserPayload = validate(registerUserValidations);


const loginUserValidations = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.base': 'email should be a type of text',
            'string.empty': 'email cannot be an empty field',
            'string.email': 'email must be a valid email address',
            'any.required': 'email is a required field'
        }),

    password: Joi.string()
        .min(6)
        .required()
        .messages({
            'string.base': 'password should be a type of text',
            'string.empty': 'password cannot be an empty field',
            'string.min': 'password should have a minimum length of {#limit}',
            'any.required': 'password is a required field'
        }),
});

export const validateLoginUserPayload = validate(loginUserValidations);
