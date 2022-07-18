import { Request, Response } from "express";
import usersService from "../services/usersService";
import { encryptPassword } from "../utils/cryptUtils";

const signUpController = async (req: Request, res: Response) => {
    const { data } = res.locals;
    const { name, email, password } = data;
    const encryptedPassword = encryptPassword(password);
    await usersService.setUser({ name, email, password: encryptedPassword });
    res.sendStatus(201);
}

export default signUpController;