import Comment from '../models/comment.model.js';
import Task from '../models/task.model.js';
import User from '../models/user.model.js';

export const createComment = async (req, res, next) => {
    const { content } = req.body;
    const { task_id } = req.params;

    try {
        const task = await Task.findById(task_id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        const user = await User.findById(req.user.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const comment = new Comment({
            content,
            created_by: req.user.userId,
            created_at: new Date(),
        });

        await comment.save();

        task.comments.push(comment._id);
        await task.save();

        res.status(201).json({ message: 'Comment added successfully', comment });
    } catch (error) {
        next(error)
    }
};