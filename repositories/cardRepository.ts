import { cards } from "@prisma/client";
import prisma from "../database";

type cardData = Omit<cards, 'id'>

export const insertCard = async (cardData: cardData) => {
    const { title, number, name, password, cvv, expirationDate, type, isVirtual, userId } = cardData;
    const insert = await prisma.cards.create({
        data: {
            title, number, name,
            password, cvv, expirationDate,
            type, isVirtual, userId
        }
    });
    return insert;
}

export const getCardsByUserId = async (userId: number) => {
    const query = await prisma.cards.findMany({
        where: { userId }
    });
    return query;
}

export const getCardById = async (id: number) => {
    const query = await prisma.cards.findUnique({
        where: { id }
    });
    return query;
}

export const countCardsByTitleAndUserId = async (userId: number, title: string) => {
    const query = await prisma.cards.count({
        where: {
            userId, 
            title
        }
    });
    return query;
}

export const deleteCard = async (id: number) => {
    const unlink = await prisma.cards.delete({
        where: { id }
    });
    return unlink;
}