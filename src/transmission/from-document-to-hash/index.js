import debug from 'debug'

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

const {
  env: {
    DEBUG = 'shinkansen-transmission:*'
  }
} = process

debug.enable(DEBUG)

const log = debug('shinkansen-transmission:from-document-to-hash')

export function getObject ({ properties = {} /* object */ }, parentUri, uri) {
  return (
    Reflect.get(properties, (
      Object.keys(properties)
        .find((key) => {
          const schemaUri = getUri(parentUri, key)

          return (uri === schemaUri)
        })
    ))
  )
}

export function getArray ({ items = [] /* array or object */ }, parentUri, uri) {
  return (
    Array.from(items)
      .find((schema, index) => {
        const schemaUri = getUri(parentUri, index)

        return (uri === schemaUri)
      })
  )
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
        : schema
    : schema
)

function transformIndexFor (value, items) {
  if (items.some((schema) => value === transformValue(schema))) {
    const index = items.findIndex((schema) => value === transformValue(schema))

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

export default function transform (document, schema = {}, values = {}, params = {}, parentUri = '#', uri = getUri(parentUri)) {
  log('fromDocumentToHash')

  if (isObject(document)) {
    return Object.entries(document)
      .reduce((values, [key, value]) => {
        const schemaUri = getUri(parentUri, key)

        return transform(value, getSchema(schema, parentUri, schemaUri), values, params, schemaUri, schemaUri)
      }, values)
  } else {
    if (isArray(document)) {
      return document
        .reduce((values, value, index) => {
          const schemaUri = getUri(parentUri, index)

          return transform(value, getSchema(schema, parentUri, schemaUri), values, params, schemaUri, schemaUri)
        }, values)
    } else {
      if (hasEnum(schema)) {
        const items = getEnum(schema)

        return { ...values, [uri]: transformIndexFor(document, items) }
      } else {
        if (hasAnyOf(schema)) {
          const items = getAnyOf(schema)

          return { ...values, [uri]: transformIndexFor(document, items) }
        } else {
          if (hasOneOf(schema)) {
            const items = getOneOf(schema)

            return { ...values, [uri]: transformIndexFor(document, items) }
          }
        }
      }
    }
  }

  /*
   *  The hash contains only strings
   */
  return { ...values, [uri]: String(document) }
}
