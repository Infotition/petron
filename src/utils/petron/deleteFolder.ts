//* ------------------- DEPENDENCIES ------------------ *\\

//* Module imports
import rimraf from 'rimraf';

//* ------------------ DELETE CONTENT ----------------- *\\

/**
 * Deletes all of the content in the given folder path.
 *
 * @param {string} path
 */
function deleteFolder(path: string) {
  rimraf(`${path}`, (delErr: Error) => {
    if (delErr) console.log(delErr);
  });
}

export default deleteFolder;
