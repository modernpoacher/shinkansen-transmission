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
  transformIndexToValueByFindValue
} from '#transmission/transmission/common'

const log = debug('shinkansen-transmission/from-document-to-hash/boolean')

log('`shinkansen` is awake')

/**
 *  Document can be undefined
 *
 *  @param {DocumentType} [document]
 *  @param {SchemaType} [schema]
 *  @param {HashType} [hash]
 *  @param {string} [parentUri]
 *  @param {string} [uri]
 *  @returns {HashType}
 */
export default function transformBooleanSchema (document, schema = {}, hash = {}, parentUri = '#', uri = getUri(parentUri)) {
  log('transformBooleanSchema')

  if (hasEnum(schema)) {
    /**
     *  @link https://json-schema.org/draft/2019-09/json-schema-validation#rfc.section.6.1.2
     */
    const array = getEnum(schema)
    const value = transformIndexToValueByFindValue(array, document)

    hash[uri] = value

    return hash
  } else {
    if (hasAnyOf(schema)) {
      const array = getAnyOf(schema)
      const value = transformIndexToValueByFindValue(array, document)

      hash[uri] = value

      return hash
    } else {
      if (hasOneOf(schema)) {
        const array = getOneOf(schema)
        const value = transformIndexToValueByFindValue(array, document)

        hash[uri] = value

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
