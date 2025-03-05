require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-transmission')

log('`shinkansen` is awake')

// @ts-expect-error MJS
const common = require('./transmission/common/index.mjs') // @ts-expect-error MJS
const { default: fromDocumentToHash } = require('./transmission/from-document-to-hash/index.mjs') // @ts-expect-error MJS
const { default: fromHashToDocument } = require('./transmission/from-hash-to-document/index.mjs') // @ts-expect-error MJS
const { default: toZashiki } = require('./transmission/to-zashiki/index.mjs')

module.exports.common = common
module.exports.fromDocumentToHash = fromDocumentToHash
module.exports.fromHashToDocument = fromHashToDocument
module.exports.toZashiki = toZashiki
