/**
 * @typedef {import('express').Request} TRequest
 * @typedef {import('express').Response} TResponse
 * @typedef {import('express').NextFunction} TNextFunction
 */

/**
 * Sends `OK` response.
 * @param {TRequest} request
 * @param {TResponse} response
 * @param {TNextFunction} next
 * @returns {void}
 */
const getHealthStatus = (request, response, next) => {
  response.send('OK')
}

module.exports = {
  getHealthStatus
}
