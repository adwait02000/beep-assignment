import { Schema, model } from 'mongoose';

const commentSchema = new Schema({
    content: { type: String, required: true },
    created_by: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    created_at: { type: Date, default: Date.now },
});

const Comment = model('Comment', commentSchema);

export default Comment;