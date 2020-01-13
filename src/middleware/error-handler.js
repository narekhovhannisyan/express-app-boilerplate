/**
 * Error cases for error handling middleware.
 */
const ERROR_CASES = {
  PathNotFoundError: {
    statusCode: 404,
    errorCode: 'NotFound'
  },
  DEFAULT: {
    statusCode: 500,
    errorCode: 'InternalError',
    errorMessage: 'The server encountered an internal error. Try again later.'
  }
}

/**
 * Error handler middleware function.
 */
const ErrorHandler = (error, request, response, next) => {
  const ERROR_CASE = ERROR_CASES[error.name] || ERROR_CASES.DEFAULT

  const errorResponse = {
    status: ERROR_CASE.statusCode,
    code: ERROR_CASE.errorCode,
    message: ERROR_CASE.errorMessage || error.message
  }

  // temp. log to explore and add more cases.
  errorResponse.status === 500 && console.log('Error: ', error)

  if (errorResponse.status === 503) {
    response.setHeader('Retry-After', 2 * 60 * 60)
  }

  response.status(errorResponse.status).json(errorResponse)
}

module.exports = ErrorHandler
