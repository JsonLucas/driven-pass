import { NextFunction, Response, Request } from "express";

export const handleErrors = (e: any, req: Request, res: Response, next:NextFunction) => {
    console.log(e);
    if(e.code){
        if(e.error){
            res.status(e.code).send(e.error);
            return;
        }
        res.sendStatus(e.code);
        return;
    }
    res.status(500).send(e.message);
    return;
} 
