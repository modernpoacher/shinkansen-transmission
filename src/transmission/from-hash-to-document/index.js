import debug from 'debug'

import {
  isConstValue,
  toConstValue,
  isDefaultValue,
  toDefaultValue,
  isObject,
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

const log = debug('shinkansen-transmission:from-hash-to-document:log')
const error = debug('shinkansen-transmission:from-hash-to-document:error')

export function toNull (v) {
  if (v === null || v === 'null') return null

  throw new Error('Invalid `null`')
}

export function toBoolean (v) {
  if (typeof v === 'boolean') return v
  if (v === 'true') return true
  if (v === 'false') return false

  throw new Error('Invalid `boolean`')
}

export function toString (v) {
  if (typeof v === 'string') return v
  if (typeof v === 'number') return String(v)

  return JSON.stringify(v)
}

export function toNumber (v) {
  if (typeof v === 'number') return v

  if (v) {
    const n = Number(v) // +v // unary operator
    if (!isNaN(n)) return n
  }

  throw new Error('Invalid `number`')
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

function transformValueFor (value, items = []) {
  try {
    const i = toNumber(value)

    if (Reflect.has(items, i)) {
      const v = Reflect.get(items, i)

      /*
       *  Return the value given from the schema
       */
      return transformValue(v)
    }
  } catch ({ message = 'No error message defined' }) {
    error(message)
  }

  /*
   *  Return the value given
   */
  return value
}

const handleError = ({ message = 'No error message defined' }) => error(message)

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export const transformObjectSchemaNull = (schema, values, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) => transformNull(schema, values, parentUri, uri)

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export const transformObjectSchemaBoolean = (schema, values, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) => transformBoolean(schema, values, parentUri, uri)

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export const transformObjectSchemaObject = (schema, values, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) => transformObject(schema, values, uri, uri) // uri is parentUri and uri

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export const transformObjectSchemaArray = (schema, values, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) => transformArray(schema, values, uri, uri) // uri is parentUri and uri

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export const transformObjectSchemaNumber = (schema, values, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) => transformNumber(schema, values, parentUri, uri)

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export const transformObjectSchemaString = (schema, values, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) => transformString(schema, values, parentUri, uri)

export function transformObjectSchema (schema = {}, values = {}, params = {}) {
  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformObjectSchemaNull(schema, values, params)

    case 'boolean':
      return transformObjectSchemaBoolean(schema, values, params)

    case 'object':
      return transformObjectSchemaObject(schema, values, params)

    case 'array':
      return transformObjectSchemaArray(schema, values, params)

    case 'number':
      return transformObjectSchemaNumber(schema, values, params)

    case 'string':
      return transformObjectSchemaString(schema, values, params)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export const transformArraySchemaNull = (schema, values, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) => transformNull(schema, values, parentUri, uri)

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export const transformArraySchemaBoolean = (schema, values, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) => transformBoolean(schema, values, parentUri, uri)

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export const transformArraySchemaObject = (schema, values, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) => transformObject(schema, values, uri, uri) // uri is parentUri and uri

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export const transformArraySchemaArray = (schema, values, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) => transformArray(schema, values, uri, uri) // uri is parentUri and uri

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export const transformArraySchemaNumber = (schema, values, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) => transformNumber(schema, values, parentUri, uri)

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export const transformArraySchemaString = (schema, values, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) => transformString(schema, values, parentUri, uri)

export function transformArraySchema (schema = {}, values = {}, params = {}) {
  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformArraySchemaNull(schema, values, params)

    case 'boolean':
      return transformArraySchemaBoolean(schema, values, params)

    case 'object':
      return transformArraySchemaObject(schema, values, params)

    case 'array':
      return transformArraySchemaArray(schema, values, params)

    case 'number':
      return transformArraySchemaNumber(schema, values, params)

    case 'string':
      return transformArraySchemaString(schema, values, params)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

export function transformNull (schema, values, parentUri, uri) {
  if (Reflect.has(values, uri)) {
    const value = Reflect.get(values, uri)

    if (hasEnum(schema)) {
      const items = getEnum(schema)

      return transformValueFor(value, items)
    } else {
      if (hasAnyOf(schema)) {
        const items = getAnyOf(schema)

        return transformValueFor(value, items)
      } else {
        if (hasOneOf(schema)) {
          const items = getOneOf(schema)

          return transformValueFor(value, items)
        }
      }
    }

    try {
      return toNull(value)
    } catch (e) {
      handleError(e)
    }

    return value
  }
}

export function transformBoolean (schema, values, parentUri, uri) {
  if (Reflect.has(values, uri)) {
    const value = Reflect.get(values, uri)

    if (hasEnum(schema)) {
      const items = getEnum(schema)

      return transformValueFor(value, items)
    } else {
      if (hasAnyOf(schema)) {
        const items = getAnyOf(schema)

        return transformValueFor(value, items)
      } else {
        if (hasOneOf(schema)) {
          const items = getOneOf(schema)

          return transformValueFor(value, items)
        }
      }
    }

    try {
      return toBoolean(value)
    } catch (e) {
      handleError(e)
    }

    return value
  }
}

export function transformObject ({ properties = {} /* object */ }, values, parentUri, uri) {
  return (
    Object
      .entries(properties)
      .reduce((accumulator, [key, schema]) => ({ ...accumulator, [key]: transformObjectSchema(schema, values, { uri: parentUri, key }) }), {})
  )
}

export function transformArray ({ items = [] /* array or object */ }, values, parentUri, uri) {
  return (
    Object
      .keys(values)
      .filter((key) => key.startsWith(uri))
      .reduce((accumulator, key) => {
        const value = uri.endsWith('/') ? key.slice(uri.length) : key.slice(uri.length + 1)
        const index = Number(value.includes('/') ? value.slice(0, value.indexOf('/')) : value)

        if (!isNaN(index)) {
          const schema = Array.isArray(items) ? items[index] : items

          accumulator[index] = transformArraySchema(schema, values, { uri: parentUri, index })
        }

        return accumulator
      }, [])
  )
}

export function transformNumber (schema, values, parentUri, uri) {
  if (Reflect.has(values, uri)) {
    const value = Reflect.get(values, uri)

    if (hasEnum(schema)) {
      const items = getEnum(schema)

      return transformValueFor(value, items)
    } else {
      if (hasAnyOf(schema)) {
        const items = getAnyOf(schema)

        return transformValueFor(value, items)
      } else {
        if (hasOneOf(schema)) {
          const items = getOneOf(schema)

          return transformValueFor(value, items)
        }
      }
    }

    try {
      return toNumber(value)
    } catch (e) {
      handleError(e)
    }

    return value
  }
}

export function transformString (schema, values, parentUri, uri) {
  if (Reflect.has(values, uri)) {
    const value = Reflect.get(values, uri)

    if (hasEnum(schema)) {
      const items = getEnum(schema)

      return transformValueFor(value, items)
    } else {
      if (hasAnyOf(schema)) {
        const items = getAnyOf(schema)

        return transformValueFor(value, items)
      } else {
        if (hasOneOf(schema)) {
          const items = getOneOf(schema)

          return transformValueFor(value, items)
        }
      }
    }

    try {
      return toString(value)
    } catch (e) {
      handleError(e)
    }

    return value
  }
}

export default function transform (rootSchema = {}, values = {}, parentUri = '#', uri = getUri(parentUri)) {
  log('fromHashToDocument')

  const { type } = rootSchema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformNull(rootSchema, values, parentUri, uri)

    case 'boolean':
      return transformBoolean(rootSchema, values, parentUri, uri)

    case 'object':
      return transformObject(rootSchema, values, parentUri, uri)

    case 'array':
      return transformArray(rootSchema, values, parentUri, uri)

    case 'number':
      return transformNumber(rootSchema, values, parentUri, uri)

    case 'string':
      return transformString(rootSchema, values, parentUri, uri)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}
