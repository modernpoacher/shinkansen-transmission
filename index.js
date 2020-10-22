const debug = require('debug')

const log = debug('shinkansen:transmission')

log('`transmission` is awake')

module.exports = require('./lib')
