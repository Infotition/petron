//* ------------------- DEPENDENCIES ------------------ *\\

//* Node modules
import { Request, Response } from 'express';
import puppeteer from 'puppeteer';

//* Function imports
import takeScreenshot from '../../utils/petron/takeScreenshot';
import createImageFolder from '../../utils/petron/createImageFolder';

//* ------------------ CONFIGURATION ------------------ *\\

//* Initialize and launch Browser and create image folder
let browser: any;
(async () => {
  createImageFolder('./images/');
  browser = await puppeteer.launch({
    executablePath:
      process.env.NODE_ENV === 'production' ? '/usr/bin/chromium-browser' : '',
    ignoreDefaultArgs: ['--disable-extensions'],
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
})();

//* ------------------- Controllers ------------------- *\\

/**
 * Takes a screenshot from Carbon with header configuration.
 *
 * @param {Request} req
 * @param {Response} res
 */
async function petronController(req: Request, res: Response) {
  takeScreenshot(req, res, browser);
}

//* --------------------- EXPORTS --------------------- *\\

export default petronController;
