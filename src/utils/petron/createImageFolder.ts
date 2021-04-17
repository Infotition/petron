//* ------------------- DEPENDENCIES ------------------ *\\

//* Module imports
import fs from 'fs';

//* ------------------- CREATE FOLDER ----------------- *\\

/**
 * Creates a folder at given path.
 *
 * @param {string} path
 */
function createImageFolder(path: string) {
  if (!fs.existsSync(path)) {
    fs.mkdir(path, (folderErr) => {
      if (folderErr) console.log(folderErr);
    });
  }
}

//* --------------------- EXPORTS --------------------- *\\

export default createImageFolder;
