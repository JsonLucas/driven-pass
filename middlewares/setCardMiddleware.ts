import { NextFunction, Request, Response } from "express";
import cardsService from "../services/cardsService";
import { validateCard } from "../utils/validateSchemas";

const setCardMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = res.locals;
    const { body } = req;
    try{
        const { status, message } = validateCard(body);
        if(!status){
            res.status(422).send(message);
            return;
        }
        const countCards = await cardsService.countCardsByTitleAndUserId(Number(userId), body.title);
        if(countCards > 0){
            res.status(409).send(`"${body.title}" is already in your cards`);
            return;
        }
        res.locals.data = body;
        next();
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default setCardMiddleware;