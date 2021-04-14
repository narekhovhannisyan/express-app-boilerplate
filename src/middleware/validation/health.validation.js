/**
 * @type {import('@hapi/joi')}
 */
const Joi = require('@hapi/joi')

const validate = require('../../util/validation.util')

/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 * @typedef {import('express').NextFunction} NextFunction
 */

/**
 * @param {Request} request
 * @param {Response} response
 * @param {NextFunction} next
 * @returns {void}
 */
const validateHealthCheckArgs = (request, response, next) => {
  validate(request, { params: request.params, request },
    Joi.object({}),
    next
  )
}

module.exports = {
  validateHealthCheckArgs
}
