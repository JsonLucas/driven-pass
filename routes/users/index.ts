import { Router } from 'express';
import signUpController from '../../controllers/signUpController';
import authSignUpMiddleware from '../../middlewares/authSignUpMiddleware';

const users = Router();

users.post('/sign-up', authSignUpMiddleware, signUpController);
export default users;