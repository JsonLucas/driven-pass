import { createAccountSchema } from "./schemas/schemas";

export const validateSignUp = (body: any) => {
    const validation = createAccountSchema.validate(body);
    if(validation.error){
        return { status: false, message: validation.error };
    }
    return { status: true };
}