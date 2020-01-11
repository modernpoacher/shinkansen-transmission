import {
  getUri
} from 'shinkansen-transmission/transmission/common'

export const toNull = (v) => {
  if (v === null || v === 'null') return null

  throw new Error('Invalid `null`')
}

export const toBoolean = (v) => {
  if (typeof v === 'boolean') return v
  if (v === 'true') return true
  if (v === 'false') return false

  throw new Error('Invalid `boolean`')
}

export const toString = (v) => {
  if (typeof v === 'string') return v
  if (typeof v === 'number') return String(v)

  return JSON.stringify(v)
}

export const toNumber = (v) => {
  if (typeof v === 'number') return v

  const n = Number(v) // +v // unary operator
  if (!isNaN(n)) return n

  throw new Error('Invalid `number`')
}

export function transformObjectSchemaNull (params, values) {
  const {
    uri: parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  if (Reflect.has(values, uri)) return toNull(Reflect.get(values, uri))
}

export function transformObjectSchemaBoolean (params, values) {
  const {
    uri: parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  if (Reflect.has(values, uri)) return toBoolean(Reflect.get(values, uri))
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformObjectSchemaObject (schema, params, values) {
  const {
    properties = {}
  } = schema

  const {
    uri: parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  return (
    Object
      .entries(properties)
      .reduce((accumulator, [key, schema]) => ({ ...accumulator, [key]: transformObjectSchema(schema, { uri, key }, values) }), {})
  )
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformObjectSchemaArray (schema, params, values) {
  const {
    uri: parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  const {
    items = [] // array or object
  } = schema

  return (
    Object
      .keys(values)
      .filter((key) => key.startsWith(uri))
      .reduce((accumulator, key) => {
        const value = key.slice(uri.length + 1)
        const index = Number(value.includes('/') ? value.slice(0, value.indexOf('/')) : value)

        if (!isNaN(index)) {
          const schema = Array.isArray(items) ? items[index] : items
          accumulator[index] = transformArraySchema(schema, { uri, index }, values)
        }

        return accumulator
      }, [])
  )
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformObjectSchemaString (params, values) {
  const {
    uri: parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  if (Reflect.has(values, uri)) return toString(Reflect.get(values, uri))
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformObjectSchemaNumber (params, values) {
  const {
    uri: parentUri,
    key: fieldKey
  } = params

  const uri = getUri(parentUri, fieldKey)

  if (Reflect.has(values, uri)) return toNumber(Reflect.get(values, uri))
}

export function transformObjectSchema (schema = {}, params = {}, values = {}) {
  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformObjectSchemaNull(params, values)

    case 'boolean':
      return transformObjectSchemaBoolean(params, values)

    case 'object':
      return transformObjectSchemaObject(schema, params, values)

    case 'array':
      return transformObjectSchemaArray(schema, params, values)

    case 'string':
      return transformObjectSchemaString(params, values)

    case 'number':
      return transformObjectSchemaNumber(params, values)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

export function transformArraySchemaNull (params, values) {
  const {
    uri: parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  if (Reflect.has(values, uri)) return toNull(Reflect.get(values, uri))
}

export function transformArraySchemaBoolean (params, values) {
  const {
    uri: parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  if (Reflect.has(values, uri)) return toBoolean(Reflect.get(values, uri))
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformArraySchemaObject (schema, params, values) {
  const {
    properties = {}
  } = schema

  const {
    uri: parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  return (
    Object
      .entries(properties)
      .reduce((accumulator, [key, schema]) => ({ ...accumulator, [key]: transformObjectSchema(schema, { uri, key }, values) }), {})
  )
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformArraySchemaArray (schema, params, values) {
  const {
    uri: parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  const {
    items = [] // array or object
  } = schema

  return (
    Object
      .keys(values)
      .filter((key) => key.startsWith(uri))
      .reduce((accumulator, key) => {
        const value = key.slice(uri.length + 1)
        const index = Number(value.includes('/') ? value.slice(0, value.indexOf('/')) : value)

        if (!isNaN(index)) {
          const schema = Array.isArray(items) ? items[index] : items
          accumulator[index] = transformArraySchema(schema, { uri, index }, values)
        }

        return accumulator
      }, [])
  )
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformArraySchemaString (params, values) {
  const {
    uri: parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  if (Reflect.has(values, uri)) return toString(Reflect.get(values, uri))
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformArraySchemaNumber (params, values) {
  const {
    uri: parentUri,
    index: arrayIndex
  } = params

  const uri = getUri(parentUri, arrayIndex)

  if (Reflect.has(values, uri)) return toNumber(Reflect.get(values, uri))
}

export function transformArraySchema (schema = {}, params = {}, values = {}) {
  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformArraySchemaNull(params, values)

    case 'boolean':
      return transformArraySchemaBoolean(params, values)

    case 'object':
      return transformArraySchemaObject(schema, params, values)

    case 'array':
      return transformArraySchemaArray(schema, params, values)

    case 'string':
      return transformArraySchemaString(params, values)

    case 'number':
      return transformArraySchemaNumber(params, values)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

export function transformNull (values) {
  const uri = getUri()

  if (Reflect.has(values, uri)) return toNull(Reflect.get(values, uri))
}

export function transformBoolean (values) {
  const uri = getUri()

  if (Reflect.has(values, uri)) return toBoolean(Reflect.get(values, uri))
}

export function transformObject (rootSchema, values) {
  const {
    properties = {}
  } = rootSchema

  const uri = getUri()

  return (
    Object
      .entries(properties)
      .reduce((accumulator, [key, schema]) => ({ ...accumulator, [key]: transformObjectSchema(schema, { uri, key }, values) }), {})
  )
}

export function transformArray (rootSchema, values) {
  const {
    items = [] // array or object
  } = rootSchema

  const uri = getUri()

  return (
    Object
      .keys(values)
      .filter((key) => key.startsWith(uri))
      .reduce((accumulator, key) => {
        const value = key.slice(uri.length)
        const index = Number(value.includes('/') ? value.slice(0, value.indexOf('/')) : value)

        if (!isNaN(index)) {
          const schema = Array.isArray(items) ? items[index] : items
          accumulator[index] = transformArraySchema(schema, { uri, index }, values)
        }

        return accumulator
      }, [])
  )
}

export function transformString (values) {
  const uri = getUri()

  if (Reflect.has(values, uri)) return toString(Reflect.get(values, uri))
}

export function transformNumber (values) {
  const uri = getUri()

  if (Reflect.has(values, uri)) return toNumber(Reflect.get(values, uri))
}

export default function transform (rootSchema = {}, values = {}) {
  const { type } = rootSchema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformNull(values)

    case 'boolean':
      return transformBoolean(values)

    case 'object':
      return transformObject(rootSchema, values)

    case 'array':
      return transformArray(rootSchema, values)

    case 'number':
      return transformNumber(values)

    case 'string':
      return transformString(values)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}
