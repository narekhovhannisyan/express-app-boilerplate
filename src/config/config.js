'use strict'

const config = {
  COOKIE: {
    KEY: process.env.COOKIE_KEY,
    SECRET: process.env.COOKIE_SECRET
  },
  REDIS: {
    PORT: process.env.REDIS_PORT,
    HOST: process.env.REDIS_HOST,
    PASSWORD: process.env.REDIS_PASS
  }
}

module.exports = config
