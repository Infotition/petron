//* ------------------- DEPENDENCIES ------------------ *\\

//* Node modules
const express = require('express');
const puppeteer = require('puppeteer');

const router = express.Router();

//* Module imports
const takeScreenshot = require('../utils/petron/screen');
const createImageFolder = require('../utils/petron/createImageFolder');
const validateBody = require('../middlewares/validateBody.middleware');

//* ------------------ CONFIGURATION ------------------ *\\

//* Initialize and launch Browser and create image folder
let browser: any;
(async () => {
  createImageFolder('../images/');
  browser = await puppeteer.launch({
    executablePath:
      process.env.NODE_ENV === 'prod' ? '/usr/bin/chromium-browser' : '',
    ignoreDefaultArgs: ['--disable-extensions'],
  });
})();

//* --------------------- ROUTES ---------------------- *\\

/*
  @route    GET api/petron/format/
  @desc     Returns a public image link for the generated code picture.
  @access   Public
*/
router.get('/format', validateBody, async (req: any, res: any) => {
  takeScreenshot(req, res, browser);
});

module.exports = router;
