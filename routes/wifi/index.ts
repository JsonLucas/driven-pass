import { Router } from "express";
import { 
    createWifiController, 
    deleteWifiController, 
    getWifiByIdController, 
    getWifisByUserIdController 
} from "../../controllers/wifisControllers";
import authActionsMiddleware from "../../middlewares/authActionsMiddleware";
import setWifiMiddleware from "../../middlewares/setWifiMiddleware";

const wifi = Router();

wifi.post('/new-wifi', authActionsMiddleware, setWifiMiddleware, createWifiController);
wifi.get('/wifi', authActionsMiddleware, getWifisByUserIdController);
wifi.get('/wifi/:id', authActionsMiddleware, getWifiByIdController);
wifi.delete('/wifi/:id', authActionsMiddleware, deleteWifiController);

export default wifi;