import jwt from 'jsonwebtoken'

export const generateToken = (userId, email) => {
    return jwt.sign(
        { userId, email },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_SECRET_EXPIRY }
    );
};

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded; // Return the decoded token
    } catch (error) {
        return null; // Return null if verification fails
    }
};