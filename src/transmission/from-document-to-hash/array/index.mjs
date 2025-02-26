import debug from 'debug'

const log = debug('shinkansen-transmission/from-document-to-hash/array')

log('`shinkansen` is awake')

export { transformArraySchema as default } from '#transmission/transmission/from-document-to-hash'
