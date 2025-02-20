/**
 *  @typedef {TransmissionTypes.ObjectType} ObjectType
 *  @typedef {TransmissionTypes.ArrayType} ArrayType
 *
 *  @typedef {TransmissionTypes.ItemsType} ItemsType
 *
 *  @typedef {TransmissionTypes.HashType} HashType
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.ParamsType} ParamsType
 *  @typedef {TransmissionTypes.DocumentType} DocumentType
 */

import debug from 'debug'

import {
  getUri
} from '#transmission/transmission/common'

import {
  transformString
} from '#transmission/transmission/from-hash-to-document'

const log = debug('shinkansen-transmission/from-hash-to-document/string')

log('`shinkansen` is awake')

/**
 * Hash can be `undefined`
 *
 *  @param {HashType} [hash]
 *  @param {SchemaType} [schema]
 *  @param {ParamsType} [params]
 *  @returns {DocumentType | undefined}
 */
export default function transformStringSchema (hash = {}, schema = {}, params = {}) {
  log('transformStringSchema')

  const {
    type
  } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  if (type === 'string') {
    const {
      uri: parentUri = '#'
    } = params

    return transformString(hash, schema, parentUri, getUri(parentUri))
  }

  throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
}
