/**
 *  @typedef {TransmissionTypes.HashType} HashType
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.ParamsType} ParamsType
 *  @typedef {TransmissionTypes.DocumentType} DocumentType
 */

import debug from 'debug'

import {
  isArray,
  hasEnum,
  getEnum,
  hasAnyOf,
  getAnyOf,
  hasOneOf,
  getOneOf,
  transformToValue,
  getUri
} from '#transmission/transmission/common'

import {
  fromDocumentToArray,
  mapToValue,
  toNumber
} from '#transmission/transmission/common/transform'

const log = debug('shinkansen-transmission/from-hash-to-document/number')

log('`shinkansen` is awake')

/**
 * @overload
 * @param {unknown} error
 * @returns {void}
 *
 * @param {{ message?: string }} error
 * @returns {void}
 */
function handleError ({ message = 'No error message defined' }) { log(message) }

/**
 *  @param {HashType} hash
 *  @param {SchemaType} schema
 *  @param {string} parentUri
 *  @param {string} uri
 *  @returns {DocumentType | undefined}
 */
export function transformNumber (hash, schema, parentUri, uri) {
  /*
   *  log('transformNumber')
   */

  if (uri in hash) { // Reflect.has(hash, uri)) {
    const document = hash[uri] // Reflect.get(hash, uri)

    if (hasEnum(schema)) {
      const array = getEnum(schema)

      if (isArray(document)) return document.map(mapToValue(array))
      return (
        transformToValue(
          fromDocumentToArray(document, array)
        )
      )
    } else {
      if (hasAnyOf(schema)) {
        const array = getAnyOf(schema)

        if (isArray(document)) return document.map(mapToValue(array))
        return (
          transformToValue(
            fromDocumentToArray(document, array)
          )
        )
      } else {
        if (hasOneOf(schema)) {
          const array = getOneOf(schema)

          if (isArray(document)) return document.map(mapToValue(array))
          return (
            transformToValue(
              fromDocumentToArray(document, array)
            )
          )
        }
      }
    }

    try {
      if (isArray(document)) return document.map(toNumber)
      return (
        toNumber(document)
      )
    } catch (e) {
      handleError(e)
    }

    return document
  }
}

/**
 *  @param {HashType} [hash]
 *  @param {SchemaType} [schema]
 *  @param {ParamsType} [params]
 *  @returns {DocumentType | undefined}
 */
export default function transformNumberSchema (hash = {}, schema = {}, params = {}) {
  log('transformNumberSchema')

  const {
    type
  } = schema

  /**
   *  @link https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
   */
  if (type === 'number') {
    const {
      uri: parentUri = '#'
    } = params

    return transformNumber(hash, schema, parentUri, getUri(parentUri))
  }

  throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
}
