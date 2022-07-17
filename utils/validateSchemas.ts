import { signIn, signUp, setCredential, setNote, setCard } from "../types";
import { 
    createAccountSchema, 
    createCardSchema, 
    createCredentialSchema, 
    createNoteSchema, 
    signInSchema 
} from "./schemas/schemas";

export const validateSignUp = (body: signUp) => {
    const { error } = createAccountSchema.validate(body);
    if(error){
        return { status: false, message: error };
    }
    return { status: true };
}

export const validateSignIn = (body: signIn) => {
    const { error } = signInSchema.validate(body);
    if(error){
        return { status: false, message: error };
    }
    return { status: true };
}

export const validateCredentials = (body: setCredential) => {
    const { error } = createCredentialSchema.validate(body);
    if(error){
        return { status: false, message: error };
    }
    return { status: true };
}

export const validateNote = (body: setNote) => {
    const { error } = createNoteSchema.validate(body);
    if(error){
        return { status: false, message: error };
    }
    return { status: true };
}

export const validateCard = (body: setCard) => {
    const { error } = createCardSchema.validate(body);
    if(error){
        return { status: false, message: error }; 
    }
    return { status: true };
}