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

export function transformObjectSchemaNull ({ uri: parentUri, key: fieldKey }, values) {
  const uri = getUri(parentUri, fieldKey)

  if (Reflect.has(values, uri)) return toNull(Reflect.get(values, uri))
}

export function transformObjectSchemaBoolean ({ uri: parentUri, key: fieldKey }, values) {
  const uri = getUri(parentUri, fieldKey)

  if (Reflect.has(values, uri)) return toBoolean(Reflect.get(values, uri))
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformObjectSchemaObject ({ properties = {} }, { uri: parentUri, key: fieldKey }, values) {
  const uri = getUri(parentUri, fieldKey)

  return (
    Object
      .entries(properties)
      .reduce((accumulator, [key, schema]) => ({ ...accumulator, [key]: transformObjectSchema(schema, { uri, key }, values) }), {})
  )
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformObjectSchemaArray ({ items = [] /* array or object */ }, { uri: parentUri, key: fieldKey }, values) {
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
          accumulator[index] = transformArraySchema(schema, { uri, index }, values)
        }

        return accumulator
      }, [])
  )
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformObjectSchemaString ({ uri: parentUri, key: fieldKey }, values) {
  const uri = getUri(parentUri, fieldKey)

  if (Reflect.has(values, uri)) return toString(Reflect.get(values, uri))
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformObjectSchemaNumber ({ uri: parentUri, key: fieldKey }, values) {
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

export function transformArraySchemaNull ({ uri: parentUri, index: arrayIndex }, values) {
  const uri = getUri(parentUri, arrayIndex)

  if (Reflect.has(values, uri)) return toNull(Reflect.get(values, uri))
}

export function transformArraySchemaBoolean ({ uri: parentUri, index: arrayIndex }, values) {
  const uri = getUri(parentUri, arrayIndex)

  if (Reflect.has(values, uri)) return toBoolean(Reflect.get(values, uri))
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformArraySchemaObject ({ properties = {} }, { uri: parentUri, index: arrayIndex }, values) {
  const uri = getUri(parentUri, arrayIndex)

  return (
    Object
      .entries(properties)
      .reduce((accumulator, [key, schema]) => ({ ...accumulator, [key]: transformObjectSchema(schema, { uri, key }, values) }), {})
  )
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformArraySchemaArray ({ items = [] /* array or object */ }, { uri: parentUri, index: arrayIndex }, values) {
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
          accumulator[index] = transformArraySchema(schema, { uri, index }, values)
        }

        return accumulator
      }, [])
  )
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformArraySchemaString ({ uri: parentUri, index: arrayIndex }, values) {
  const uri = getUri(parentUri, arrayIndex)

  if (Reflect.has(values, uri)) return toString(Reflect.get(values, uri))
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformArraySchemaNumber ({ uri: parentUri, index: arrayIndex }, values) {
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

export function transformObject ({ properties = {} }, values) {
  const uri = getUri()

  return (
    Object
      .entries(properties)
      .reduce((accumulator, [key, schema]) => ({ ...accumulator, [key]: transformObjectSchema(schema, { uri, key }, values) }), {})
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
