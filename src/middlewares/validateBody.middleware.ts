//* ------------------- DEPENDENCIES ------------------ *\\

//* Module imports
const getRawBody = require('raw-body');
const {
  defaultOptions,
  ignoredOptions,
  themes,
} = require('../utils/petron/options');

//* ------------------- MIDDLEWARE -------------------- *\\

/**
 * Validates and checks if the request body is correct.
 *
 * @param {any} req
 * @param {any} res
 * @param {Function} next
 */
module.exports = async (req: any, res: any, next: Function) => {
  const errors = [];

  //* Check if Body is formatted as json
  const isContentTypeJSON =
    req.headers['content-type'] &&
    req.headers['content-type'].includes('application/json');

  if (!isContentTypeJSON) {
    errors.push({
      errorCode: 0,
      message: 'body should be in JSON format',
    });
  } else {
    //* Validate the body length agains maximum
    let parseError = false;
    await getRawBody(
      req,
      {
        length: req.headers['content-length'],
        limit: '1mb',
        encoding: true,
      },
      (err: any, rawBody: string) => {
        if (err) {
          parseError = true;
          return res
            .status(400)
            .json({ success: false, msg: 'errors with request', err });
        }
        req.body = JSON.parse(rawBody);
        return null;
      }
    );

    if (parseError) {
      return;
    }

    //* Token must be correct if provided
    if (process.env.token !== '') {
      if (!req.body.token) {
        errors.push({
          errorCode: 1,
          message: 'token field is required',
        });
      } else if (req.body.token !== process.env.token) {
        errors.push({
          errorCode: 2,
          message: 'token is not correct',
        });
      }
    }

    //* Format is supported
    if (req.body.format) {
      if (req.body.format !== 'url' && req.body.format !== 'img') {
        errors.push({
          errorCode: 3,
          message: 'format is not supported',
        });
      }
    }

    //* Code parameter is required
    if (!req.body.code) {
      errors.push({
        errorCode: 4,
        message: "option 'code' is required",
      });
    }

    //* Check if theme is supported
    if (req.body.theme) {
      if (!(req.body.theme in themes)) {
        errors.push({
          errorCode: 5,
          message: 'theme is not supported',
        });
      }
    }

    if (req.body.options) {
      Object.keys(req.body.options).forEach((option) => {
        //* Skip if param is in the list of ignored options
        if (ignoredOptions.includes(option)) {
          return;
        }

        //* Error if param is not included in default options
        if (!(option in defaultOptions)) {
          errors.push({
            errorCode: 6,
            message: `unexpected parameter: '${option}'`,
          });
          return;
        }

        //* Compare types of default option and body param
        const actualType = typeof req.body.options[option];
        const expectedType = typeof defaultOptions[option];

        if (actualType !== expectedType) {
          errors.push({
            errorCode: 7,
            message: `parameter '${option}' is a ${actualType} while ${expectedType} was expected`,
          });
        }
      });
    }
  }

  //* Continue if no errors, and stop if errors
  if (errors.length === 0) {
    next();
  } else {
    res
      .status(400)
      .json({ success: false, msg: 'errors with request', errors });
  }
};
