/**
 *  @typedef {TransmissionTypes.DocumentType} DocumentType
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.HashType} HashType
 */

import debug from 'debug'

import {
  toString,
  getSchema,
  isObject,
  isArray,
  hasEnum,
  getEnum,
  hasAnyOf,
  getAnyOf,
  hasOneOf,
  getOneOf,
  getUri,
  transformValueIndexFor,
  transformEqualIndexFor,
  transformToValue
} from '#transmission/transmission/common'

const log = debug('shinkansen-transmission/from-document-to-hash')

log('`shinkansen` is awake')

export { transformToValue }

/**
 *  @param {SchemaType} schema
 *  @param {string} parentUri
 *  @returns {(hash: HashType, document: DocumentType, index: number) => HashType}
 */
function getReduceArrayFor (schema, parentUri) {
  /**
   *  @param {HashType} hash
   *  @param {DocumentType} document
   *  @param {number} index
   *  @returns {HashType}
   */
  return function reduce (hash, document, index) {
    const schemaUri = getUri(parentUri, index)

    return transform(document, getSchema(schema, parentUri, schemaUri), hash, schemaUri, schemaUri)
  }
}

/**
 *  @param {SchemaType} schema
 *  @param {string} parentUri
 *  @returns {(hash: HashType, entry: [key: string, document: DocumentType]) => HashType}
 */
function getReduceObjectFor (schema, parentUri) {
  /**
   *  @param {HashType} hash
   *  @param {[key: string, document: DocumentType]} entry
   *  @returns {HashType}
   */
  return function reduce (hash, [key, document]) {
    const schemaUri = getUri(parentUri, key)

    return transform(document, getSchema(schema, parentUri, schemaUri), hash, schemaUri, schemaUri)
  }
}

/**
 *  @param {Array<DocumentType>} document
 *  @param {SchemaType} schema
 *  @param {HashType} hash
 *  @param {string} parentUri
 *  @returns {HashType}
 */
export function transformArrayFor (document, schema, hash, parentUri) { // }, uri) {
  /*
   *  log('transformArrayFor')
   */

  return (
    document
      .reduce(getReduceArrayFor(schema, parentUri), hash)
  )
}

/**
 *  @param {Record<string, DocumentType>} document
 *  @param {SchemaType} schema
 *  @param {HashType} hash
 *  @param {string} parentUri
 *  @returns {HashType}
 */
export function transformObjectFor (document, schema, hash, parentUri) { // }, uri) {
  /*
   *  log('transformObjectFor')
   */

  return (
    Object.entries(document)
      .reduce(getReduceObjectFor(schema, parentUri), hash)
  )
}

/**
 *  @param {Array<DocumentType>} document
 *  @param {SchemaType} schema
 *  @param {HashType} hash
 *  @param {string} parentUri
 *  @param {string} uri
 *  @returns {HashType}
 */
export function transformArray (document, schema, hash, parentUri, uri) {
  /*
   *  log('transformArray')
   */

  if (hasEnum(schema)) {
    const array = getEnum(schema)

    hash[uri] = document.map((value) => transformValueIndexFor(array, value))

    return hash
  } else {
    if (hasAnyOf(schema)) {
      const array = getAnyOf(schema)

      hash[uri] = document.map((value) => transformValueIndexFor(array, value))

      return hash
    } else {
      if (hasOneOf(schema)) {
        const array = getOneOf(schema)

        hash[uri] = document.map((value) => transformValueIndexFor(array, value))

        return hash
      } else {
        const { items = {} } = schema

        if (isArray(items)) {
          /*
           *  Items is an array of schemas
           */
          return transformArrayFor(document, schema, hash, parentUri) // , uri)
        } else {
          if (isObject(items)) {
            /*
             *  Items is a schema
             */
            if (hasEnum(items)) {
              const array = getEnum(items)

              hash[uri] = document.map((value) => transformValueIndexFor(array, value))

              return hash
            } else {
              if (hasAnyOf(items)) {
                const array = getAnyOf(items)

                hash[uri] = document.map((value) => transformValueIndexFor(array, value))

                return hash
              } else {
                if (hasOneOf(items)) {
                  const array = getOneOf(items)

                  hash[uri] = document.map((value) => transformValueIndexFor(array, value))

                  return hash
                }
              }
            }
          }
        }
      }
    }
  }

  /*
   *  Transform schema
   */
  return transformArrayFor(document, schema, hash, parentUri) // , uri) // schema not items
}

/**
 *  @param {Record<string, DocumentType>} document
 *  @param {SchemaType} schema
 *  @param {HashType} hash
 *  @param {string} parentUri
 *  @param {string} uri
 *  @returns {HashType}
 */
export function transformObject (document, schema, hash, parentUri, uri) {
  /*
   *  log('transformObject')
   */

  if (hasEnum(schema)) {
    const array = getEnum(schema)

    hash[uri] = transformEqualIndexFor(array, document)

    return hash
  } else {
    if (hasAnyOf(schema)) {
      const array = getAnyOf(schema)

      hash[uri] = transformEqualIndexFor(array, document)

      return hash
    } else {
      if (hasOneOf(schema)) {
        const array = getOneOf(schema)

        hash[uri] = transformEqualIndexFor(array, document)

        return hash
      }
    }
  }

  /*
   *  Transform schema
   */
  return transformObjectFor(document, schema, hash, parentUri) // , uri)
}

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
export default function transform (document, schema = {}, hash = {}, parentUri = '#', uri = getUri(parentUri)) {
  log('fromDocumentToHash')

  /*
   *  Is `document` an array?
   */
  if (isArray(document)) {
    /*
     *  Yes, `document` is an array
     */
    return transformArray(document, schema, hash, parentUri, uri)
  } else {
    /*
     *  Is `document` an object?
     */
    if (isObject(document)) {
      /*
       *  Yes, `document` is an object
       */
      return transformObject(document, schema, hash, parentUri, uri)
    } else {
      /**
       *  `document` is a primitive or is undefined
       *
       *  Is the schema an `enum`?
       */
      if (hasEnum(schema)) {
        const items = getEnum(schema)

        hash[uri] = transformValueIndexFor(items, document)

        return hash
      } else {
        /**
         *  Is the schema an `anyOf`?
         */
        if (hasAnyOf(schema)) {
          const items = getAnyOf(schema)

          hash[uri] = transformValueIndexFor(items, document)

          return hash
        } else {
          /**
           *  Is the schema an `oneOf`?
           */
          if (hasOneOf(schema)) {
            const items = getOneOf(schema)

            hash[uri] = transformValueIndexFor(items, document)

            return hash
          }
        }
      }
    }
  }

  /*
   *  Transform the primitive or undefined `document` to a string
   */
  hash[uri] = toString(document)

  return hash
}
