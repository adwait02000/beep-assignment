import express from 'express';
import {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
} from '../controllers/task.controller.js';
import { validateCreateTaskPayload } from '../validators/task.validator.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/', authMiddleware, validateCreateTaskPayload, createTask);
router.get('/', authMiddleware, getAllTasks);
router.get('/:id', authMiddleware, getTaskById);
router.put('/:id', authMiddleware, updateTask);
router.delete('/:id', authMiddleware, deleteTask);

export default router;
