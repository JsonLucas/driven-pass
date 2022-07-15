import prisma from "../database";
import { signUp } from "../types";

export const setUser = async (userData: signUp) => {
    const { name, password, email } = userData
    const insert = await prisma.users.create({
        data: {
            name,
            password,
            email
        }
    });
    return insert;
}