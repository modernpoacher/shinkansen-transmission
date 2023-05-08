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
} from 'shinkansen-transmission/transmission/common'

const log = debug('shinkansen-transmission/from-document-to-hash')

log('`shinkansen` is awake')

export {
  transformValue
}

export function transformArrayFor (document, schema, values, parentUri) { // }, uri) {
  /*
   *  log('transformArrayFor')
   */
  return (
    document
      .reduce((values, value, index) => {
        const schemaUri = getUri(parentUri, index)

        return transform(value, getSchema(schema, parentUri, schemaUri), values, schemaUri, schemaUri)
      }, values)
  )
}

export function transformObjectFor (document, schema, values, parentUri) { // }, uri) {
  /*
   *  log('transformObjectFor')
   */
  return (
    Object.entries(document)
      .reduce((values, [key, value]) => {
        const schemaUri = getUri(parentUri, key)

        return transform(value, getSchema(schema, parentUri, schemaUri), values, schemaUri, schemaUri)
      }, values)
  )
}

export function transformArray (document, schema, values, parentUri, uri) {
  /*
   *  log('transformArray')
   */

  if (hasEnum(schema)) {
    const array = getEnum(schema)

    values[uri] = document.map((value) => transformValueIndexFor(array, value))

    return values
  } else {
    if (hasAnyOf(schema)) {
      const array = getAnyOf(schema)

      values[uri] = document.map((value) => transformValueIndexFor(array, value))

      return values
    } else {
      if (hasOneOf(schema)) {
        const array = getOneOf(schema)

        values[uri] = document.map((value) => transformValueIndexFor(array, value))

        return values
      } else {
        const { items = {} } = schema

        if (isArray(items)) {
          /*
           *  Items is an array of schemas
           */
          return transformArrayFor(document, schema, values, parentUri, uri)
        } else {
          if (isObject(items)) {
            /*
             *  Items is a schema
             */
            if (hasEnum(items)) {
              const array = getEnum(items)

              values[uri] = document.map((value) => transformValueIndexFor(array, value))

              return values
            } else {
              if (hasAnyOf(items)) {
                const array = getAnyOf(items)

                values[uri] = document.map((value) => transformValueIndexFor(array, value))

                return values
              } else {
                if (hasOneOf(items)) {
                  const array = getOneOf(items)

                  values[uri] = document.map((value) => transformValueIndexFor(array, value))

                  return values
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
  return transformArrayFor(document, schema, values, parentUri, uri) // schema not items
}

export function transformObject (document, schema, values, parentUri, uri) {
  /*
   *  log('transformObject')
   */

  if (hasEnum(schema)) {
    const array = getEnum(schema)

    values[uri] = transformEqualIndexFor(array, document)

    return values
  } else {
    if (hasAnyOf(schema)) {
      const array = getAnyOf(schema)

      values[uri] = transformEqualIndexFor(array, document)

      return values
    } else {
      if (hasOneOf(schema)) {
        const array = getOneOf(schema)

        values[uri] = transformEqualIndexFor(array, document)

        return values
      }
    }
  }

  /*
   *  Transform schema
   */
  return transformObjectFor(document, schema, values, parentUri) // , uri)
}

export default function transform (document, schema = {}, values = {}, parentUri = '#', uri = getUri(parentUri)) {
  log('fromDocumentToHash')

  /*
   *  Is `document` an array?
   */
  if (isArray(document)) {
    /*
     *  Yes, `document` is an array
     */
    return transformArray(document, schema, values, parentUri, uri)
  } else {
    /*
     *  Is `document` an object?
     */
    if (isObject(document)) {
      /*
       *  Yes, `document` is an object
       */
      return transformObject(document, schema, values, parentUri, uri)
    } else {
      if (hasEnum(schema)) {
        const items = getEnum(schema)

        values[uri] = transformValueIndexFor(items, document)

        return values
      } else {
        if (hasAnyOf(schema)) {
          const items = getAnyOf(schema)

          values[uri] = transformValueIndexFor(items, document)

          return values
        } else {
          if (hasOneOf(schema)) {
            const items = getOneOf(schema)

            values[uri] = transformValueIndexFor(items, document)

            return values
          }
        }
      }
    }
  }

  /*
   *  The hash should contain only strings
   */
  values[uri] = toString(document)

  return values
}
