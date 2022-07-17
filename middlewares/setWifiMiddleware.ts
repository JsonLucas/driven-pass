import { NextFunction, Request, Response } from "express";
import { validateWifi } from "../utils/validateSchemas";

const setWifiMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    try{
        const { status, message } = validateWifi(body);
        if(!status){
            res.status(422).send(message);
            return;
        }
        res.locals.data = body;
        next();
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default setWifiMiddleware;