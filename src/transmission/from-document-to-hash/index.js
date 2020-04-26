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
    log('findByIndex', hasEnum(schema))

    if (hasEnum(schema)) {
      log({ enum: getEnum(schema) })
      // const array = getEnum(schema)

      // return array.find(findByIndex(parentUri, uri))
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
  return function find (schema) {
    log('findByValue', value)

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
  log('getArray')

  return (isArray(items))
    ? items.find(findByIndex(parentUri, uri))
    : items
}

export function getSchema (schema = {}, parentUri, uri) {
  const { type } = schema

  log('getSchema', { type })

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
  log('transformArrayFor')

  return (
    document
      .reduce((values, value, index) => {
        const schemaUri = getUri(parentUri, index)

        // log({ parentUri, schemaUri }, schema, getSchema(schema, parentUri, schemaUri))

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
  log('transformArray (1)')

  if (hasEnum(schema)) {
    const array = getEnum(schema)

    log('`enum` (1)')

    return { ...values, [uri]: document.map((value) => transformValueIndexFor(array, value)) }
  } else {
    if (hasAnyOf(schema)) {
      const array = getAnyOf(schema)

      log('`anyOf` (2)')

      return { ...values, [uri]: document.map((value) => transformValueIndexFor(array, value)) }
    } else {
      if (hasOneOf(schema)) {
        const array = getOneOf(schema)

        log('`oneOf` (3)')

        return { ...values, [uri]: document.map((value) => transformValueIndexFor(array, value)) }
      } else {
        const { items = {} } = schema

        if (isArray(items)) {
          log('Array')

          /*
           *  Items is an array of schemas
           */
          return transformArrayFor(document, schema, values, params, parentUri, uri)
        } else {
          if (isObject(items)) {
            log('Object')

            /*
             *  Items is a schema
             */
            if (hasEnum(items)) {
              const array = getEnum(items)

              log('`enum` (2)')

              return { ...values, [uri]: document.map((value) => transformValueIndexFor(array, value)) }
            } else {
              if (hasAnyOf(items)) {
                const array = getAnyOf(items)

                log('`anyOf` (2)')

                return { ...values, [uri]: document.map((value) => transformValueIndexFor(array, value)) }
              } else {
                if (hasOneOf(items)) {
                  const array = getOneOf(items)

                  log('`oneOf` (3)')

                  return { ...values, [uri]: document.map((value) => transformValueIndexFor(array, value)) }
                }
              }
            }
          }
        }
      }
    }
  }

  log('transformArray (2)')

  /*
   *  Transform schema
   */
  return transformArrayFor(document, schema, values, params, parentUri, uri) // schema not items
}

export function transformObject (document, schema, values, params, parentUri, uri) {
  log('transformObject (1)')

  if (hasEnum(schema)) {
    const array = getEnum(schema)

    return { ...values, [uri]: transformEqualIndexFor(array, document) }
  } else {
    if (hasAnyOf(schema)) {
      const array = getAnyOf(schema)

      return { ...values, [uri]: transformEqualIndexFor(array, document) }
    } else {
      if (hasOneOf(schema)) {
        const array = getOneOf(schema)

        return { ...values, [uri]: transformEqualIndexFor(array, document) }
      }
    }
  }

  log('transformObject (2)')

  /*
   *  Transform schema
   */
  return transformObjectFor(document, schema, values, params, parentUri, uri)
}

export default function transform (document, schema = {}, values = {}, params = {}, parentUri = '#', uri = getUri(parentUri)) {
  log('fromDocumentToHash', document)

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

        log('`enum`')

        return { ...values, [uri]: transformValueIndexFor(items, document) }
      } else {
        if (hasAnyOf(schema)) {
          const items = getAnyOf(schema)

          log('`anyOf`')

          return { ...values, [uri]: transformValueIndexFor(items, document) }
        } else {
          if (hasOneOf(schema)) {
            const items = getOneOf(schema)

            log('`oneOf`')

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
