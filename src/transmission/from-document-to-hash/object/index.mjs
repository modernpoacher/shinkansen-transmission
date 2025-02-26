import debug from 'debug'

const log = debug('shinkansen-transmission/from-document-to-hash/object')

log('`shinkansen` is awake')

export { transformObjectSchema as default } from '#transmission/transmission/from-document-to-hash'
