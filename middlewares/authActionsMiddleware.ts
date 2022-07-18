import usersService from "../services/usersService";
import { verifyToken } from "../utils/tokenUtils";
import { NextFunction, Request, Response } from "express";

const authActionsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    // eyJhbGciOiJIUzI1NiJ9.MQ.V7_ezA-srSupU8atmRPDgBOmocIeL80VCIeSusRHkd4
    const { authorization } = req.headers;
    const token = authorization?.split(' ');
    if (!token) throw { code: 401 }

    const { status, userId } = verifyToken(token[1]);
    if (!status) throw { code: 400 }

    const user = await usersService.getUserById(Number(userId));
    if (!user) throw { code: 404 }
    
    res.locals.userId = userId;
    next();
}

export default authActionsMiddleware;
