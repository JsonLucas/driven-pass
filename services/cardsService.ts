import { 
    getCardsByUserId,
    getCardById,
    insertCard, 
    countCardsByTitleAndUserId,
    deleteCard
} from "../repositories/cardRepository";

const cardsService = { 
    getCardsByUserId,
    getCardById,
    insertCard, 
    countCardsByTitleAndUserId,
    deleteCard
};

export default cardsService;