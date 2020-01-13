const CONFIG = {
  MODE: process.env.MODE || 'development',
  PORT: process.env.PORT || 3010,
  VALIDATIONS: {
    DB_INTEGER_MAX_VALUE: 21474836,
    DEFAULT_OPTIONS: {
      abortEarly: true,
      allowUnknown: false,
      convert: true
    },
    DB_MAX_STRING_VALUE: 250
  }
}

module.exports = CONFIG
