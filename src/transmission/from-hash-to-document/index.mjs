/**
 *  @typedef {TransmissionTypes.ObjectLiteralType} ObjectLiteralType
 *  @typedef {TransmissionTypes.ObjectType} ObjectType
 *  @typedef {TransmissionTypes.ArrayLiteralType} ArrayLiteralType
 *  @typedef {TransmissionTypes.ArrayType} ArrayType
 *
 *  @typedef {TransmissionTypes.ItemsType} ItemsType
 *
 *  @typedef {TransmissionTypes.DocumentType} DocumentType
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.HashType} HashType
 */

import debug from 'debug'

import {
  isArray,
  isObject,
  isPrimitive,
  hasEnum,
  getEnum,
  hasAnyOf,
  getAnyOf,
  hasOneOf,
  getOneOf,
  getUri,
  transformToValue
} from '#transmission/transmission/common'

const log = debug('shinkansen-transmission/from-hash-to-document')

log('`shinkansen` is awake')

/**
 *  @param {unknown} v
 *  @returns {null}
 */
export function toNull (v) {
  if (v === null || v === 'null') return null

  throw new Error('Invalid `null`')
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

export { transformToValue }

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

    document[key] = transform(hash, schema, schemaUri, schemaUri)

    return document
  }
}

/**
 *  @param {HashType} hash
 *  @param {SchemaType[]} items
 *  @param {string} parentUri
 *  @param {string} uri
 *  @returns {(document: ArrayLiteralType | ArrayType, key: string) => ArrayLiteralType | ArrayType}
 */
function getReduceItemsArrayFor (hash, items, parentUri, uri) {
  return function reduce (document, key) {
    const v = uri.endsWith('/') ? key.slice(uri.length) : key.slice(uri.length + 1)
    const i = v ? Number(v.includes('/') ? v.slice(0, v.indexOf('/')) : v) : NaN

    if (!isNaN(i)) {
      const schemaUri = getUri(parentUri, i)

      document[i] = transform(hash, items[i], schemaUri, schemaUri) // items
    }

    return document
  }
}

/**
 *  @param {HashType} hash
 *  @param {SchemaType} items
 *  @param {string} parentUri
 *  @param {string} uri
 *  @returns {(document: ArrayLiteralType | ArrayType, key: string) => ArrayLiteralType | ArrayType}
 */
function getReduceItemsObjectFor (hash, items, parentUri, uri) {
  return function reduce (document, key) {
    const v = uri.endsWith('/') ? key.slice(uri.length) : key.slice(uri.length + 1)
    const i = v ? Number(v.includes('/') ? v.slice(0, v.indexOf('/')) : v) : NaN

    if (!isNaN(i)) {
      const schemaUri = getUri(parentUri, i)

      document[i] = transform(hash, items, schemaUri, schemaUri) // items
    }

    return document
  }
}

/**
 *  @param {DocumentType} document
 *  @param {ItemsType} [array]
 *  @returns {DocumentType | undefined}
 */
export function transformToValueFor (document, array = []) {
  /*
   *  log('transformToValueFor')
   */

  const i = toNumber(document)

  if (i in array) { // @ts-ignore
    const v = array[i]

    /*
     *  Return the document according to the schema `v` or, if `v` is a primitive, return that
     */
    return transformToValue(v)
  }

  throw new Error('Invalid `document`')

  // return document
}

/**
 *  @param {HashType} hash
 *  @param {ItemsType} [array]
 *  @param {string} [uri]
 *  @returns {string | number | object | boolean | null | []}
 */
