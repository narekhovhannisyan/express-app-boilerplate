const app = require('express')()

const healthAPI = require('./health/health.api')

app.use('/health', healthAPI)

module.exports = app
