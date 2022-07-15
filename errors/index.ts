import { NextFunction, Response, Request } from "express";

export const handleErrors = (e: any, req: Request, res: Response, next:NextFunction) => {
    console.log(e.message);
    if(e.type){
        res.sendStatus(errorCode(e.type));
        return;
    }
    res.sendStatus(500);
} 

const errorCode = (type: string) => {
    console.log(type);
    return 400;
}