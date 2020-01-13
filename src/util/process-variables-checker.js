const { ProcessEnvVariableError } = require('./errors.util')

const REQUIRED_VARIABLES = []

/**
 * Check process variables for `production` mode.
 * @throws Will throw `ProcessEnvVariableError` error if required environment variable is missing.
 */
const ProcessVariablesChecker = () => {
  if (process.env.MODE === 'production') {
    REQUIRED_VARIABLES.forEach((variable) => {
      if (!process.env[variable]) {
        throw new ProcessEnvVariableError(`Missing '${variable}' required environment variable.`)
      }
    })
  }
}

module.exports = ProcessVariablesChecker
