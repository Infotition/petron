export {};
//* ------------------- DEPENDENCIES ------------------ *\\

//* Node modules
const express = require('express');

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
