import { Request, Response } from "express";
import cardsService from "../services/cardsService";

export const createCardController = async (req: Request, res: Response) => {
    const { userId, data } = res.locals;
    await cardsService.insertCard({ ...data, userId: Number(userId) });
    res.sendStatus(201);
}

export const getCardsByUserIdController = async (req: Request, res: Response) => {
    const { userId } = res.locals;
    const query = await cardsService.getCardsByUserId(Number(userId));
    res.status(200).send(query);
}

export const getCardByIdController = async (req: Request, res: Response) => {
    const { userId } = res.locals;
    const { id } = req.params;
    const card = await cardsService.getCardById(Number(id));
    if (card?.userId !== Number(userId)) {
        throw { code: 404 };
    }
    res.status(200).send({ card });
    return;
}

export const deleteCardController = async (req: Request, res: Response) => {
    const { userId } = res.locals;
    const { id } = req.params;
    const card = await cardsService.getCardById(Number(id));
    if (card?.userId !== Number(userId)) {
        throw { code: 404 };
    }
    await cardsService.deleteCard(Number(id));
    res.sendStatus(204);
}
