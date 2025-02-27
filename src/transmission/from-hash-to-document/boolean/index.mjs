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
  toBoolean
} from '#transmission/transmission/common/transform'

const log = debug('shinkansen-transmission/from-hash-to-document/boolean')

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
export function transformBoolean (hash, schema, parentUri, uri) {
  /*
   *  log('transformBoolean')
   */

  if (uri in hash) {
    const document = hash[uri]

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
      if (isArray(document)) return document.map(toBoolean)
      return (
        toBoolean(document)
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
export default function transformBooleanSchema (hash = {}, schema = {}, params = {}) {
  log('transformBooleanSchema')

  const {
    type
  } = schema

  /**
   *  @link https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
   */
  if (type === 'boolean') {
    const {
      uri: parentUri = '#'
    } = params

    return transformBoolean(hash, schema, parentUri, getUri(parentUri))
  }

  throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
}
