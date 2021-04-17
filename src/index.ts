export {};
//* ------------------- DEPENDENCIES ------------------ *\\

//* Node modules
import express, { Request, Response, Application } from 'express';
import cron from 'node-cron';
import cors from 'cors';

//* Environments
import dotenv from 'dotenv';

dotenv.config({
  path: `./config/${process.env.NODE_ENV}.env`,
});

//* Function imports
import deleteFolder from './utils/petron/deleteFolder';

//* Routes
import petronRouter from './routes/petron/petron.route';

//* ------------------ CONFIGURATION ------------------ *\\

// Constants
const PROTOCOL: string = process.env.PROTOCOL || 'http';
const PORT: string = process.env.PORT || '3000';
const HOST: string = process.env.HOST || 'localhost';

const app: Application = express();

//* ------------------- MIDDLEWARES ------------------- *\\

app.use(express.json());
app.use(cors());

// Public Folder
app.use('/api/petron/images', express.static('./images'));

//* --------------------- DEMONS ---------------------- *\\

// Delete all pictures every day at 00:00
cron.schedule('0 0 * * *', async () => deleteFolder('./images/*'));

//* --------------------- ROUTES ---------------------- *\\

//* Petron routes
app.use('/api/petron/', petronRouter);

//* Homepage Route
app.get('/', async (_req: Request, res: Response) =>
  res.status(200).json({ success: true, msg: 'petron server' })
);

//* Default route
app.use(async (_req: Request, res: Response) =>
  res.status(404).json({ success: false, msg: 'page not found' })
);

//* ------------------ START SERVER ------------------- *\\
app.listen(PORT, () =>
  console.log(`server listening on ${PROTOCOL}://${HOST}:${PORT}`)
);
