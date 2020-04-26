import debug from 'debug'

import {
  isArray,
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

export function getArrayFor (array = [], values, uri) {
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

export function transformArrayFor ({ items = {} }, values, parentUri, uri) {
  /*
   *  log('transformArrayFor')
   */
  if (isArray(items)) {
    return transformItemsArrayFor(items, values, parentUri, uri)
  } else {
    if (isObject(items)) {
      return transformItemsObjectFor(items, values, parentUri, uri)
    }
  }
}

export function transformObjectFor ({ properties = {} }, values, parentUri, uri) {
  /*
   *  log('transformObjectFor')
   */
  return (
    Object
      .entries(properties)
      .reduce((accumulator, [key, schema]) => {
        const schemaUri = getUri(parentUri, key)

        return ({ ...accumulator, [key]: transform(schema, values, schemaUri, schemaUri) })
      }, {})
  )
}

export function transformItemsArrayFor (array = [], values, parentUri, uri) {
  /*
   *  log('transformItemsArrayFor')
   */
  return (
    Object
      .keys(values)
      .filter((key) => key.startsWith(uri))
      .reduce((accumulator, key) => {
        const v = uri.endsWith('/') ? key.slice(uri.length) : key.slice(uri.length + 1)
        const i = v ? Number(v.includes('/') ? v.slice(0, v.indexOf('/')) : v) : NaN

        if (!isNaN(i)) {
          const schemaUri = getUri(parentUri, i)

          accumulator[i] = transform(array[i], values, schemaUri, schemaUri) // items[i]
        }

        return accumulator
      }, [])
  )
}

export function transformItemsObjectFor (object = {}, values, parentUri, uri) {
  /*
   *  log('transformItemsObjectFor')
   */
  return (
    Object
      .keys(values)
      .filter((key) => key.startsWith(uri))
      .reduce((accumulator, key) => {
        const v = uri.endsWith('/') ? key.slice(uri.length) : key.slice(uri.length + 1)
        const i = v ? Number(v.includes('/') ? v.slice(0, v.indexOf('/')) : v) : NaN

        if (!isNaN(i)) {
          const schemaUri = getUri(parentUri, i)

          accumulator[i] = transform(object, values, schemaUri, schemaUri) // items
        }

        return accumulator
      }, [])
  )
}

const handleError = ({ message = 'No error message defined' }) => error(message)

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformObjectSchemaNull (schema, values, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) {
  /*
   *  log('transformObjectSchemaNull')
   */
  return transformNull(schema, values, parentUri, uri)
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformObjectSchemaBoolean (schema, values, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) {
  /*
   *  log('transformObjectSchemaBoolean')
   */
  return transformBoolean(schema, values, parentUri, uri)
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformObjectSchemaObject (schema, values, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) {
  /*
   *  log('transformObjectSchemaObject')
   */
  return transformObject(schema, values, uri, uri) // uri is parentUri and uri
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformObjectSchemaArray (schema, values, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) {
  /*
   *  log('transformObjectSchemaArray')
   */
  return transformArray(schema, values, uri, uri) // uri is parentUri and uri
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformObjectSchemaNumber (schema, values, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) {
  /*
   *  log('transformObjectSchemaNumber')
   */
  return transformNumber(schema, values, parentUri, uri)
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformObjectSchemaString (schema, values, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) {
  /*
   *  log('transformObjectSchemaString')
   */
  return transformString(schema, values, parentUri, uri)
}

export function transformObjectSchema (schema = {}, values = {}, params = {}) {
  /*
   *  log('transformObjectSchema')
   */
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
export function transformArraySchemaNull (schema, values, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) {
  /*
   *  log('transformArraySchemaNull')
   */
  return transformNull(schema, values, parentUri, uri)
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformArraySchemaBoolean (schema, values, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) {
  /*
   *  log('transformArraySchemaBoolean')
   */
  return transformBoolean(schema, values, parentUri, uri)
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformArraySchemaObject (schema, values, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) {
  /*
   *  log('transformArraySchemaObject')
   */
  return transformObject(schema, values, uri, uri) // uri is parentUri and uri
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformArraySchemaArray (schema, values, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) {
  /*
   *  log('transformArraySchemaArray')
   */
  return transformArray(schema, values, uri, uri) // uri is parentUri and uri
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformArraySchemaNumber (schema, values, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) {
  /*
   *  log('transformArraySchemaNumber')
   */
  return transformNumber(schema, values, parentUri, uri)
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformArraySchemaString (schema, values, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) {
  /*
   *  log('transformArraySchemaString')
   */
  return transformString(schema, values, parentUri, uri)
}

export function transformArraySchema (schema = {}, values = {}, params = {}) {
  /*
   *  log('transformArraySchema')
   */
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
  /*
   *  log('transformNull (1)')
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

    /*
     *  log('transformNull (2)')
     */
    try {
      if (isArray(value)) return value.map(toNull)
      return toNull(value)
    } catch (e) {
      handleError(e)
    }

    return value
  }
}

export function transformBoolean (schema, values, parentUri, uri) {
  /*
   *  log('transformBoolean (1)')
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

    /*
     *  log('transformBoolean (2)')
     */
    try {
      if (isArray(value)) return value.map(toBoolean)
      return toBoolean(value)
    } catch (e) {
      handleError(e)
    }

    return value
  }
}

export function transformObject (schema, values, parentUri, uri) {
  log('transformObject (1)')

  if (hasEnum(schema)) {
    const array = getEnum(schema)

    return getArrayFor(array, values, uri)
  } else {
    if (hasAnyOf(schema)) {
      const array = getAnyOf(schema)

      return getArrayFor(array, values, uri)
    } else {
      if (hasOneOf(schema)) {
        const array = getOneOf(schema)

        return getArrayFor(array, values, uri)
      }
    }
  }

  log('transformObject (2)')

  return transformObjectFor(schema, values, parentUri, uri)
}

export function transformArray (schema, values, parentUri, uri) {
  log('transformArray (1)')

  if (hasEnum(schema)) {
    const array = getEnum(schema)

    return getArrayFor(array, values, uri)
  } else {
    if (hasAnyOf(schema)) {
      const array = getAnyOf(schema)

      return getArrayFor(array, values, uri)
    } else {
      if (hasOneOf(schema)) {
        const array = getOneOf(schema)

        return getArrayFor(array, values, uri)
      }
    }
  }

  log('transformArray (2)')

  return transformArrayFor(schema, values, parentUri, uri)
}

export function transformNumber (schema, values, parentUri, uri) {
  log('transformNumber (1)', values)

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

    log('transformNumber (2)')
    try {
      if (isArray(value)) return value.map(toNumber)
      return toNumber(value)
    } catch (e) {
      handleError(e)
    }

    return value
  }
}

export function transformString (schema, values, parentUri, uri) {
  /*
   *  log('transformString (1)')
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

    /*
     *  log('transformString (2)')
     */
    try {
      if (isArray(value)) return value.map(toString)
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
