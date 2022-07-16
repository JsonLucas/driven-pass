import { Router } from "express";
import { getCredentialsController, setCredentialsController } from "../../controllers/credentialsControllers";
import authActionsMiddleware from "../../middlewares/authActionsMiddleware";
import setCredentialsMiddleware from "../../middlewares/setCredentialsMiddleware";

const credentials = Router();

credentials.post('/new-credential', authActionsMiddleware, setCredentialsMiddleware, setCredentialsController);
credentials.get('/credentials', authActionsMiddleware, getCredentialsController);
credentials.get('/credentials/:id', authActionsMiddleware, getCredentialsController);

export default credentials;
