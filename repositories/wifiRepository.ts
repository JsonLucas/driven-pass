import { wifi } from "@prisma/client";
import prisma from "../database";

type setWifi = Omit<wifi, 'id'>

export const insertWifi = async (wifi: setWifi) => {
    const { name, password, title, userId } = wifi;
    const insert = await prisma.wifi.create({
        data: {
            name, password, title, userId
        }
    });
    return insert;
}

export const getWifiById = async (id: number) => {
    const query = await prisma.wifi.findUnique({
        where: { id }
    });
    return query;
}

export const getWifisByUserId = async (userId: number) => {
    const query = await prisma.wifi.findMany({
        where: { userId }
    });
    return query;
}

export const deleteWifi = async (id: number) => {
    const unlink = await prisma.wifi.delete({
        where: { id }
    });
    return unlink;
}