import { Router } from 'express';
import { 
    createCardController, 
    deleteCardController, 
    getCardByIdController, 
    getCardsByUserIdController 
} from '../../controllers/cardsControllers';
import authActionsMiddleware from '../../middlewares/authActionsMiddleware';
import setCardMiddleware from '../../middlewares/setCardMiddleware';

const cards = Router();

cards.post('/new-card', authActionsMiddleware, setCardMiddleware, createCardController);
cards.get('/cards', authActionsMiddleware, getCardsByUserIdController);
cards.get('/cards/:id', authActionsMiddleware, getCardByIdController);
cards.delete('/cards/:id', authActionsMiddleware, deleteCardController);

export default cards;