import joi from 'joi';
import { signUp } from '../../types';

export const createAccountSchema = joi.object<signUp>({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required()
});