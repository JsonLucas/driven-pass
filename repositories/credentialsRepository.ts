import { credentials } from "@prisma/client";
import prisma from "../database";

interface ICountCredentials {
    userId: number,
    title: string
} 

type credentialData = Omit<credentials, 'id'>

export const insertCredential = async (credential: credentialData) => {
    const { username, password, url, title, userId } = credential; 
    const insert = await prisma.credentials.create({
        data: {
            username,
            password, 
            url, 
            title,
            userId
        }
    });
    return insert;
}

export const getCredentialsByUserId = async (userId: number) => {
    return await prisma.credentials.findMany({
        where: { userId }
    });
}

export const getCredentialsById = async (id: number) => {
    return await prisma.credentials.findUnique({
        where: { id }
    });
}

export const countCredentialsByNameAndUserId = async (info: ICountCredentials) => {
    const { userId, title } = info;
    const query = await prisma.credentials.count({
        where: {
            userId,
            title
        }
    });
    return query;
}

export const countCredentialsByUrl = async (url: string) => {
    const query = await prisma.credentials.count({
        where: {
            url
        }
    });
    return query;
}