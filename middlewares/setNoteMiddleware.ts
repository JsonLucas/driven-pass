import { NextFunction, Request, Response } from "express";
import notesService from "../services/notesService";
import { validateNote } from "../utils/validateSchemas";

const setNoteMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = res.locals;
    const { body } = req;
    const { status, message } = validateNote(body);
    if (!status) throw { code: 422, error: message };

    const countNotes = await notesService.countNotesByTitleAndUserId(body.title, Number(userId));
    if (countNotes > 0) throw { code: 409, error: `"${body.title}" is already in your notes.` };
    res.locals.data = body;
    next();
}

export default setNoteMiddleware;