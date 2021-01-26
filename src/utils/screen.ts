export {};
//* ------------------- DEPENDENCIES ------------------ *\\

const uniqid = require('uniqid');

//* Module imports
const createSearchQuery = require('../utils/searchQuery');
const { defaultOptions } = require('../utils/options');

//* ------------------- SCREENSHOT -------------------- *\\

/**
 * Opens the browser with carbon url with config headers, screenshots it and saves it as file.
 *
 * @param {any} req
 * @param {any} res
 * @param {any} browser
 */
module.exports = async (req: any, res: any, browser: any) => {
  const CARBON_URL = process.env.CARBON_URL || 'https://carbon.now.sh/';

  //* Open new browser page and goto carbon
  const page = await browser.newPage();
  const searchQuery = createSearchQuery(req.body);
  await page.goto(`${CARBON_URL}${searchQuery}`);

  //* Define the device scale factor with big enough values
  const deviceScaleFactor = +{ ...defaultOptions, ...req.body.options }
    .exportSize[0];
  await page.setViewport({
    width: 8192,
    height: 2048,
    deviceScaleFactor,
  });

  //* Get Html element from id/class query selector
  const CARBON_QUERY =
    process.env.CARBON_QUERY || '#export-container  .container-bg';
  const element = await page.$(CARBON_QUERY);

  //* Generate unique id and screenshot the element, save it public with id as name
  const id = uniqid();
  await element.screenshot({
    path: `../images/${id}.png`,
    type: 'png',
  });
  await page.close();

  const PROTOCOL = process.env.PROTOCOL || 'http';
  const HOST = process.env.HOST || 'localhost';
  const PORT = process.env.PORT || '3000';

  res.status(200).json({
    success: true,
    msg: `${PROTOCOL}://${HOST}:${PORT}/api/petron/images/${id}.png`,
  });
};
