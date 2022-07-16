import usersService from "../services/users";
import { verifyToken } from "../utils/tokenUtils";
import { NextFunction, Request, Response } from "express";

const authActionsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try{ // eyJhbGciOiJIUzI1NiJ9.MQ.V7_ezA-srSupU8atmRPDgBOmocIeL80VCIeSusRHkd4
        const { authorization } = req.headers;
        const token = authorization?.split(' ');
        if(!token) {
            res.sendStatus(401);
            return;
        }
        const { status, userId } = verifyToken(token[1]);
        if(!status){
            res.sendStatus(400);
            return;
        }
        const user = await usersService.getUserById(Number(userId));
        if(!user){
            res.sendStatus(404);
            return;
        }
        res.locals.userId = userId;
        next();
        return;
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default authActionsMiddleware;
