const router = require('express').Router()

const { HealthValidation } = require('../../middleware/validation')

const HealthService = require('./service/health.service')

router.get('/',
  HealthValidation.validateHealthCheckArgs,
  HealthService.getHealthStatus
)

module.exports = router
