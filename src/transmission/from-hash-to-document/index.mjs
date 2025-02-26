/**
 *  @typedef {TransmissionTypes.ObjectLiteralType} ObjectLiteralType
 *  @typedef {TransmissionTypes.ObjectType} ObjectType
 *  @typedef {TransmissionTypes.ArrayLiteralType} ArrayLiteralType
 *  @typedef {TransmissionTypes.ArrayType} ArrayType
 *
 *  @typedef {TransmissionTypes.MemberArrayType} MemberArrayType
 *
 *  @typedef {TransmissionTypes.DocumentType} DocumentType
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.HashType} HashType
 */

import debug from 'debug'

import {
  isArray,
  isObject,
  hasEnum,
  getEnum,
  hasAnyOf,
  getAnyOf,
  hasOneOf,
  getOneOf,
  getUri,
  transformToValue
} from '#transmission/transmission/common'

import {
  fromHashToArray
} from '#transmission/transmission/common/transform'

import {
  transformString
} from './string/index.mjs'

import {
  transformNumber
} from './number/index.mjs'

import {
  transformBoolean
} from './boolean/index.mjs'

import {
  transformNull
} from './null/index.mjs'

const log = debug('shinkansen-transmission/from-hash-to-document')

log('`shinkansen` is awake')

export { transformToValue }

/**
 *  @param {HashType} hash
 *  @param {SchemaType[]} itemSchemas
 *  @param {string} parentUri
 *  @param {string} uri
 *  @returns {(document: ArrayLiteralType | ArrayType, key: string) => ArrayLiteralType | ArrayType}
 */
function getReduceItemsArrayFor (hash, itemSchemas, parentUri, uri) {
  /**
   *  @param {ArrayLiteralType | ArrayType} document
   *  @param {string} key
   *  @returns {ArrayLiteralType | ArrayType}
   */
  return function reduce (document, key) {
    const v = uri.endsWith('/') ? key.slice(uri.length) : key.slice(uri.length + 1)
    const i = v ? Number(v.includes('/') ? v.slice(0, v.indexOf('/')) : v) : NaN

    if (!isNaN(i)) {
      const schemaUri = getUri(parentUri, i)

      document[i] = fromHashToDocument(hash, itemSchemas[i], schemaUri, schemaUri) // items
    }

    return document
  }
}

/**
 *  @param {HashType} hash
 *  @param {SchemaType} itemSchema
 *  @param {string} parentUri
 *  @param {string} uri
 *  @returns {(document: ArrayLiteralType | ArrayType, key: string) => ArrayLiteralType | ArrayType}
 */
function getReduceItemsObjectFor (hash, itemSchema, parentUri, uri) {
  /**
   *  @param {ArrayLiteralType | ArrayType} document
   *  @param {string} key
   *  @returns {ArrayLiteralType | ArrayType}
   */
  return function reduce (document, key) {
    const v = uri.endsWith('/') ? key.slice(uri.length) : key.slice(uri.length + 1)
    const i = v ? Number(v.includes('/') ? v.slice(0, v.indexOf('/')) : v) : NaN

    if (!isNaN(i)) {
      const schemaUri = getUri(parentUri, i)

      document[i] = fromHashToDocument(hash, itemSchema, schemaUri, schemaUri) // items
    }

    return document
  }
}

/**
 *  @param {HashType} hash
 *  @param {SchemaType[]} [itemSchemas]
 *  @param {string} parentUri
 *  @param {string} uri
 *  @returns {DocumentType}
 */
export function transformItemsArrayFor (hash, itemSchemas = [], parentUri = '#', uri = getUri(parentUri)) {
  /*
   *  log('transformItemsArrayFor')
   */

  if (uri in hash) { // Reflect.has(hash, uri)) {
    const document = hash[uri] // Reflect.get(hash, uri)

    if (isArray(document)) {
      return itemSchemas.map((itemSchema, i) => fromHashToDocument(hash, itemSchema, uri, getUri(uri, i)))
    }
  }

  return (
    Object
      .keys(hash)
      .filter((key) => key.startsWith(uri))
      .reduce(getReduceItemsArrayFor(hash, itemSchemas, parentUri, uri), [])
  )
}

/**
 *  @param {HashType} hash
 *  @param {SchemaType} [itemSchema]
 *  @param {string} parentUri
 *  @param {string} uri
 *  @returns {DocumentType | undefined}
 */
export function transformItemsObjectFor (hash, itemSchema = {}, parentUri = '#', uri = getUri(parentUri)) {
  /*
   *  log('transformItemsObjectFor')
   */

  if (uri in hash) { // Reflect.has(hash, uri)) {
    const document = hash[uri] // Reflect.get(hash, uri)

    if (isArray(document)) {
      return fromHashToDocument(hash, itemSchema, uri, uri)
    }
  }

  return (
    Object
      .keys(hash)
      .filter((key) => key.startsWith(uri))
      .reduce(getReduceItemsObjectFor(hash, itemSchema, parentUri, uri), [])
  )
}

/**
 *  @param {HashType} hash
 *  @param {SchemaType} [schema]
 *  @param {string} parentUri
 *  @param {string} uri
 *  @returns {DocumentType | undefined}
 */
