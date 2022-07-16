import { NextFunction, Request, Response } from "express";
import notesService from "../services/notesService";
import { validateNote } from "../utils/validateSchemas";

const setNoteMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = res.locals;
    const { body } = req;
    try{
        const { status, message } = validateNote(body);
        if(!status){
            res.status(422).send(message);
            return;
        }
        const countNotes = await notesService.countNotesByTitleAndUserId(body.title, Number(userId));
        if(countNotes > 0){
            res.status(409).send(`"${body.title}" is already in your notes.`);
            return;
        }
        res.locals.data = body;
        next();
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default setNoteMiddleware;