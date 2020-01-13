''

const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')

const { PathNotFoundError } = require('./util/errors.util')

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
app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }))
app.use(bodyParser.json({ limit: '5mb' }))

app.use('/api/v1', api)

app.get('/favicon.ico', (request, response) => response.status(204))

/**
 * Middleware - catch 404 and forward to error handler.
 */
app.use((req, res, next) => next(new PathNotFoundError('The specified resource path does not exist.')))

module.exports = app
