import { notes } from "@prisma/client";
import prisma from "../database";

type note = Omit<notes, 'id'>

export const insertNote = async (noteData: note) => {
    const { title, text, userId } = noteData;
    const insert = await prisma.notes.create({
        data: {
            title, 
            text, 
            userId
        }
    });
    return insert;
}

export const getNotesByUserId = async (userId: number) => {
    const query = await prisma.notes.findMany({
        where: { userId }
    });
    return query;
}

export const getNoteById = async (id: number) => {
    const query = await prisma.notes.findUnique({
        where: { id }
    });
    return query;
}

export const countNotesByTitleAndUserId = async (title: string, userId: number) => {
    const query = await prisma.notes.count({
        where: {
            title: title,
            userId
        }
    });
    return query;
} 

export const deleteNote = async (id: number) => {
    const unlink = await prisma.notes.delete({
        where: { id }
    });
    return unlink;
}