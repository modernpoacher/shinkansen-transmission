import {
  hasEnum,
  getEnum,
  getUri
} from 'shinkansen-transmission/transmission/common'

export const isArray = (v) => Array.isArray(v)

export const isObject = (v) => (v || false) instanceof Object && !isArray(v)

export function getObject (schema, uri, parentUri) {
  const {
    properties = {}
  } = schema

  return Object
    .entries(properties)
    .reduce((accumulator, [key, schema]) => {
      const schemaUri = getUri(parentUri, key)
      if (uri === schemaUri) return schema
      return accumulator
    }, {})
}

export function getArray (schema, uri, parentUri) {
  const {
    items = [] // array or object
  } = schema

  return []
    .concat(items)
    .reduce((accumulator, schema, index) => {
      const schemaUri = getUri(parentUri, index)
      if (uri === schemaUri) return schema
      return accumulator
    }, [])
}

export function getSchema (schema = {}, uri, parentUri) {
  const { type } = schema

  switch (type) {
    case 'object':
      return getObject(schema, uri, parentUri)

    case 'array':
      return getArray(schema, uri, parentUri)

    default:
      return schema
  }
}

export default function transform (document, schema = {}, values = {}, params = {}, uri = getUri(), parentUri = uri) {
  if (isObject(document)) {
    return Object.entries(document)
      .reduce((accumulator, [key, value]) => {
        const schemaUri = getUri(uri, key)

        return transform(value, getSchema(schema, schemaUri, uri), accumulator, params, schemaUri, uri)
      }, values)
  }

  if (isArray(document)) {
    return document
      .reduce((accumulator, value, index) => {
        const schemaUri = getUri(uri, index)

        return transform(value, getSchema(schema, schemaUri, uri), accumulator, params, schemaUri, uri)
      }, values)
  }

  if (hasEnum(schema)) {
    const items = getEnum(schema)
    const index = items.findIndex((value) => document === value)

    return { ...values, [uri]: String(index) }
  }

  return { ...values, [uri]: String(document) }
}
