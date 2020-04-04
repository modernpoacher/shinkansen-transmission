const debug = require('debug')

const {
  env: {
    DEBUG = 'shinkansen-transmission:*'
  }
} = process

debug.enable(DEBUG)

module.exports = require('./lib')
