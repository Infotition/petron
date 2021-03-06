//* ------------------- DEPENDENCIES ------------------ *\\

//* Module imports
const fs = require('fs');

//* ------------------- CREATE FOLDER ----------------- *\\

/**
 * Creates a folder at given path.
 *
 * @param {string} path
 */
module.exports = (path: string) => {
  if (!fs.existsSync(path)) {
    fs.mkdir(path, (folderErr: Error) => {
      if (folderErr) console.log(folderErr);
    });
  }
};
