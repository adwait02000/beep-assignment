import { config } from 'dotenv';
import { verifyToken } from '../utils/jwt.utils.js';

config();

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];


    if (!token) {
        return res.status(403).json({ message: 'You are not authorized to perform this action.' });
    }

    const decoded = verifyToken(token);

    if (!decoded) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }

    req.user = decoded;
    next();
};

export default authMiddleware