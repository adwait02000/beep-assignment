import express from 'express';
import { createUser, getAllUsers, loginUser } from '../controllers/user.controller.js';
import { validateLoginUserPayload, validateRegisterUserPayload } from '../validators/user.validator.js';
import authMiddleware from '../middlewares/auth.middleware.js';
const router = express.Router();

router.get('/', authMiddleware, getAllUsers);
router.post('/register', validateRegisterUserPayload, createUser);
router.post('/login', validateLoginUserPayload, loginUser);



export default router;