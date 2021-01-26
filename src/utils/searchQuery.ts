export {};
//* ------------------- DEPENDENCIES ------------------ *\\

//* Module imports
const { defaultOptions, bodyOptions } = require('../utils/options');

//* --------------- CREATE SEARCH QUERY --------------- *\\

module.exports = (options: any) => {
  //* Ovverride default options with body options
  const mergedOptions = { ...defaultOptions, ...options };

  //* Map over options and build headers from bodyOption keywords and values
  return Object.keys(mergedOptions).reduce((acc, key) => {
    const queryParam = [bodyOptions[key]];
    const value = mergedOptions[key];
    return `${acc}&${queryParam}=${encodeURIComponent(value)}`;
  }, '?');
};
