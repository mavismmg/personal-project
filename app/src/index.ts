import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
import helmet from 'helmet';

import database from './config/dbConnect';
import routes from './routes/routes';

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

database.on('error', console.log.bind(console, 'Connection error.'));
database.once('open', () => {
    console.log('-> Connection with database is successfull.');
});

export default app;