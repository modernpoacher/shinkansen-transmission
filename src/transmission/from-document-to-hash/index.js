import debug from 'debug'

import equal from 'fast-deep-equal'

import {
  isConstValue,
  toConstValue,
  isDefaultValue,
  toDefaultValue,
  isObject,
  isArray,
  hasEnum,
  getEnum,
  hasAnyOf,
  getAnyOf,
  hasOneOf,
  getOneOf,
  getUri
} from 'shinkansen-transmission/transmission/common'

const log = debug('shinkansen-transmission:from-document-to-hash')

function findByKey (parentUri, uri) {
  return function find (key) {
    return uri === getUri(parentUri, key)
  }
}

function findByIndex (parentUri, uri) {
  return function find (schema, index) {
    return uri === getUri(parentUri, index)
  }
}

function findByValue (value) {
  return function find (schema) {
    return value === transformValue(schema)
  }
}

function findByEqual (value) {
  return function find (schema) {
    return equal(value, transformValue(schema))
  }
}

export function getObject ({ properties = {} /* object */ } = {}, parentUri, uri) {
  return (
    Reflect.get(properties, (
      Object.keys(properties)
        .find(findByKey(parentUri, uri))
    ))
  )
}

export function getArray ({ items = {} /* array or object */ } = {}, parentUri, uri) {
  return (isArray(items))
    ? items.find(findByIndex(parentUri, uri))
    : items
}

export function getSchema (schema = {}, parentUri, uri) {
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

export const transformValue = (schema) => (
  isObject(schema)
    ? isConstValue(schema)
      ? toConstValue(schema)
      : isDefaultValue(schema)
        ? toDefaultValue(schema)
        : schema // object
    : schema // primitive or array
)

export function transformValueIndexFor (array, value) {
  const find = findByValue(value)

  if (array.some(find)) {
    const index = array.findIndex(find)

    /*
     *  Transform a number to a string
     */
    return String(index)
  }

  /*
   *  Takes the place of `String(document)` in `transform()`
   */
  return String(value)
}

export function transformEqualIndexFor (array, value) {
  const find = findByEqual(value)

  if (array.some(find)) {
    const index = array.findIndex(find)

    /*
     *  Transform a number to a string
     */
    return String(index)
  }

  /*
   *  Takes the place of `String(document)` in `transform()`
   */
  return String(value)
}

export function transformArrayFor (document, schema, values, params, parentUri, uri) {
  return (
    document
      .reduce((values, value, index) => {
        const schemaUri = getUri(parentUri, index)

        return transform(value, getSchema(schema, parentUri, schemaUri), values, params, schemaUri, schemaUri)
      }, values)
  )
}

export function transformObjectFor (document, schema, values, params, parentUri, uri) {
  return (
    Object.entries(document)
      .reduce((values, [key, value]) => {
        const schemaUri = getUri(parentUri, key)

        return transform(value, getSchema(schema, parentUri, schemaUri), values, params, schemaUri, schemaUri)
      }, values)
  )
}

export function transformArray (document, schema, values, params, parentUri, uri) {
  if (hasEnum(schema)) {
    const array = getEnum(schema)

    log('`enum`')

    return { ...values, [uri]: transformEqualIndexFor(array, document) }
  } else {
    if (hasAnyOf(schema)) {
      const array = getAnyOf(schema)

      log('`anyOf`')

      return { ...values, [uri]: transformEqualIndexFor(array, document) }
    } else {
      if (hasOneOf(schema)) {
        const array = getOneOf(schema)

        log('`oneOf`')

        return { ...values, [uri]: transformEqualIndexFor(array, document) }
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

              log('`enum`')

              return { ...values, [uri]: document.map((value) => transformValueIndexFor(array, value)) }
            } else {
              if (hasAnyOf(items)) {
                const array = getAnyOf(items)

                log('`anyOf`')

                return { ...values, [uri]: document.map((value) => transformValueIndexFor(array, value)) }
              } else {
                if (hasOneOf(items)) {
                  const array = getOneOf(items)

                  log('`oneOf`')

                  return { ...values, [uri]: document.map((value) => transformValueIndexFor(array, value)) }
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
  if (hasEnum(schema)) {
    const array = getEnum(schema)

    log('`enum`')

    return { ...values, [uri]: transformEqualIndexFor(array, document) }
  } else {
    if (hasAnyOf(schema)) {
      const array = getAnyOf(schema)

      log('`anyOf`')

      return { ...values, [uri]: transformEqualIndexFor(array, document) }
    } else {
      if (hasOneOf(schema)) {
        const array = getOneOf(schema)

        log('`oneOf`')

        return { ...values, [uri]: transformEqualIndexFor(array, document) }
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

        return { ...values, [uri]: transformValueIndexFor(items, document) }
      } else {
        if (hasAnyOf(schema)) {
          const items = getAnyOf(schema)

          return { ...values, [uri]: transformValueIndexFor(items, document) }
        } else {
          if (hasOneOf(schema)) {
            const items = getOneOf(schema)

            return { ...values, [uri]: transformValueIndexFor(items, document) }
          }
        }
      }
    }
  }

  /*
   *  The hash should contain only strings
   */
  return { ...values, [uri]: String(document) }
}
