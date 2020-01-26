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

export function transformObjectSchemaNull (values, { uri: parentUri, key: fieldKey }) {
  const uri = getUri(parentUri, fieldKey)

  if (Reflect.has(values, uri)) return toNull(Reflect.get(values, uri))
}

export function transformObjectSchemaBoolean (values, { uri: parentUri, key: fieldKey }) {
  const uri = getUri(parentUri, fieldKey)

  if (Reflect.has(values, uri)) return toBoolean(Reflect.get(values, uri))
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformObjectSchemaObject ({ properties = {} }, values, { uri: parentUri, key: fieldKey }) {
  const uri = getUri(parentUri, fieldKey)

  return (
    Object
      .entries(properties)
      .reduce((accumulator, [key, schema]) => ({ ...accumulator, [key]: transformObjectSchema(schema, values, { uri, key }) }), {})
  )
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformObjectSchemaArray ({ items = [] /* array or object */ }, values, { uri: parentUri, key: fieldKey }) {
  const uri = getUri(parentUri, fieldKey)

  return (
    Object
      .keys(values)
      .filter((key) => key.startsWith(uri))
      .reduce((accumulator, key) => {
        const value = key.slice(uri.length + 1)
        const index = Number(value.includes('/') ? value.slice(0, value.indexOf('/')) : value)

        if (!isNaN(index)) {
          const schema = Array.isArray(items) ? items[index] : items
          accumulator[index] = transformArraySchema(schema, values, { uri, index })
        }

        return accumulator
      }, [])
  )
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformObjectSchemaString (values, { uri: parentUri, key: fieldKey }) {
  const uri = getUri(parentUri, fieldKey)

  if (Reflect.has(values, uri)) return toString(Reflect.get(values, uri))
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformObjectSchemaNumber (values, { uri: parentUri, key: fieldKey }) {
  const uri = getUri(parentUri, fieldKey)

  if (Reflect.has(values, uri)) return toNumber(Reflect.get(values, uri))
}

export function transformObjectSchema (schema = {}, values = {}, params = {}) {
  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformObjectSchemaNull(values, params)

    case 'boolean':
      return transformObjectSchemaBoolean(values, params)

    case 'object':
      return transformObjectSchemaObject(schema, values, params)

    case 'array':
      return transformObjectSchemaArray(schema, values, params)

    case 'string':
      return transformObjectSchemaString(values, params)

    case 'number':
      return transformObjectSchemaNumber(values, params)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

export function transformArraySchemaNull (values, { uri: parentUri, index: arrayIndex }) {
  const uri = getUri(parentUri, arrayIndex)

  if (Reflect.has(values, uri)) return toNull(Reflect.get(values, uri))
}

export function transformArraySchemaBoolean (values, { uri: parentUri, index: arrayIndex }) {
  const uri = getUri(parentUri, arrayIndex)

  if (Reflect.has(values, uri)) return toBoolean(Reflect.get(values, uri))
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformArraySchemaObject ({ properties = {} }, values, { uri: parentUri, index: arrayIndex }) {
  const uri = getUri(parentUri, arrayIndex)

  return (
    Object
      .entries(properties)
      .reduce((accumulator, [key, schema]) => ({ ...accumulator, [key]: transformObjectSchema(schema, values, { uri, key }) }), {})
  )
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformArraySchemaArray ({ items = [] /* array or object */ }, values, { uri: parentUri, index: arrayIndex }) {
  const uri = getUri(parentUri, arrayIndex)

  return (
    Object
      .keys(values)
      .filter((key) => key.startsWith(uri))
      .reduce((accumulator, key) => {
        const value = key.slice(uri.length + 1)
        const index = Number(value.includes('/') ? value.slice(0, value.indexOf('/')) : value)

        if (!isNaN(index)) {
          const schema = Array.isArray(items) ? items[index] : items
          accumulator[index] = transformArraySchema(schema, values, { uri, index })
        }

        return accumulator
      }, [])
  )
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformArraySchemaString (values, { uri: parentUri, index: arrayIndex }) {
  const uri = getUri(parentUri, arrayIndex)

  if (Reflect.has(values, uri)) return toString(Reflect.get(values, uri))
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformArraySchemaNumber (values, { uri: parentUri, index: arrayIndex }) {
  const uri = getUri(parentUri, arrayIndex)

  if (Reflect.has(values, uri)) return toNumber(Reflect.get(values, uri))
}

export function transformArraySchema (schema = {}, values = {}, params = {}) {
  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformArraySchemaNull(values, params)

    case 'boolean':
      return transformArraySchemaBoolean(values, params)

    case 'object':
      return transformArraySchemaObject(schema, values, params)

    case 'array':
      return transformArraySchemaArray(schema, values, params)

    case 'string':
      return transformArraySchemaString(values, params)

    case 'number':
      return transformArraySchemaNumber(values, params)

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

export function transformObject ({ properties = {} }, values) {
  const uri = getUri()

  return (
    Object
      .entries(properties)
      .reduce((accumulator, [key, schema]) => ({ ...accumulator, [key]: transformObjectSchema(schema, values, { uri, key }) }), {})
  )
}

export function transformArray ({ items = [] /* array or object */ }, values) {
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
          accumulator[index] = transformArraySchema(schema, values, { uri, index })
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
