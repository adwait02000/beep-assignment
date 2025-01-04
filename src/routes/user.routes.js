import express from 'express';
import { createUser, loginUser } from '../controllers/user.controller.js';
import { validateLoginUserPayload, validateRegisterUserPayload } from '../validators/user.validator.js';
const router = express.Router();
router.post('/register', validateRegisterUserPayload, createUser);
router.post('/login', validateLoginUserPayload, loginUser);

export default router;