export {};
//* ------------------- DEPENDENCIES ------------------ *\\

//* Module imports
const { defaultOptions, bodyOptions } = require('../utils/options');

//* --------------- CREATE SEARCH QUERY --------------- *\\

module.exports = (options: any) => {
  const mergedOptions = { ...defaultOptions, ...options };

  return Object.keys(mergedOptions).reduce((acc, key) => {
    const queryParam = [bodyOptions[key]];
    const value = mergedOptions[key];
    return `${acc}&${queryParam}=${encodeURIComponent(value)}`;
  }, '?');
};
