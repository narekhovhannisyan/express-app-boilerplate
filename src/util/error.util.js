'use strict'

class ProcessEnvVariableError extends Error {
  constructor (msg) {
    super(msg)
    this.name = this.constructor.name
  }
}

module.exports = {
  ProcessEnvVariableError
}
