import { Request, Response } from "express";
import cardsService from "../services/cardsService";

export const createCardController = async (req: Request, res: Response) => {
    const { userId, data } = res.locals;
    try{
        await cardsService.insertCard({...data, userId: Number(userId)});
        res.sendStatus(201);
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
} 

export const getCardsByUserIdController = async (req: Request, res: Response) => {
    const { userId } = res.locals;
    try{
        const query = await cardsService.getCardsByUserId(Number(userId));
        res.status(200).send(query);
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export const getCardByIdController = async (req: Request, res: Response) => {
    const { userId } = res.locals;
    const { id } = req.params;
    try{
        const card = await cardsService.getCardById(Number(id));
        if(card?.userId === Number(userId)){
            res.status(200).send({ card });
            return;
        }
        res.sendStatus(404);
    }catch(e: any){
        console.log(e.message);
        res.status(500);
    }
}

export const deleteCardController = async (req: Request, res: Response) => {
    const { userId } = res.locals;
    const { id } = req.params;
    try{
        const card = await cardsService.getCardById(Number(id));
        if(card?.userId === Number(userId)){
            await cardsService.deleteCard(Number(id));
            res.sendStatus(204);
            return;
        }
        res.sendStatus(404);
    }catch(e: any){
        console.log(e.message);
        res.status(500);
    }
}
