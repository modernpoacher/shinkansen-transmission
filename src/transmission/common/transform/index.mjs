/**
 *  @typedef {TransmissionTypes.HashType} HashType
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.ParamsType} ParamsType
 *  @typedef {TransmissionTypes.DocumentType} DocumentType
 */

import {
  isPrimitive,
  transformToValue
} from '#transmission/transmission/common'

/**
 *  @param {unknown} v
 *  @returns {string}
 */
export function toString (v) {
  if (typeof v === 'string') return v
  if (typeof v === 'number') return String(v)

  return JSON.stringify(v)
}

/**
 *  @param {unknown} v
 *  @returns {number}
 */
export function toNumber (v) {
  if (typeof v === 'number') return v
  if (typeof v === 'boolean') return Number(v)

  if (v) { // excludes zero-length strings
    const n = (
      isPrimitive(v) // excludes objects and arrays
        ? Number(v) // +v // unary operator
        : NaN
    )

    if (!isNaN(n)) return n
  }

  throw new Error('Invalid `number`')
}

/**
 *  @param {unknown} v
 *  @returns {boolean}
 */
export function toBoolean (v) {
  if (typeof v === 'boolean') return v
  if (v === 'true') return true
  if (v === 'false') return false

  throw new Error('Invalid `boolean`')
}

/**
 *  @param {unknown} v
 *  @returns {null}
 */
export function toNull (v) {
  if (v === null || v === 'null') return null

  throw new Error('Invalid `null`')
}

/**
 *  @param {string[] | number[] | object[] | boolean[] | null[]} array
 *  @returns {(document: DocumentType | undefined) => string | number | object | boolean | null | undefined}
 */
export function mapToValue (array) {
  /**
   *  @param {DocumentType | undefined} document
   *  @returns {string | number | object | boolean | null | undefined}
   */
  return function toValue (document) {
    return (
      transformToValue(
        fromDocumentToArray(document, array)
      )
    )
  }
}

/**
 *  @param {DocumentType | undefined} document
 *  @param {string[] | number[] | object[] | boolean[] | null[]} array
 *  @returns {string | number | object | boolean | null}
 */
export function fromDocumentToArray (document, array) {
  /*
   *  log('fromDocumentToArray')
   */

  const i = Number(document)

  /*
   *  Return the the schema at `i`
   */
  if (!isNaN(i)) return array[i]

  throw new Error('Invalid `document`')
}

/**
 *  @param {HashType} hash
 *  @param {string} uri
 *  @param {string[] | number[] | object[] | boolean[] | null[]} array
 *  @returns {string | number | object | boolean | null}
 */
export function fromHashToArray (hash, uri, array) {
  /*
   *  log('fromHashToArray')
   */

  const v = hash[uri]
  const i = Number(v)

  /*
    *  Return the the schema at `i`
    */
  if (!isNaN(i)) return array[i]

  throw new Error('Invalid `hash`')
}
