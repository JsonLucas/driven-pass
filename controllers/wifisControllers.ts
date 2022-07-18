import { Request, Response } from "express";
import wifisService from "../services/wifisService";

export const createWifiController = async (req: Request, res: Response) => {
    const { data, userId } = res.locals;
    await wifisService.insertWifi({ ...data, userId: Number(userId) });
    res.sendStatus(201);
}

export const getWifisByUserIdController = async (req: Request, res: Response) => {
    const { userId } = res.locals;
    const wifis = await wifisService.getWifisByUserId(Number(userId));
    res.status(200).send(wifis);
}

export const getWifiByIdController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { userId } = res.locals;
    const wifi = await wifisService.getWifiById(Number(id));
    if (wifi?.userId !== Number(userId)) throw { code: 404 }
    res.status(200).send(wifi);
}

export const deleteWifiController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { userId } = res.locals;
    const wifi = await wifisService.getWifiById(Number(id));
    if (wifi?.userId !== Number(userId)) throw { code: 404 };
    await wifisService.deleteWifi(wifi.id);
    res.sendStatus(204);
}
