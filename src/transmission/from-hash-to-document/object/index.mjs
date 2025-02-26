import debug from 'debug'

const log = debug('shinkansen-transmission/from-hash-to-document/object')

log('`shinkansen` is awake')

export {
  transformObject,
  transformObjectSchema as default
} from '#transmission/transmission/from-hash-to-document'
