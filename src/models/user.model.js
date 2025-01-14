import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: {
        minlength: 3,
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
}, {
    timestamps: true
});

const User = model('User', userSchema);
export default User;