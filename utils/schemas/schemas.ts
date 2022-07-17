import joi from 'joi';
import { signIn, signUp, setCredential, setNote, setCard, setWifi } from '../../types';

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

export const createNoteSchema = joi.object<setNote>({
    title: joi.string().max(50).required(),
    text: joi.string().max(1000).required()
});

export const createCardSchema = joi.object<setCard>({
    title: joi.string().required(),
    number: joi.string().regex(/[0-9]/).max(16).required(),
    name: joi.string().required(),
    password: joi.string().regex(/[0-9]/).max(4).required(),
    cvv: joi.string().regex(/[0-9]/).max(3).required(),
    expirationDate: joi.string().regex(/[0-9][0-9]-[0-9][0-9]/).required(),
    isVirtual: joi.boolean().required(),
    type: joi.string().equal('credit', 'debit', 'both').required()
});

export const createWifiSchema = joi.object<setWifi>({
    name: joi.string().required(),
    password: joi.string().required(),
    title: joi.string().required()
});