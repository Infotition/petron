//* ------------------- DEPENDENCIES ------------------ *\\

//* Node modules
const express = require('express');
const puppeteer = require('puppeteer');

//* Module imports
const takeScreenshot = require('./utils/screen');
const validateBody = require('./middlewares/validateBody.middleware');

//* ------------------ CONFIGURATION ------------------ *\\

require('dotenv').config({
  path: '../config/index.env',
});

//* Constants
const PORT = process.env.PORT || '3000';
const app = express();
let browser: any;

(async () => {
  browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser',
    ignoreDefaultArgs: ['--disable-extensions'],
  });
})();

//* ------------------- MIDDLEWARES ------------------- *\\

app.use(express.json());

app.use('/api/petron/images', express.static('../images'));

//* --------------------- ROUTES ---------------------- *\\

//* Code Format Route
app.get('/api/petron/format', validateBody, async (req: any, res: any) => {
  takeScreenshot(req, res, browser);
});

//* Homepage Route
app.get('/', (_req: any, res: any) =>
  res.status(200).json({ success: true, msg: 'petron server home page' })
);

//* Default route
app.use((_req: any, res: any) =>
  res.status(404).json({ success: false, msg: 'page not found' })
);

//* ------------------ START SERVER ------------------- *\\
app.listen(PORT, () =>
  console.log(`app listening on http://localhost:${PORT}`)
);

export {};
