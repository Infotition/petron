export {};
//* ------------------- DEPENDENCIES ------------------ *\\

//* Node modules
const express = require('express');
const cron = require('node-cron');

//* Module imports
const deleteFolder = require('./utils/petron/delete');

//* ------------------ CONFIGURATION ------------------ *\\

require('dotenv').config({
  path: '../config/index.env',
});

//* Constants
const PORT = process.env.PORT || '3000';
const app = express();

//* ------------------- MIDDLEWARES ------------------- *\\

app.use(express.json());

app.use('/api/petron/images', express.static('../images'));

//* --------------------- DEMONS ---------------------- *\\

//* Delete all pictures every day at 00:00
cron.schedule('0 0 * * *', async () => deleteFolder('../images/*'));

//* --------------------- ROUTES ---------------------- *\\

//* Petron routes
app.use('/api/petron/', require('./routes/petron.route'));

//* Homepage Route
app.get('/', async (_req: any, res: any) =>
  res.status(200).json({ success: true, msg: 'petron server home page' })
);

//* Default route
app.use(async (_req: any, res: any) =>
  res.status(404).json({ success: false, msg: 'page not found' })
);

//* ------------------ START SERVER ------------------- *\\
app.listen(PORT, () =>
  console.log(`app listening on http://localhost:${PORT}`)
);
