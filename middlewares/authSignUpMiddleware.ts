import { NextFunction, Request, Response } from "express";
import { validateSignUp } from "../utils/validateSchemas";

const authSignUpMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const { status, message } = validateSignUp(body);
    if (!status) throw { code: 422, error: message };
    res.locals.data = body;
    next();
}

export default authSignUpMiddleware;