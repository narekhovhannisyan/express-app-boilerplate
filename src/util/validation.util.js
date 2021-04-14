const { VALIDATIONS } = require('../config')
const { DEFAULT_OPTIONS } = VALIDATIONS

const { InputValidationError } = require('./errors.util')

/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').NextFunction} NextFunction
 * @typedef {import('@hapi/joi').Schema} TJoiSchema
 */

/**
 * Validates input with given `schema`.
 * @param {Request} request The request object of express.
 * @param {Object} parameters The parameters to validate.
 * @param {TJoiSchema} schema The schema to validate.
 * @param {NextFunction} next The next function.
 * @param {Function} [converter] The converter function.
 * @return {any}
 */
const validate = (request, parameters, schema, next, converter = (a) => a) => {
  const { value, error } = schema.validate(converter(parameters), DEFAULT_OPTIONS)

  if (error) {
    const message = error && error.details && error.details[0] && error.details[0].message

    return next(new InputValidationError(message))
  }

  if (value) {
    const keys = Object.keys(parameters)
    keys.forEach((key) => {
      request[key] = value[key]
    })
  }

  next()
}

module.exports = validate
