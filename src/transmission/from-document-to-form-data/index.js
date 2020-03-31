import {
  hasEnum,
  getEnum,
  getUri
} from 'shinkansen-transmission/transmission/common'

export const isObject = (v) => (v || false) instanceof Object && !isArray(v)

export const isArray = (v) => Array.isArray(v)

export function getObject (schema, parentUri, uri) {
  const {
    properties = {}
  } = schema

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

export function getArray (schema, parentUri, uri) {
  const {
    items = [] // array or object
  } = schema

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

export default function transform (document, schema = {}, values = {}, params = {}, parentUri = '#', uri = getUri(parentUri)) {
  if (isObject(document)) {
    return Object.entries(document)
      .reduce((accumulator, [key, value]) => {
        const schemaUri = getUri(parentUri, key)

        return transform(value, getSchema(schema, parentUri, schemaUri), accumulator, params, schemaUri, schemaUri)
      }, values)
  }

  if (isArray(document)) {
    return document
      .reduce((accumulator, value, index) => {
        const schemaUri = getUri(parentUri, index)

        return transform(value, getSchema(schema, parentUri, schemaUri), accumulator, params, schemaUri, schemaUri)
      }, values)
  }

  if (hasEnum(schema)) {
    const items = getEnum(schema)
    const index = items.findIndex((value) => document === value)

    return { ...values, [uri]: String(index) }
  }

  return { ...values, [uri]: String(document) }
}
