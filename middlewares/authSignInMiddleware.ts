import { NextFunction, Request, Response } from "express";
import usersService from "../services/usersService";
import { decryptPassword } from "../utils/cryptUtils";
import { validateSignIn } from "../utils/validateSchemas";

const authSignInMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const { status, message } = validateSignIn(body);
    if (!status) throw { code: 422, error: message };

    const { email, password } = body;
    const user = await usersService.getUserByEmail({ email, password });
    if (!user) throw { code: 400 };
    
    if (!decryptPassword(password, user.password)) throw { code: 401 };
    res.locals.data = { ...body, userId: user.id };
    next();
}

export default authSignInMiddleware;