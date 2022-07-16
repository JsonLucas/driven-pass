import { Router } from "express";
import { 
    createNoteController, 
    deleteNoteController, 
    getNoteByIdController, 
    getNotesByUserIdController 
} from "../../controllers/notesControllers";
import authActionsMiddleware from "../../middlewares/authActionsMiddleware";
import setNoteMiddleware from "../../middlewares/setNoteMiddleware";

const notes = Router();

notes.post('/new-note', authActionsMiddleware, setNoteMiddleware, createNoteController);
notes.get('/notes', authActionsMiddleware, getNotesByUserIdController);
notes.get('/notes/:id', authActionsMiddleware, getNoteByIdController);
notes.delete('/notes/:id', authActionsMiddleware, deleteNoteController);

export default notes;