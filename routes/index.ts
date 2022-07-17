import { Router } from 'express';
import cards from './cards';
import credentials from './credentials';
import notes from './notes';
import users from './users';

const routes = Router();
routes.use(users);
routes.use(credentials);
routes.use(notes);
routes.use(cards);

export default routes;