/**
 *  @typedef {TransmissionTypes.DocumentType} DocumentType
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.HashType} HashType
 */

import debug from 'debug'

import {
  toString,
  isArray,
  getUri
} from '#transmission/transmission/common'

import {
  transformArray
} from '#transmission/transmission/from-document-to-hash'

const log = debug('shinkansen-transmission/from-document-to-hash/array')

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
export default function transformArraySchema (document, schema = {}, hash = {}, parentUri = '#', uri = getUri(parentUri)) {
  log('transformArraySchema')

  /*
   *  Is `document` an array?
   */
  if (isArray(document)) {
    /*
     *  Yes, `document` is an array
     */
    return transformArray(document, schema, hash, parentUri, uri)
  }

  /*
   *  The hash should contain only strings
   */
  hash[uri] = toString(document)

  return hash
}
