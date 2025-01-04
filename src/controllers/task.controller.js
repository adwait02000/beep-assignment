import { getPaginationAndFilteringOptions } from '../helpers/getFilteringAndPaginationOptions.js';
import Task from '../models/task.model.js';

export const createTask = async (req, res, next) => {

    try {
        const { title, description, due_date, priority, status, assigned_to } = req.body;
        const newTask = new Task({
            title,
            description,
            due_date,
            priority,
            status,
            created_by: req.user.userId,
            assigned_to,
        });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        next(error);
    }
};

export const getAllTasks = async (req, res, next) => {
    try {
        const { filter, pagination } = getPaginationAndFilteringOptions(req.query);
        filter.$or = [
            { created_by: req.user.userId },
            { assigned_to: req.user.userId },
        ];
        const tasks = await Task.find(filter)
            .populate({
                path: 'comments',
                select: 'content created_by created_at',
                populate: {
                    path: 'created_by',
                    select: 'username email',
                },
            })
            .skip(pagination.skip)
            .limit(pagination.limit);

        const totalTasks = await Task.countDocuments(filter);
        res.status(200).json({
            total: totalTasks,
            page: parseInt(req.query.page || 1),
            limit: parseInt(req.query.limit || 10),
            tasks,
        });
    } catch (error) {
        next(error);
    }
};

export const getTaskById = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task || (task.created_by.toString() !== req.user.userId.toString() && task.assigned_to.toString() !== req.user.userId.toString())) {
            const error = new Error('Task not found or you are not authorized to access this task');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
};


export const updateTask = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) {
            const error = new Error('Task not found');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
};

export const deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task || task.created_by.toString() !== req.user.userId.toString()) {
            const error = new Error('Task not found or you are not authorized to delete this task');
            error.statusCode = 404;
            throw error;
        }

        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        next(error);
    }
};