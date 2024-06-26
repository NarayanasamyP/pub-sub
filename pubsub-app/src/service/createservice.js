import express from 'express';
import morgan from 'morgan';
import bodyparser from 'body-parser';
// import json from 'body-parser';
import {config} from 'dotenv';
config();
const app = express();
import msgCreateRouter from '../routes/create-message.js';
import helmet from 'helmet';
import cors from 'cors';
app.use(bodyparser.urlencoded({ extended: false }));
// app.use(json());
app.use(bodyparser.json());
const { PORT_1, NODE_ENV } = process.env;
NODE_ENV !== "production" ? app.use(morgan('dev')) : app.use(morgan('combined'));
app.use(helmet());
app.use(cors({
    origin:"*",
    methods:['GET', 'POST']
}));
app.post('/api/create', (req, res) => {msgCreateRouter(req, res)});
app.listen(PORT_1);
if (NODE_ENV !== "production" ) {
    console.log(`Create message service is running at http://localhost:${PORT_1}`);
}