export function transformArrayFor (hash, { items } = {}, parentUri = '#', uri = getUri(parentUri)) {
  /*
   *  log('transformArrayFor')
   */

  if (isArray(items)) {
    return transformItemsArrayFor(hash, items, parentUri, uri)
  } else {
    if (isObject(items)) {
      return transformItemsObjectFor(hash, items, parentUri, uri)
    }
  }

  return []
}

/**
 *  @param {HashType} hash
 *  @param {SchemaType} schema
 *  @param {string} parentUri
 *  @param {string} uri
 *  @returns {DocumentType | undefined}
 */
export function transformArray (hash, schema, parentUri, uri) {
  /*
   *  log('transformArray')
   */

  if (hasEnum(schema)) {
    const array = getEnum(schema)

    return (
      transformToValue(
        fromHashToArray(hash, uri, array)
      )
    )
  } else {
    if (hasAnyOf(schema)) {
      const array = getAnyOf(schema)

      return (
        transformToValue(
          fromHashToArray(hash, uri, array)
        )
      )
    } else {
      if (hasOneOf(schema)) {
        const array = getOneOf(schema)

        return (
          transformToValue(
            fromHashToArray(hash, uri, array)
          )
        )
      }
    }
  }

  return transformArrayFor(hash, schema, parentUri, uri)
}

/**
 *  Hash can be `undefined`
 *
 *  @param {HashType} [hash]
 *  @param {SchemaType} [schema]
 *  @param {ParamsType} [params]
 *  @returns {DocumentType}
 */
export function transformArraySchema (hash = {}, schema = {}, params = {}) {
  log('transformArraySchema')

  const {
    type
  } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  if (type === 'array') {
    const {
      uri: parentUri = '#',
      index: arrayIndex // number | undefined
    } = params

    return transformArray(hash, schema, parentUri, getUri(parentUri, arrayIndex))
  }

  throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
}

/**
 *  @param {HashType} hash
 *  @param {string} parentUri
 *  @returns {(document: ObjectLiteralType | ObjectType, entry: [key: string, schema: SchemaType]) => ObjectLiteralType | ObjectType}
 */
function getReducePropertiesEntriesFor (hash, parentUri) {
  /**
   *  @param {ObjectLiteralType | ObjectType} document
   *  @param {[key: string, schema: SchemaType]} entry
   *  @returns {ObjectLiteralType | ObjectType}
   */
  return function reduce (document, [key, schema]) {
    const schemaUri = getUri(parentUri, key)

    document[key] = fromHashToDocument(hash, schema, schemaUri, schemaUri)

    return document
  }
}

/**
 *  @param {HashType} hash
 *  @param {SchemaType} [schema]
 *  @param {string} [parentUri]
 *  @returns {DocumentType}
 */
export function transformObjectFor (hash, { properties } = {}, parentUri = '#') { // }, uri = getUri(parentUri)) {
  /*
   *  log('transformObjectFor')
   */

  if (isObject(properties)) {
    return (
      Object
        .entries(properties)
        .reduce(getReducePropertiesEntriesFor(hash, parentUri), {})
    )
  }

  return {}
}

/**
 *  @param {HashType} hash
 *  @param {SchemaType} schema
 *  @param {string} parentUri
 *  @param {string} uri
 *  @returns {DocumentType | undefined}
 */
export function transformObject (hash, schema, parentUri, uri) {
  /*
   *  log('transformObject')
   */

  if (hasEnum(schema)) {
    const array = getEnum(schema)

    return (
      transformToValue(
        fromHashToArray(hash, uri, array)
      )
    )
  } else {
    if (hasAnyOf(schema)) {
      const array = getAnyOf(schema)

      return (
        transformToValue(
          fromHashToArray(hash, uri, array)
        )
      )
    } else {
      if (hasOneOf(schema)) {
        const array = getOneOf(schema)

        return (
          transformToValue(
            fromHashToArray(hash, uri, array)
          )
        )
      }
    }
  }

  return transformObjectFor(hash, schema, parentUri) // , uri)
}

/**
 *  Hash can be `undefined`
 *
 *  @param {HashType} [hash]
 *  @param {SchemaType} [schema]
 *  @param {ParamsType} [params]
 *  @returns {DocumentType}
 */
export function transformObjectSchema (hash = {}, schema = {}, params = {}) {
  log('transformObjectSchema')

  const {
    type
  } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  if (type === 'object') {
    const {
      uri: parentUri = '#',
      key: fieldKey // string | undefined
    } = params

    return transformObject(hash, schema, parentUri, getUri(parentUri, fieldKey))
  }

  throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
}

/**
 *  Hash can be `undefined`
 *
 *  @param {HashType} [hash]
 *  @param {SchemaType} [schema]
 *  @param {string} [parentUri]
 *  @param {string} [uri]
 *  @returns {DocumentType | undefined}
 */
export default function fromHashToDocument (hash = {}, schema = {}, parentUri = '#', uri = getUri(parentUri)) {
  log('fromHashToDocument')

  const {
    type
  } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'string':
      return transformString(hash, schema, parentUri, uri)

    case 'number':
      return transformNumber(hash, schema, parentUri, uri)

    case 'array':
      return transformArray(hash, schema, parentUri, uri)

    case 'object':
      return transformObject(hash, schema, parentUri, uri)

    case 'boolean':
      return transformBoolean(hash, schema, parentUri, uri)

    case 'null':
      return transformNull(hash, schema, parentUri, uri)
  }

  throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
}
