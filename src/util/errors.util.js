/**
 * @typedef {import('../types/errors.types').TCustomErrors} TCustomErrors
 */

const CUSTOM_ERRORS = [
  'InputValidationError',
  'PathNotFoundError',
  'ProcessEnvVariableError'
]

/**
 * @type {TCustomErrors}
 */
// @ts-ignore
const ERRORS = CUSTOM_ERRORS.reduce((acc, className) => {
  acc = {
    ...acc,
    [className]: class extends Error {
      constructor (message) {
        super(message)
        this.name = this.constructor['name']
      }
    }
  }

  return acc
}, {})

module.exports = ERRORS

