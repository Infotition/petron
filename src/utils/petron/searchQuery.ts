export {};
//* ------------------- DEPENDENCIES ------------------ *\\

//* Module imports
const { defaultOptions, bodyOptions, themes } = require('./options');

//* --------------- CREATE SEARCH QUERY --------------- *\\

/**
 * Takes the configuration and creates a carbon header url.
 *
 * @param {Object} body
 * @return {*}  {(string)}
 */
module.exports = (body: any) => {
  //* Ovverride default options with body options
  const mergedOptions = {
    ...defaultOptions,
    ...body.options,
    code: body.code,
    ...themes[body.theme],
  };

  //* Map over options and build headers from bodyOption keywords and values
  return Object.keys(mergedOptions).reduce((acc, key) => {
    const queryParam = [bodyOptions[key]];
    const value = mergedOptions[key];
    return `${acc}&${queryParam}=${encodeURIComponent(value)}`;
  }, '?');
};
