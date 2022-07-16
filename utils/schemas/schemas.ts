import joi from 'joi';
import { signIn, signUp } from '../../types';

export const createAccountSchema = joi.object<signUp>({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required()
});

export const signInSchema = joi.object<signIn>({
    email: joi.string().email().required(),
    password: joi.string().required()
});