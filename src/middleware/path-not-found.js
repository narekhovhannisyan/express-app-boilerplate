const { PathNotFoundError } = require('../util/errors.util')

/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 * @typedef {import('express').NextFunction} NextFunction
 */

/**
 * Passes `PathNotFound` error to next handler.
 * @param {Request} request
 * @param {Response} response
 * @param {NextFunction} next
 * @returns {void}
 */
const pathNotFound = (request, response, next) =>
  next(new PathNotFoundError('The specified resource path does not exist.'))

module.exports = pathNotFound
