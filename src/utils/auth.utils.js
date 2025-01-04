import bcrypt from 'bcryptjs';
import { config } from 'dotenv';

config()

export const hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));
        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password');
    }
};

export const comparePassword = async (inputPassword, storedPassword) => {
    try {
        const isMatch = await bcrypt.compare(inputPassword, storedPassword);
        return isMatch;
    } catch (error) {
        throw new Error('Error comparing passwords');
    }
};