export function getArrayFor (hash, array = [], uri = '#') {
  /*
   *  log('getArrayFor')
   */

  if (uri in hash) {
    const v = hash[uri]
    const i = Number(v)

    if (!isNaN(i)) return array[i]
  }

  return []
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
 *  @param {SchemaType[]} [items]
 *  @param {string} parentUri
 *  @param {string} uri
 *  @returns {DocumentType}
 */
export function transformItemsArrayFor (hash, items = [], parentUri = '#', uri = getUri(parentUri)) {
  /*
   *  log('transformItemsArrayFor')
   */

  if (uri in hash) { // Reflect.has(hash, uri)) {
    const document = hash[uri] // Reflect.get(hash, uri)

    if (isArray(document)) {
      return items.map((item, i) => transform(hash, item, uri, getUri(uri, i)))
    }
  }

  return (
    Object
      .keys(hash)
      .filter((key) => key.startsWith(uri))
      .reduce(getReduceItemsArrayFor(hash, items, parentUri, uri), [])
  )
}

/**
 *  @param {HashType} hash
 *  @param {SchemaType} [items]
 *  @param {string} parentUri
 *  @param {string} uri
 *  @returns {DocumentType | undefined}
 */
export function transformItemsObjectFor (hash, items = {}, parentUri = '#', uri = getUri(parentUri)) {
  /*
   *  log('transformItemsObjectFor')
   */

  if (uri in hash) { // Reflect.has(hash, uri)) {
    const document = hash[uri] // Reflect.get(hash, uri)

    if (isArray(document)) {
      return transform(hash, items, uri, uri)
    }
  }

  return (
    Object
      .keys(hash)
      .filter((key) => key.startsWith(uri))
      .reduce(getReduceItemsObjectFor(hash, items, parentUri, uri), [])
  )
}

/**
 *  @param {HashType} hash
 *  @param {SchemaType} schema
 *  @param {string} parentUri
 *  @param {string} uri
 *  @returns {DocumentType | undefined}
 */
export function transformNull (hash, schema, parentUri, uri) {
  /*
   *  log('transformNull')
   */

  if (uri in hash) { // Reflect.has(hash, uri)) {
    const document = hash[uri] // Reflect.get(hash, uri)

    if (hasEnum(schema)) {
      const array = getEnum(schema)

      if (isArray(document)) return document.map((v) => transformToValueFor(v, array))
      return transformToValueFor(document, array)
    } else {
      if (hasAnyOf(schema)) {
        const array = getAnyOf(schema)

        if (isArray(document)) return document.map((v) => transformToValueFor(v, array))
        return transformToValueFor(document, array)
      } else {
        if (hasOneOf(schema)) {
          const array = getOneOf(schema)

          if (isArray(document)) return document.map((v) => transformToValueFor(v, array))
          return transformToValueFor(document, array)
        }
      }
    }

    if (isArray(document)) return document.map(toNull)
    return toNull(document)
  }
}

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

  if (uri in hash) { // Reflect.has(hash, uri)) {
    const document = hash[uri] // Reflect.get(hash, uri)

    if (hasEnum(schema)) {
      const array = getEnum(schema)

      if (isArray(document)) return document.map((v) => transformToValueFor(v, array))
      return transformToValueFor(document, array)
    } else {
      if (hasAnyOf(schema)) {
        const array = getAnyOf(schema)

        if (isArray(document)) return document.map((v) => transformToValueFor(v, array))
        return transformToValueFor(document, array)
      } else {
        if (hasOneOf(schema)) {
          const array = getOneOf(schema)

          if (isArray(document)) return document.map((v) => transformToValueFor(v, array))
          return transformToValueFor(document, array)
        }
      }
    }

    if (isArray(document)) return document.map(toBoolean)
    return toBoolean(document)
  }
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

    return getArrayFor(hash, array, uri)
  } else {
    if (hasAnyOf(schema)) {
      const array = getAnyOf(schema)

      return getArrayFor(hash, array, uri)
    } else {
      if (hasOneOf(schema)) {
        const array = getOneOf(schema)

        return getArrayFor(hash, array, uri)
      }
    }
  }

  return transformObjectFor(hash, schema, parentUri) // , uri)
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

    return getArrayFor(hash, array, uri)
  } else {
    if (hasAnyOf(schema)) {
      const array = getAnyOf(schema)

      return getArrayFor(hash, array, uri)
    } else {
      if (hasOneOf(schema)) {
        const array = getOneOf(schema)

        return getArrayFor(hash, array, uri)
      }
    }
  }

  return transformArrayFor(hash, schema, parentUri, uri)
}

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

      if (isArray(document)) return document.map((v) => transformToValueFor(v, array))
      return transformToValueFor(document, array)
    } else {
      if (hasAnyOf(schema)) {
        const array = getAnyOf(schema)

        if (isArray(document)) return document.map((v) => transformToValueFor(v, array))
        return transformToValueFor(document, array)
      } else {
        if (hasOneOf(schema)) {
          const array = getOneOf(schema)

          if (isArray(document)) return document.map((v) => transformToValueFor(v, array))
          return transformToValueFor(document, array)
        }
      }
    }

    if (isArray(document)) return document.map(toNumber)
    return toNumber(document)
  }
}

/**
 *  @param {HashType} hash
 *  @param {SchemaType} schema
 *  @param {string} parentUri
 *  @param {string} uri
 *  @returns {DocumentType | undefined}
 */
export function transformString (hash, schema, parentUri, uri) {
  /*
   *  log('transformString')
   */

  if (uri in hash) { // Reflect.has(hash, uri)) {
    const document = hash[uri] // Reflect.get(hash, uri)

    if (hasEnum(schema)) {
      const array = getEnum(schema)

      if (isArray(document)) return document.map((v) => transformToValueFor(v, array))
      return transformToValueFor(document, array)
    } else {
      if (hasAnyOf(schema)) {
        const array = getAnyOf(schema)

        if (isArray(document)) return document.map((v) => transformToValueFor(v, array))
        return transformToValueFor(document, array)
      } else {
        if (hasOneOf(schema)) {
          const array = getOneOf(schema)

          if (isArray(document)) return document.map((v) => transformToValueFor(v, array))
          return transformToValueFor(document, array)
        }
      }
    }

    if (isArray(document)) return document.map(toString)
    return toString(document)
  }
}

/**
 * Hash can be `undefined`
 *
 *  @param {HashType} [hash]
 *  @param {SchemaType} [schema]
 *  @param {string} [parentUri]
 *  @param {string} [uri]
 *  @returns {DocumentType | undefined}
 */
export default function transform (hash = {}, schema = {}, parentUri = '#', uri = getUri(parentUri)) {
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
