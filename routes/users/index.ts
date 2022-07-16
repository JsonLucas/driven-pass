import { Router } from 'express';
import signInController from '../../controllers/signInController';
import signUpController from '../../controllers/signUpController';
import authSignUpMiddleware from '../../middlewares/authSignUpMiddleware';
import authSignInMiddleware from '../../middlewares/authSignInMiddleware';

const users = Router();

users.post('/sign-up', authSignUpMiddleware, signUpController);
users.post('/sign-in', authSignInMiddleware, signInController);
export default users;