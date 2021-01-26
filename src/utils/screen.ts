export {};
//* ------------------- DEPENDENCIES ------------------ *\\

const uniqid = require('uniqid');

//* Module imports
const createSearchQuery = require('../utils/searchQuery');
const { defaultOptions } = require('../utils/options');

//* ------------------- SCREENSHOT -------------------- *\\

module.exports = async (req: any, res: any, browser: any) => {
  const page = await browser.newPage();
  const serarchQuery = createSearchQuery(req.body.options);

  await page.goto(`https://carbon.now.sh/${serarchQuery}`);

  const deviceScaleFactor = +{ ...defaultOptions, ...req.body.options }
    .exportSize[0];
  await page.setViewport({
    width: 8192,
    height: 2048,
    deviceScaleFactor,
  });

  const element = await page.$('#export-container  .container-bg');
  const id = uniqid();
  await element.screenshot({
    path: `../images/${id}.png`,
    type: 'png',
  });
  await page.close();

  res.status(200).json({
    success: true,
    msg: `http://localhost:3000/api/petron/images/${id}.png`,
  });
};
