import { Request, Response } from "express";
import credentialsService from "../services/credentials";

export const setCredentialsController = async (req: Request, res: Response) => {
    const { userId, credential } = res.locals;
    try{
        await credentialsService.insertCredential({...credential, userId: Number(userId)});
        res.sendStatus(201);
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export const getCredentialsController = async (req: Request, res: Response) => {
    const { userId } = res.locals;
    const { id } = req.params;
    try{
        if(!id){
            const query = await credentialsService.getCredentialsByUserId(Number(userId));
            res.status(200).send(query);
            return;
        }
        const query = await credentialsService.getCredentialsById(Number(id));
        if(query?.userId === Number(userId)) {
            res.status(200).send(query);
            return;
        }
        res.sendStatus(404);
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export const deleteCredentialController = async (req: Request, res: Response) => {
    const { userId } = res.locals;
    const { id } = req.params;
    try{
        const credential = await credentialsService.getCredentialsById(Number(id));
        if(credential?.userId === Number(userId)){
            await credentialsService.deleteCredential(Number(id));
            res.sendStatus(204);
            return;
        }
        res.sendStatus(404);
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}
