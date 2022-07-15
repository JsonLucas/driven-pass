import { NextFunction, Request, Response } from "express";
import { validateSignUp } from "../utils/validateSchemas";

const authSignUpMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const { body } = req;
        const { status, message } = validateSignUp(body);
        if(status){
            res.locals.data = body;
            next();
            return;
        }
        res.status(422).send(message);
    }catch(e: any){
        throw e;
    }
}

export default authSignUpMiddleware;