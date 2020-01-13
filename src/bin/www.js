const http = require('http')

const app = require('../app')

const ProcessVariablesChecker = require('../util/process-variables-checker')

const { PORT } = require('../config')

ProcessVariablesChecker()

/**
 * Normalize a port into a number, string, false.
 * @param {any} value
 */
const normalizePort = (value) => {
  const port = parseInt(value, 10)

  if (isNaN(port)) {
    return value
  }

  if (port >= 0) {
    return port
  }

  return false
}

/**
 * Gets port from environment and storest in Express.
 */
const port = normalizePort(PORT)
app.set('port', port)

const server = http.createServer(app)

/**
 * Event listener for HTTP server `error` event.
 * @param error
 */
const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges.`)
      process.exit(1)
    case 'EADDRINUSE':
      console.error(`${bind} is already in use.`)
      process.exit(1)
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server `listening` event.
 */
const onListening = () => {
  const address = server.address()
  const bind = typeof address === 'string'
    ? `pipe ${address}`
    : `port ${address.port}`
  console.log('\n', `Listening on:${bind}`, '\n')
}

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)
