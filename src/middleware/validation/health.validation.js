const Joi = require('joi')

const validate = require('../../util/validation.util')

/**
 * @typedef {import('express').Request} TRequest
 * @typedef {import('express').Response} TResponse
 * @typedef {import('express').NextFunction} TNextFunction
 */

/**
 * @param {TRequest} request
 * @param {TResponse} response
 * @param {TNextFunction} next
 * @returns {void}
 */
const validateHealthCheckArgs = (request, response, next) => {
  validate({ },
    {
      // validate your data here
    }, next)
}

module.exports = {
  validateHealthCheckArgs
}
