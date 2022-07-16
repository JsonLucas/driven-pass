import { Request, Response } from "express";
import { generateToken } from "../utils/tokenUtils";

const signInController = async (req: Request, res: Response) => {
    const { data } = res.locals;
    const token = generateToken(data.userId);
    res.status(200).send(token);
}

export default signInController;