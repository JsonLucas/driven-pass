import jwt from 'jsonwebtoken';
import { jwtSecret } from './envConfig';

export const generateToken = (userId: number) => {
    return jwt.sign(userId.toString(), jwtSecret);
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, jwtSecret);
}
