import { signIn, signUp } from "../types";
import { createAccountSchema, signInSchema } from "./schemas/schemas";

export const validateSignUp = (body: signUp) => {
    const validation = createAccountSchema.validate(body);
    if(validation.error){
        return { status: false, message: validation.error };
    }
    return { status: true };
}

export const validateSignIn = (body: signIn) => {
    const validation = signInSchema.validate(body);
    if(validation.error){
        return { status: false, message: validation.error };
    }
    return { status: true };
}