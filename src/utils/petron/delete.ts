//* ------------------- DEPENDENCIES ------------------ *\\

//* Module imports
const rimraf = require('rimraf');

//* ------------------ DELETE CONTENT ----------------- *\\

/**
 * Deletes all of the content in the given folder path.
 *
 * @param {string} path
 */
module.exports = (path: string) => {
  //* Save delete the temp directory for the submission
  rimraf(`${path}`, (delErr: Error) => {
    if (delErr) console.log(delErr);
  });
};
