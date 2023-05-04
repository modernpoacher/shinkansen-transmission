import debug from 'debug'

const log = debug('shinkansen-transmission')

log('`shinkansen` is awake')

export * as common from './transmission/common/index.mjs'
export { default as fromDocumentToHash } from './transmission/from-document-to-hash/index.mjs'
export { default as fromHashToDocument } from './transmission/from-hash-to-document/index.mjs'
export { default as toZashiki } from './transmission/to-zashiki/index.mjs'
