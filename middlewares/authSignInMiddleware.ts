import { NextFunction, Request, Response } from "express";
import usersService from "../services/users";
import { decryptPassword } from "../utils/cryptUtils";
import { validateSignIn } from "../utils/validateSchemas";

const authSignInMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const { status, message } = validateSignIn(body);
    if(status){
        const { email, password } = body;
        const user = await usersService.getUserByEmail({email, password});
        if(user){
            if(decryptPassword(password, user.password)){
                res.locals.data = {...body, userId: user.id};
                next();
                return;
            }
            res.sendStatus(401);
            return;
        }
    }
    res.status(422).send(message);
    //throw { type: 'unproccessable_entity', message };
}

export default authSignInMiddleware;