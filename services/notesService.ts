import { 
    countNotesByTitleAndUserId,
    insertNote,
    getNotesByUserId,
    getNoteById,
    deleteNote
} from "../repositories/notesRepository";

const notesService = { 
    countNotesByTitleAndUserId, 
    insertNote,
    getNotesByUserId,
    getNoteById,
    deleteNote
};

export default notesService;