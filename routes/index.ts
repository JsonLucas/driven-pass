import { Router } from 'express';
import cards from './cards';
import credentials from './credentials';
import notes from './notes';
import users from './users';
import wifi from './wifi';

const routes = Router();
routes.use(users);
routes.use(credentials);
routes.use(notes);
routes.use(cards);
routes.use(wifi);

export default routes;