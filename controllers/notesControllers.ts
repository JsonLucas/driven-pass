import { Request, Response } from "express";
import notesService from "../services/notesService";

export const createNoteController = async (req: Request, res: Response) => {
    const { userId, data } = res.locals;
    await notesService.insertNote({ ...data, userId: Number(userId) });
    res.sendStatus(201);
}

export const getNotesByUserIdController = async (req: Request, res: Response) => {
    const { userId } = res.locals;
    const notes = await notesService.getNotesByUserId(Number(userId));
    res.status(200).send(notes);
}

export const getNoteByIdController = async (req: Request, res: Response) => {
    const { userId } = res.locals;
    const { id } = req.params;
    const note = await notesService.getNoteById(Number(id));
    if (note?.userId !== Number(userId)) throw { code: 404 };
    res.status(200).send(note);
}

export const deleteNoteController = async (req: Request, res: Response) => {
    const { userId } = res.locals;
    const { id } = req.params;
    const note = await notesService.getNoteById(Number(id));
    if (note?.userId !== Number(userId)) throw { code: 404 }
    res.sendStatus(404);
    await notesService.deleteNote(Number(id));
}