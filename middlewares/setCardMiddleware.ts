import { NextFunction, Request, Response } from "express";
import cardsService from "../services/cardsService";
import { validateCard } from "../utils/validateSchemas";

const setCardMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = res.locals;
    const { body } = req;
    const { status, message } = validateCard(body);
    if (!status) throw { code: 422, error: message }
    
    const countCards = await cardsService.countCardsByTitleAndUserId(Number(userId), body.title);
    if (countCards > 0) throw { code: 409, error: `"${body.title}" is already in your cards` };
    res.locals.data = body;
    next();
}

export default setCardMiddleware;