import { Request,Response } from "express";
import wifisService from "../services/wifisService";

export const createWifiController = async (req: Request, res: Response) => {
    const { data, userId } = res.locals;
    try{
        await wifisService.insertWifi({...data, userId: Number(userId)});
        res.sendStatus(201);
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
} 

export const getWifisByUserIdController = async (req: Request, res: Response) => {
    const { userId } = res.locals;
    try{
        const wifis = await wifisService.getWifisByUserId(Number(userId));
        res.status(200).send(wifis);
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export const getWifiByIdController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { userId } = res.locals;
    try{
        const wifi = await wifisService.getWifiById(Number(id));
        if(wifi?.userId === Number(userId)) {
            res.status(200).send(wifi);
            return;
        }
        res.sendStatus(404);
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export const deleteWifiController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { userId } = res.locals;
    try{
        const wifi = await wifisService.getWifiById(Number(id));
        if(wifi?.userId === Number(userId)){
            await wifisService.deleteWifi(wifi.id);
            res.sendStatus(204);
            return;
        }
        res.sendStatus(404);
    }catch(e: any){
        console.log(e.message);
        res.sendStatus(500);
    }
}
