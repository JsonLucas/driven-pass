import { NextFunction, Request, Response } from "express";
import credentialsService from "../services/credentialsService";
import { validateCredentials } from "../utils/validateSchemas";

const setCredentialsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const { userId } = res.locals;
    const { status, message } = validateCredentials(body);
    if(!status) throw { code: 422, error: message };
    
    const prototype ={ userId: Number(userId), title: body.title };
    const titleCredentialsCount = await credentialsService.countCredentialsByNameAndUserId(prototype);
    if(titleCredentialsCount !== 0) throw{ code: 409, error: `"${prototype.title}" is already in your credentials.` };
    
    const urlCount = await credentialsService.countCredentialsByUrl(body.url);
    if(urlCount > 2) throw { code: 400, error: 'max labels for this url was is already in use.' };
    res.locals.credential = body;
    next();
}

export default setCredentialsMiddleware;