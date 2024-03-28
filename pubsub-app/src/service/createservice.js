import express from 'express';
import morgan from 'morgan';
import urlencoded from 'body-parser';
import json from 'body-parser';
import {config} from 'dotenv';
config();
const app = express();
import msgCreateRouter from '../routes/create-message.js';
import helmet from 'helmet';
import cors from 'cors';
app.use(urlencoded({ extended: false }));
app.use(json());
const { PORT_1, NODE_ENV } = process.env;
NODE_ENV !== "production" ? app.use(morgan('dev')) : app.use(morgan('combined'));
app.use(helmet());
app.use(cors({
    origin:"*",
    methods:['GET', 'POST']
}));
app.use('/api/create', msgCreateRouter);

app.listen(PORT_1);
if (NODE_ENV !== "production" ) {
    console.log(`Orders service is running at http://localhost:${PORT_1}`);
}