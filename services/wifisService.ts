import { 
    insertWifi, 
    getWifisByUserId, 
    getWifiById, 
    deleteWifi 
} from "../repositories/wifiRepository";

const wifisService = {
    getWifisByUserId,
    getWifiById,
    insertWifi,
    deleteWifi
};

export default wifisService;