import prisma from "../database";
import { signIn, signUp } from "../types";

export const setUser = async (userData: signUp) => {
    const { name, password, email } = userData;
    const insert = await prisma.users.create({
        data: {
            name,
            password,
            email
        }
    });
    return insert;
}

export const getUserByEmail = async (signInData: signIn) => {
    const { email } = signInData;
    const query = await prisma.users.findUnique({
        where: {
            email
        }
    });
    return query;
}

export const getUserById = async (userId: number) => {
    const query = await prisma.users.findUnique({
        where: {
            id: userId
        }
    });
    return query;
}