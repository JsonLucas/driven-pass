import { NextFunction, Request, Response } from "express";
import { validateWifi } from "../utils/validateSchemas";

const setWifiMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const { status, message } = validateWifi(body);
    if (!status) throw { code: 422, error: message };
    res.locals.data = body;
    next();
}

export default setWifiMiddleware;