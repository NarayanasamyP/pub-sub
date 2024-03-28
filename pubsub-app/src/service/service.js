import express from 'express';
import morgan from 'morgan';
import urlencoded from 'body-parser';
import json from 'body-parser';
import {config} from 'dotenv';
config();
const app = express();
import ordersRoute from '../routes/myroute.js';
import helmet from 'helmet';
import cors from 'cors';
app.use(urlencoded({ extended: false }));
app.use(json());
const { MAIN_PORT, NODE_ENV } = process.env;
NODE_ENV !== "production" ? app.use(morgan('dev')) : app.use(morgan('combined'));
app.use(helmet());
app.use(cors({
    origin:"*",
    methods:['GET', 'POST']
}));
app.use('/api/get', ordersRoute);

app.listen(MAIN_PORT);
if (NODE_ENV !== "production" ) {
    console.log(`Orders service is running at http://localhost:${MAIN_PORT}`);
}