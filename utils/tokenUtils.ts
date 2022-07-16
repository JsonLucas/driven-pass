import jwt from 'jsonwebtoken';
import { jwtSecret } from './envConfig';

export const generateToken = (userId: number) => {
    return jwt.sign(userId.toString(), jwtSecret);
}

export const verifyToken = (token: string | undefined) => {
    if(token){
        if(jwt.verify(token, jwtSecret)){
            return { status: true, userId: jwt.decode(token) };
        }
    }
    return { status: false };
}
