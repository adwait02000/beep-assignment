import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    due_date: { type: Date, required: true },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium',
    },
    status: {
        type: String,
        enum: ['pending', 'in_progress', 'completed'],
        default: 'pending',
    },
    created_by: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    assigned_to: { type: Schema.Types.ObjectId, ref: 'User' },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
});

const Task = model('Task', taskSchema);

export default Task;

