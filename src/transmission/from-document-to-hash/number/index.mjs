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
  getIndexByValue
} from '#transmission/transmission/common'

const log = debug('shinkansen-transmission/from-document-to-hash/number')

log('`shinkansen` is awake')

/**
 *  Document can be `undefined`
 *
 *  @param {DocumentType} [document]
 *  @param {SchemaType} [schema]
 *  @param {HashType} [hash]
 *  @param {string} [parentUri]
 *  @param {string} [uri]
 *  @returns {HashType}
 */
export default function transformNumberSchema (document, schema = {}, hash = {}, parentUri = '#', uri = getUri(parentUri)) {
  log('transformNumberSchema')

  if (hasEnum(schema)) {
    const array = getEnum(schema)
    const index = getIndexByValue(array, document)

    hash[uri] = String(index)

    return hash
  } else {
    if (hasAnyOf(schema)) {
      const array = getAnyOf(schema)
      const index = getIndexByValue(array, document)

      hash[uri] = String(index)

      return hash
    } else {
      if (hasOneOf(schema)) {
        const array = getOneOf(schema)
        const index = getIndexByValue(array, document)

        hash[uri] = String(index)

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
