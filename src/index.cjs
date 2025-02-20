// @ts-nocheck

require('@babel/register')({
  ignore: [
    /node_modules\/(?!shinkansen|@modernpoacher)/
  ]
})

const debug = require('debug')

const log = debug('shinkansen-transmission')

log('`shinkansen` is awake')

const common = require('./transmission/common/index.mjs')
const { default: fromDocumentToHash } = require('./transmission/from-document-to-hash/index.mjs')
const { default: fromHashToDocument } = require('./transmission/from-hash-to-document/index.mjs')
const { default: toZashiki } = require('./transmission/to-zashiki/index.mjs')

module.exports.common = common
module.exports.fromDocumentToHash = fromDocumentToHash
module.exports.fromHashToDocument = fromHashToDocument
module.exports.toZashiki = toZashiki
