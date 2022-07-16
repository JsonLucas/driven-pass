import joi from 'joi';
import { signIn, signUp, setCredential } from '../../types';

export const createAccountSchema = joi.object<signUp>({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required()
});

export const signInSchema = joi.object<signIn>({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export const createCredentialSchema = joi.object<setCredential>({
    url: joi.string().uri().required(),
    username: joi.string().required(),
    password: joi.string().required(),
    title: joi.string().required() 
});