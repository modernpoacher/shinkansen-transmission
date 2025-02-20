/**
 *  @typedef {TransmissionTypes.DocumentType} DocumentType
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.HashType} HashType
 */

import debug from 'debug'

import {
  toString,
  hasEnum,
  getEnum,
  hasAnyOf,
  getAnyOf,
  hasOneOf,
  getOneOf,
  getUri,
  transformValueIndexFor
} from '#transmission/transmission/common'

const log = debug('shinkansen-transmission/from-document-to-hash/string')

log('`shinkansen` is awake')

/**
 * Document can be `undefined`
 *
 *  @param {DocumentType} [document]
 *  @param {SchemaType} [schema]
 *  @param {HashType} [hash]
 *  @param {string} [parentUri]
 *  @param {string} [uri]
 *  @returns {HashType}
 */
export default function transformStringSchema (document, schema = {}, hash = {}, parentUri = '#', uri = getUri(parentUri)) {
  log('transformStringSchema')

  if (hasEnum(schema)) {
    const items = getEnum(schema)

    hash[uri] = transformValueIndexFor(items, document)

    return hash
  } else {
    if (hasAnyOf(schema)) {
      const items = getAnyOf(schema)

      hash[uri] = transformValueIndexFor(items, document)

      return hash
    } else {
      if (hasOneOf(schema)) {
        const items = getOneOf(schema)

        hash[uri] = transformValueIndexFor(items, document)

        return hash
      }
    }
  }

  /*
   *  The hash should contain only strings
   */
  hash[uri] = toString(document)

  return hash
}
