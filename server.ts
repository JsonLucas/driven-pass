import express, { json } from 'express';
import cors from 'cors';
import { port } from './utils/envConfig';
import routes from './routes';

const app = express();
app.use(cors());
app.use(json());
app.use(routes);

app.listen(port, () => { console.log(`server running at port ${port}`); });