/**
 *  @typedef {TransmissionTypes.DocumentType} DocumentType
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.HashType} HashType
 */

import debug from 'debug'

import {
  toString,
  isObject,
  getUri
} from '#transmission/transmission/common'

import {
  transformObject
} from '#transmission/transmission/from-document-to-hash'

const log = debug('shinkansen-transmission/from-document-to-hash/object')

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
export default function transformObjectSchema (document, schema = {}, hash = {}, parentUri = '#', uri = getUri(parentUri)) {
  log('transformObjectSchema')

  /*
   *  Is `document` an object?
   */
  if (isObject(document)) {
    /*
     *  Yes, `document` is an object
     */
    return transformObject(document, schema, hash, parentUri, uri)
  }

  /*
   *  The hash should contain only strings
   */
  hash[uri] = toString(document)

  return hash
}
