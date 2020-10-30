import debug from 'debug'

import {
  isArray,
  isObject,
  isConstValue,
  toConstValue,
  isDefaultValue,
  toDefaultValue,
  hasEnum,
  getEnum,
  hasAnyOf,
  getAnyOf,
  hasOneOf,
  getOneOf,
  getUri
} from 'shinkansen-transmission/transmission/common'

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

export function transformValueFor (value, array) {
  /*
   *  log('transformValueFor')
   */

  try {
    const i = toNumber(value)

    if (Reflect.has(array, i)) {
      const v = Reflect.get(array, i)

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

export function getArrayFor (values, array = [], uri = '') {
  /*
   *  log('getArrayFor')
   */

  if (Reflect.has(values, uri)) {
    const v = Reflect.get(values, uri)
    const i = Number(v)

    if (!isNaN(i)) return array[i]
  }

  return []
}

export function transformArrayFor (values, { items = null } = {}, parentUri = '', uri = '') {
  /*
   *  log('transformArrayFor')
   */

  if (isArray(items)) {
    return transformItemsArrayFor(values, items, parentUri, uri)
  } else {
    if (isObject(items)) {
      return transformItemsObjectFor(values, items, parentUri, uri)
    }
  }

  return []
}

export function transformObjectFor (values, { properties = null } = {}, parentUri = '', uri = '') {
  /*
   *  log('transformObjectFor')
   */

  if (isObject(properties)) {
    return (
      Object
        .entries(properties)
        .reduce((accumulator, [key, schema]) => {
          const schemaUri = getUri(parentUri, key)

          return ({ ...accumulator, [key]: transform(values, schema, schemaUri, schemaUri) })
        }, {})
    )
  }

  return {}
}

export function transformItemsArrayFor (values, items = [], parentUri = '', uri = '') {
  /*
   *  log('transformItemsArrayFor')
   */

  if (Reflect.has(values, uri)) {
    const value = Reflect.get(values, uri)

    if (isArray(value)) {
      return transform(values, items, uri, uri)
    }
  }

  return (
    Object
      .keys(values)
      .filter((key) => key.startsWith(uri))
      .reduce((accumulator, key) => {
        const v = uri.endsWith('/') ? key.slice(uri.length) : key.slice(uri.length + 1)
        const i = v ? Number(v.includes('/') ? v.slice(0, v.indexOf('/')) : v) : NaN

        if (!isNaN(i)) {
          const schemaUri = getUri(parentUri, i)

          accumulator[i] = transform(values, items[i], schemaUri, schemaUri) // items[i]
        }

        return accumulator
      }, [])
  )
}

export function transformItemsObjectFor (values, items = {}, parentUri = '', uri = '') {
  /*
   *  log('transformItemsObjectFor')
   */

  if (Reflect.has(values, uri)) {
    const value = Reflect.get(values, uri)

    if (isArray(value)) {
      return transform(values, items, uri, uri)
    }
  }

  return (
    Object
      .keys(values)
      .filter((key) => key.startsWith(uri))
      .reduce((accumulator, key) => {
        const v = uri.endsWith('/') ? key.slice(uri.length) : key.slice(uri.length + 1)
        const i = v ? Number(v.includes('/') ? v.slice(0, v.indexOf('/')) : v) : NaN

        if (!isNaN(i)) {
          const schemaUri = getUri(parentUri, i)

          accumulator[i] = transform(values, items, schemaUri, schemaUri) // items
        }

        return accumulator
      }, [])
  )
}

const handleError = ({ message = 'No error message defined' }) => error(message)

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformObjectSchemaNull (values, schema, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) {
  /*
   *  log('transformObjectSchemaNull')
   */

  return transformNull(values, schema, parentUri, uri)
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformObjectSchemaBoolean (values, schema, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) {
  /*
   *  log('transformObjectSchemaBoolean')
   */

  return transformBoolean(values, schema, parentUri, uri)
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformObjectSchemaObject (values, schema, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) {
  /*
   *  log('transformObjectSchemaObject')
   */

  return transformObject(values, schema, uri, uri) // uri is parentUri and uri
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformObjectSchemaArray (values, schema, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) {
  /*
   *  log('transformObjectSchemaArray')
   */

  return transformArray(values, schema, uri, uri) // uri is parentUri and uri
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformObjectSchemaNumber (values, schema, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) {
  /*
   *  log('transformObjectSchemaNumber')
   */

  return transformNumber(values, schema, parentUri, uri)
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformObjectSchemaString (values, schema, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) {
  /*
   *  log('transformObjectSchemaString')
   */

  return transformString(values, schema, parentUri, uri)
}

export function transformObjectSchema (values = {}, schema = {}, params = {}) {
  /*
   *  log('transformObjectSchema')
   */

  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformObjectSchemaNull(values, schema, params)

    case 'boolean':
      return transformObjectSchemaBoolean(values, schema, params)

    case 'object':
      return transformObjectSchemaObject(values, schema, params)

    case 'array':
      return transformObjectSchemaArray(values, schema, params)

    case 'number':
      return transformObjectSchemaNumber(values, schema, params)

    case 'string':
      return transformObjectSchemaString(values, schema, params)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformArraySchemaNull (values, schema, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) {
  /*
   *  log('transformArraySchemaNull')
   */

  return transformNull(values, schema, parentUri, uri)
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformArraySchemaBoolean (values, schema, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) {
  /*
   *  log('transformArraySchemaBoolean')
   */

  return transformBoolean(values, schema, parentUri, uri)
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformArraySchemaObject (values, schema, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) {
  /*
   *  log('transformArraySchemaObject')
   */

  return transformObject(values, schema, uri, uri) // uri is parentUri and uri
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformArraySchemaArray (values, schema, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) {
  /*
   *  log('transformArraySchemaArray')
   */

  return transformArray(values, schema, uri, uri) // uri is parentUri and uri
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformArraySchemaNumber (values, schema, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) {
  /*
   *  log('transformArraySchemaNumber')
   */

  return transformNumber(values, schema, parentUri, uri)
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformArraySchemaString (values, schema, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) {
  /*
   *  log('transformArraySchemaString')
   */

  return transformString(values, schema, parentUri, uri)
}

export function transformArraySchema (values = {}, schema = {}, params = {}) {
  /*
   *  log('transformArraySchema')
   */

  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformArraySchemaNull(values, schema, params)

    case 'boolean':
      return transformArraySchemaBoolean(values, schema, params)

    case 'object':
      return transformArraySchemaObject(values, schema, params)

    case 'array':
      return transformArraySchemaArray(values, schema, params)

    case 'number':
      return transformArraySchemaNumber(values, schema, params)

    case 'string':
      return transformArraySchemaString(values, schema, params)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}

export function transformNull (values, schema, parentUri, uri) {
  /*
   *  log('transformNull')
   */

  if (Reflect.has(values, uri)) {
    const value = Reflect.get(values, uri)

    if (hasEnum(schema)) {
      const array = getEnum(schema)

      if (isArray(value)) return value.map((v) => transformValueFor(v, array))
      return transformValueFor(value, array)
    } else {
      if (hasAnyOf(schema)) {
        const array = getAnyOf(schema)

        if (isArray(value)) return value.map((v) => transformValueFor(v, array))
        return transformValueFor(value, array)
      } else {
        if (hasOneOf(schema)) {
          const array = getOneOf(schema)

          if (isArray(value)) return value.map((v) => transformValueFor(v, array))
          return transformValueFor(value, array)
        }
      }
    }

    try {
      if (isArray(value)) return value.map(toNull)
      return toNull(value)
    } catch (e) {
      handleError(e)
    }

    return value
  }
}

export function transformBoolean (values, schema, parentUri, uri) {
  /*
   *  log('transformBoolean')
   */

  if (Reflect.has(values, uri)) {
    const value = Reflect.get(values, uri)

    if (hasEnum(schema)) {
      const array = getEnum(schema)

      if (isArray(value)) return value.map((v) => transformValueFor(v, array))
      return transformValueFor(value, array)
    } else {
      if (hasAnyOf(schema)) {
        const array = getAnyOf(schema)

        if (isArray(value)) return value.map((v) => transformValueFor(v, array))
        return transformValueFor(value, array)
      } else {
        if (hasOneOf(schema)) {
          const array = getOneOf(schema)

          if (isArray(value)) return value.map((v) => transformValueFor(v, array))
          return transformValueFor(value, array)
        }
      }
    }

    try {
      if (isArray(value)) return value.map(toBoolean)
      return toBoolean(value)
    } catch (e) {
      handleError(e)
    }

    return value
  }
}

export function transformObject (values, schema, parentUri, uri) {
  /*
   *  log('transformObject')
   */

  if (hasEnum(schema)) {
    const array = getEnum(schema)

    return getArrayFor(values, array, uri)
  } else {
    if (hasAnyOf(schema)) {
      const array = getAnyOf(schema)

      return getArrayFor(values, array, uri)
    } else {
      if (hasOneOf(schema)) {
        const array = getOneOf(schema)

        return getArrayFor(values, array, uri)
      }
    }
  }

  return transformObjectFor(values, schema, parentUri, uri)
}

export function transformArray (values, schema, parentUri, uri) {
  /*
   *  log('transformArray')
   */

  if (hasEnum(schema)) {
    const array = getEnum(schema)

    return getArrayFor(values, array, uri)
  } else {
    if (hasAnyOf(schema)) {
      const array = getAnyOf(schema)

      return getArrayFor(values, array, uri)
    } else {
      if (hasOneOf(schema)) {
        const array = getOneOf(schema)

        return getArrayFor(values, array, uri)
      }
    }
  }

  return transformArrayFor(values, schema, parentUri, uri)
}

export function transformNumber (values, schema, parentUri, uri) {
  /*
   *  log('transformNumber')
   */

  if (Reflect.has(values, uri)) {
    const value = Reflect.get(values, uri)

    if (hasEnum(schema)) {
      const array = getEnum(schema)

      if (isArray(value)) return value.map((v) => transformValueFor(v, array))
      return transformValueFor(value, array)
    } else {
      if (hasAnyOf(schema)) {
        const array = getAnyOf(schema)

        if (isArray(value)) return value.map((v) => transformValueFor(v, array))
        return transformValueFor(value, array)
      } else {
        if (hasOneOf(schema)) {
          const array = getOneOf(schema)

          if (isArray(value)) return value.map((v) => transformValueFor(v, array))
          return transformValueFor(value, array)
        }
      }
    }

    try {
      if (isArray(value)) return value.map(toNumber)
      return toNumber(value)
    } catch (e) {
      handleError(e)
    }

    return value
  }
}

export function transformString (values, schema, parentUri, uri) {
  /*
   *  log('transformString')
   */

  if (Reflect.has(values, uri)) {
    const value = Reflect.get(values, uri)

    if (hasEnum(schema)) {
      const array = getEnum(schema)

      if (isArray(value)) return value.map((v) => transformValueFor(v, array))
      return transformValueFor(value, array)
    } else {
      if (hasAnyOf(schema)) {
        const array = getAnyOf(schema)

        if (isArray(value)) return value.map((v) => transformValueFor(v, array))
        return transformValueFor(value, array)
      } else {
        if (hasOneOf(schema)) {
          const array = getOneOf(schema)

          if (isArray(value)) return value.map((v) => transformValueFor(v, array))
          return transformValueFor(value, array)
        }
      }
    }

    try {
      if (isArray(value)) return value.map(toString)
      return toString(value)
    } catch (e) {
      handleError(e)
    }

    return value
  }
}

export default function transform (values = {}, rootSchema = {}, parentUri = '#', uri = getUri(parentUri)) {
  log('fromHashToDocument')

  const { type } = rootSchema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformNull(values, rootSchema, parentUri, uri)

    case 'boolean':
      return transformBoolean(values, rootSchema, parentUri, uri)

    case 'object':
      return transformObject(values, rootSchema, parentUri, uri)

    case 'array':
      return transformArray(values, rootSchema, parentUri, uri)

    case 'number':
      return transformNumber(values, rootSchema, parentUri, uri)

    case 'string':
      return transformString(values, rootSchema, parentUri, uri)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}
