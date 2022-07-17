import { NextFunction, Request, Response } from "express";
import credentialsService from "../services/credentialsService";
import { validateCredentials } from "../utils/validateSchemas";

const setCredentialsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const { userId } = res.locals;
    const { status, message } = validateCredentials(body);
    if(!status){
        res.status(422).send(message);
        return;
    }
    const prototype ={ userId: Number(userId), title: body.title };
    const titleCredentialsCount = await credentialsService.countCredentialsByNameAndUserId(prototype);
    if(titleCredentialsCount === 0){
        const urlCount = await credentialsService.countCredentialsByUrl(body.url);
        if(urlCount < 2){
            res.locals.credential = body;
            next();
            return;
        }
        res.status(400).send('max labels for this url was is already in use.');
        return;
    }
    res.sendStatus(409);
}

export default setCredentialsMiddleware;