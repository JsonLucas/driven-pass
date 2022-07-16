import { Router } from 'express';
import credentials from './credentials';
import users from './users';

const routes = Router();
routes.use(users);
routes.use(credentials);

export default routes;