import { Request, Response } from "express";
import notesService from "../services/notesService";

export const createNoteController = async (req: Request, res: Response) => {
    const { userId, data } = res.locals;
    try{
        await notesService.insertNote({...data, userId: Number(userId)});
        res.sendStatus(201);
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export const getNotesByUserIdController = async (req: Request, res: Response) => {
    const { userId } = res.locals;
    try{
        const notes = await notesService.getNotesByUserId(Number(userId));
        res.status(200).send(notes);
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export const getNoteByIdController = async (req: Request, res: Response) => {
    const { userId } = res.locals;
    const { id } = req.params;
    try{
        const note = await notesService.getNoteById(Number(id));
        if(note){
            if(note.userId === Number(userId)){
                res.status(200).send(note);
                return;
            }
        }
        res.sendStatus(404);
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export const deleteNoteController = async (req: Request, res: Response) => {
    const { userId } = res.locals;
    const { id } = req.params;
    try{
        const note = await notesService.getNoteById(Number(id));
        if(note?.userId === Number(userId)){
            await notesService.deleteNote(Number(id));
            res.sendStatus(204);
            return;
        }
        res.sendStatus(404);
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}