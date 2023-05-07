import debug from 'debug'

import equal from 'fast-deep-equal'

import {
  isObject,
  isArray,
  hasEnum,
  getEnum,
  hasAnyOf,
  getAnyOf,
  hasOneOf,
  getOneOf,
  getUri,
  transformValue
} from 'shinkansen-transmission/transmission/common'

const log = debug('shinkansen-transmission/from-document-to-hash')

log('`shinkansen` is awake')

function findByKey (parentUri, uri) {
  /*
   *  log('findByKey')
   */
  return function find (key) {
    /*
     *  log('find')
     */
    return getUri(parentUri, key) === uri
  }
}

function findByIndex (parentUri, uri) {
  /*
   *  log('findByIndex')
   */
  return function find (schema, index) {
    /*
     *  log('find')
     */
    if (hasEnum(schema)) {
      return getUri(parentUri, index) === uri
    } else {
      if (hasAnyOf(schema)) {
        const array = getAnyOf(schema)

        return array.find(findByIndex(parentUri, uri))
      } else {
        if (hasOneOf(schema)) {
          const array = getOneOf(schema)

          return array.find(findByIndex(parentUri, uri))
        }
      }
    }

    return getUri(parentUri, index) === uri
  }
}

function findByValue (value) {
  /*
   *  log('findByValue')
   */
  return function find (schema) {
    /*
     *  log('find')
     */
    return value === transformValue(schema)
  }
}

function findByEqual (value) {
  /*
   *  log('findByEqual')
   */
  return function find (schema) {
    /*
     *  log('find')
     */
    return equal(value, transformValue(schema))
  }
}

function toString (value) {
  /*
   *  log('toString')
   */
  return (value !== undefined) ? String(value) : ''
}

export function getObject ({ properties = {} /* object */ } = {}, parentUri = '', uri = '') {
  /*
   *  log('getObject')
   */
  return (
    Reflect.get(properties, (
      Object.keys(properties)
        .find(findByKey(parentUri, uri))
    ))
  )
}

export function getArray ({ items = {} /* array or object */ } = {}, parentUri = '', uri = '') {
  /*
   *  log('getArray')
   */
  return (isArray(items))
    ? items.find(findByIndex(parentUri, uri))
    : items
}

export function getSchema (schema = {}, parentUri = '', uri = '') {
  /*
   *  log('getSchema')
   */
  const { type } = schema

  switch (type) {
    case 'object':
      return getObject(schema, parentUri, uri)

    case 'array':
      return getArray(schema, parentUri, uri)

    default:
      return schema
  }
}

export {
  transformValue
}

export function transformValueIndexFor (array, value) {
  /*
   *  log('transformValueIndexFor')
   */
  const find = findByValue(value)

  if (array.some(find)) {
    const index = array.findIndex(find)

    /*
     *  Transform a number to a string
     */
    return String(index)
  }

  /*
   *  Takes the place of `toString(document)` in `transform()`
   */
  return toString(value)
}

export function transformEqualIndexFor (array, value) {
  /*
   *  log('transformEqualIndexFor')
   */
  const find = findByEqual(value)

  if (array.some(find)) {
    const index = array.findIndex(find)

    /*
     *  Transform a number to a string
     */
    return String(index)
  }

  /*
   *  Takes the place of `toString(document)` in `transform()`
   */
  return toString(value)
}

export function transformArrayFor (document, schema, values, params, parentUri, uri) {
  /*
   *  log('transformArrayFor')
   */
  return (
    document
      .reduce((values, value, index) => {
        const schemaUri = getUri(parentUri, index)

        return transform(value, getSchema(schema, parentUri, schemaUri), values, params, schemaUri, schemaUri)
      }, values)
  )
}

export function transformObjectFor (document, schema, values, params, parentUri, uri) {
  /*
   *  log('transformObjectFor')
   */
  return (
    Object.entries(document)
      .reduce((values, [key, value]) => {
        const schemaUri = getUri(parentUri, key)

        return transform(value, getSchema(schema, parentUri, schemaUri), values, params, schemaUri, schemaUri)
      }, values)
  )
}

export function transformArray (document, schema, values, params, parentUri, uri) {
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
          return transformArrayFor(document, schema, values, params, parentUri, uri)
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
  return transformArrayFor(document, schema, values, params, parentUri, uri) // schema not items
}

export function transformObject (document, schema, values, params, parentUri, uri) {
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
  return transformObjectFor(document, schema, values, params, parentUri, uri)
}

export default function transform (document, schema = {}, values = {}, params = {}, parentUri = '#', uri = getUri(parentUri)) {
  log('fromDocumentToHash')

  /*
   *  Is `document` an array?
   */
  if (isArray(document)) {
    /*
     *  Yes, `document` is an array
     */
    return transformArray(document, schema, values, params, parentUri, uri)
  } else {
    /*
     *  Is `document` an object?
     */
    if (isObject(document)) {
      /*
       *  Yes, `document` is an object
       */
      return transformObject(document, schema, values, params, parentUri, uri)
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
