import debug from 'debug'

const log = debug('shinkansen-transmission/from-hash-to-document/array')

log('`shinkansen` is awake')

export {
  transformArray,
  transformArraySchema as default
} from '#transmission/transmission/from-hash-to-document'
