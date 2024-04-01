import express from 'express';
import morgan from 'morgan';
import bodyparser from 'body-parser';
// import json from 'body-parser';
import {config} from 'dotenv';
config();
const app = express();
import pullMsgRouter from '../routes/pull-message.js';
import helmet from 'helmet';
import cors from 'cors';
app.use(bodyparser.urlencoded({ extended: false }));
// app.use(json());
app.use(bodyparser.json());
const { PORT_2, NODE_ENV } = process.env;
NODE_ENV !== "production" ? app.use(morgan('dev')) : app.use(morgan('combined'));
app.use(helmet());
app.use(cors({
    origin:"*",
    methods:['GET', 'POST']
}));
app.post('/api/pull', pullMsgRouter);
app.listen(PORT_2);
if (NODE_ENV !== "production" ) {
    console.log(`Pull message service is running at http://localhost:${PORT_2}`);
}