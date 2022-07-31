import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
import helmet from 'helmet';
import 'reflect-metadata';

import { routes } from './routes';

import './database'

dotenv.config();

if (!process.env.PORT) {
    console.log('Error to get ports');
    process.exit(1);
}

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(routes);

export default app;