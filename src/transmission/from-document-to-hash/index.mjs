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
  transformValue
} from '#transmission/transmission/common'

const log = debug('shinkansen-transmission/from-document-to-hash')

log('`shinkansen` is awake')

export {
  transformValue
}

export function transformArrayFor (document, schema, hash, parentUri) { // }, uri) {
  /*
   *  log('transformArrayFor')
   */
  return (
    document
      .reduce((hash, value, index) => {
        const schemaUri = getUri(parentUri, index)

        return transform(value, getSchema(schema, parentUri, schemaUri), hash, schemaUri, schemaUri)
      }, hash)
  )
}

export function transformObjectFor (document, schema, hash, parentUri) { // }, uri) {
  /*
   *  log('transformObjectFor')
   */
  return (
    Object.entries(document)
      .reduce((hash, [key, value]) => {
        const schemaUri = getUri(parentUri, key)

        return transform(value, getSchema(schema, parentUri, schemaUri), hash, schemaUri, schemaUri)
      }, hash)
  )
}

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
          return transformArrayFor(document, schema, hash, parentUri, uri)
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
  return transformArrayFor(document, schema, hash, parentUri, uri) // schema not items
}

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
      if (hasEnum(schema)) {
        const items = getEnum(schema)

        hash[uri] = transformValueIndexFor(items, document)

        return hash
      } else {
        if (hasAnyOf(schema)) {
          const items = getAnyOf(schema)

          hash[uri] = transformValueIndexFor(items, document)

          return hash
        } else {
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
   *  The hash should contain only strings
   */
  hash[uri] = toString(document)

  return hash
}
