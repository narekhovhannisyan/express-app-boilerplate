const Joi = require('joi')

const { VALIDATIONS } = require('../config')
const { DEFAULT_OPTIONS } = VALIDATIONS

const { InputValidationError } = require('./errors.util')

/**
 * @typedef {import('express').NextFunction} TNextFunction
 */

/**
 * Validates input with given `schema`.
 * @param {Object} parameters - The parameters to validate.
 * @param {Object} schema - The schema to validate.
 * @param {TNextFunction} next
 * @return {any}
 */
const validate = (parameters, schema, next) => {
  const { error } = Joi.validate(parameters, schema, DEFAULT_OPTIONS)

  if (error) {
    const message = error && error.details && error.details[0] && error.details[0].message

    return next(new InputValidationError(message))
  }

  next()
}

module.exports = validate
