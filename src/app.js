'use strict'

const bodyParser = require('body-parser')
const express = require('express')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const morgan = require('morgan')

const config = require('./config/config')

const models = require('./models')

const { PathNotFoundError } = require('./util').Errors

const healthApi = require('./routes/health/health.api')

const app = express()

/**
 * @description Middleware - setup a logger.
 */
app.use(morgan('dev'))

/**
 * @description Middleware - body parser:
 * 1. Parses the text as URL encoded data (limit 5 mb).
 * 2. Parses the text as JSON & exposes the resulting object on req.body (limit 5 mb).
 */
app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }))
app.use(bodyParser.json({ limit: '5mb' }))

/**
 * @description Middleware - session.
 */
app.use(session({
  key: config.COOKIE.KEY,
  store: new RedisStore({ client: models.redis }),
  secret: config.COOKIE.SECRET,
  resave: false,
  saveUninitialized: false
}))

/**
 * @description Add health API (NO authorization, NO api prefix).
 */
app.use('/health', healthApi)

/**
 * @description Middleware - catch 404 and forward to error handler.
 */
app.use((req, res, next) => next(new PathNotFoundError('The specified resource path does not exist.')))

module.exports = app
