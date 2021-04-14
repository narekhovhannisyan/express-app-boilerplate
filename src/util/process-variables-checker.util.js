const { ProcessEnvVariableError } = require('./errors.util')

const REQUIRED_VARIABLES = []

/**
 * If required variable is missing, then throws error.
 * @private
 * @param {String} variable
 * @throws {ProcessEnvVariableError}
 */
const variableThrowErrorIfMissing = (variable) => {
  if (!process.env[variable]) {
    throw new ProcessEnvVariableError(`Missing '${variable}' required environment variable.`)
  }
}

/**
 * Check process variables for `production` mode.
 * @throws {ProcessEnvVariableError} If required environment variable is missing.
 * @returns {void}
 */
const ProcessVariablesChecker = () => {
  if (process.env.MODE === 'production') {
    REQUIRED_VARIABLES.forEach(variableThrowErrorIfMissing)
  }
}

module.exports = ProcessVariablesChecker
