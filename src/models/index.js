'use strict'

const Promise = require('bluebird')
const redisModule = require('redis')

const config = require('../config/config')

/**
 * @property redis
 */
const db = {}

/**
 * @description Redis init.
 */
Promise.promisifyAll(redisModule.RedisClient.prototype)
Promise.promisifyAll(redisModule.Multi.prototype)

const redisClientCreator = () => redisModule.createClient({
  port: config.REDIS.PORT,
  host: config.REDIS.HOST,
  password: config.REDIS.PASSWORD
})

const redis = redisClientCreator()

db.redis = redis

module.exports = db
