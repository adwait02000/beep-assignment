import express from 'express';
import { createComment } from '../controllers/comment.controller.js';
import { validateCreateCommentPayload } from '../validators/comment.validator.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/:task_id', authMiddleware, validateCreateCommentPayload, createComment);

export default router;
