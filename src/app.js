const { path } = require('app-root-path')
require('dotenv').config({ path: `${path}/.env` })

const express = require('express')
const morgan = require('morgan')

const { ErrorHandlerMiddleware, PathNotFoundMiddleware } = require('./middleware')

const api = require('./api')

const app = express()

/**
 * Middleware - setup a logger.
 */
app.use(morgan('dev'))

/**
 * Middleware - body parser:
 * 1. Parses the text as URL encoded data (limit 5 mb).
 * 2. Parses the text as JSON & exposes the resulting object on req.body (limit 5 mb).
 */
app.use(express.urlencoded({ limit: '5mb', extended: false }))
app.use(express.json({ limit: '5mb' }))

app.use('/api/v1', api)

app.get('/favicon.ico', (request, response) => response.status(204))

/**
 * Middleware - catch 404 and forward to error handler.
 */
app.use(PathNotFoundMiddleware)

/**
 * Middleware for catching errors and forwarding to error handler.
 */
app.use(ErrorHandlerMiddleware)

module.exports = app
