export {};
//* ------------------- DEPENDENCIES ------------------ *\\

//* Consts imports
import {
  defaultOptions,
  bodyOptions,
  themes,
} from '../../consts/petron/options';

//* Models imports
import { IRequest } from '../../models/petron/options.model';

//* --------------- CREATE SEARCH QUERY --------------- *\\

/**
 * Takes the configuration and creates a carbon header url.
 *
 * @param {Object} body
 * @return {*}  {(string)}
 */
function createSearchQuery(body: IRequest) {
  //* Ovverride default options with body options
  const mergedOptions = {
    ...defaultOptions,
    ...body.options,
    code: body.code,
    ...themes[body.theme || 'material'],
  };

  //* Map over options and build headers from bodyOption keywords and values
  return Object.keys(mergedOptions).reduce((acc, key) => {
    const queryParam = [new Map(Object.entries(bodyOptions)).get(key)];
    const value = new Map(Object.entries(mergedOptions)).get(key) || '';
    return `${acc}&${queryParam}=${encodeURIComponent(value)}`;
  }, '?');
}

//* --------------------- EXPORTS --------------------- *\\

export default createSearchQuery;
