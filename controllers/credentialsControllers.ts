import { Request, Response } from "express";
import credentialsService from "../services/credentialsService";

export const setCredentialsController = async (req: Request, res: Response) => {
    const { userId, credential } = res.locals;
    await credentialsService.insertCredential({ ...credential, userId: Number(userId) });
    res.sendStatus(201);
}

export const getCredentialsController = async (req: Request, res: Response) => {
    const { userId } = res.locals;
    const { id } = req.params;
    if (!id) {
        const query = await credentialsService.getCredentialsByUserId(Number(userId));
        res.status(200).send(query);
        return;
    }
    const query = await credentialsService.getCredentialsById(Number(id));
    if (query?.userId !== Number(userId)) throw { code: 404 }
    res.status(200).send(query);
}

export const deleteCredentialController = async (req: Request, res: Response) => {
    const { userId } = res.locals;
    const { id } = req.params;
    const credential = await credentialsService.getCredentialsById(Number(id));
    if (credential?.userId !== Number(userId)) throw { code: 404 };
    await credentialsService.deleteCredential(Number(id));
    res.sendStatus(204);
}
