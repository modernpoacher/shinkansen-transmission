import debug from 'debug'

import {
  isArray,
  isObject,
  isPrimitive,
  hasEnum,
  getEnum,
  hasAnyOf,
  getAnyOf,
  hasOneOf,
  getOneOf,
  getUri,
  transformValue
} from 'shinkansen-transmission/transmission/common'

const log = debug('shinkansen-transmission/from-hash-to-document')

log('`shinkansen` is awake')

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
  if (typeof v === 'boolean') return Number(v)

  if (v) { // excludes zero-length strings
    const n = (
      isPrimitive(v) // excludes objects and arrays
        ? Number(v) // +v // unary operator
        : NaN
    )

    if (!isNaN(n)) return n
  }

  throw new Error('Invalid `number`')
}

const handleError = ({ message = 'No error message defined' }) => { log(message) }

export {
  transformValue
}

export function transformValueFor (document, array) {
  /*
   *  log('transformValueFor')
   */

  try {
    const i = toNumber(document)

    if (Reflect.has(array, i)) {
      const v = Reflect.get(array, i)

      /*
       *  Return the document given from the schema
       */
      return transformValue(v)
    }
  } catch (e) {
    handleError(e)
  }

  /*
   *  Return the document given
   */
  return document
}

export function getArrayFor (hash, array = [], uri = '#') {
  /*
   *  log('getArrayFor')
   */

  if (Reflect.has(hash, uri)) {
    const v = Reflect.get(hash, uri)
    const i = Number(v)

    if (!isNaN(i)) return array[i]
  }

  return []
}

export function transformArrayFor (hash, { items = null } = {}, parentUri = '#', uri = getUri(parentUri)) {
  /*
   *  log('transformArrayFor')
   */

  if (isArray(items)) {
    return transformItemsArrayFor(hash, items, parentUri, uri)
  } else {
    if (isObject(items)) {
      return transformItemsObjectFor(hash, items, parentUri, uri)
    }
  }

  return []
}

export function transformObjectFor (hash, { properties = null } = {}, parentUri = '#', uri = getUri(parentUri)) {
  /*
   *  log('transformObjectFor')
   */

  if (isObject(properties)) {
    return (
      Object
        .entries(properties)
        .reduce((accumulator, [key, schema]) => {
          const schemaUri = getUri(parentUri, key)

          accumulator[key] = transform(hash, schema, schemaUri, schemaUri)

          return accumulator
        }, {})
    )
  }

  return {}
}

export function transformItemsArrayFor (hash, items = [], parentUri = '#', uri = getUri(parentUri)) {
  /*
   *  log('transformItemsArrayFor')
   */

  if (Reflect.has(hash, uri)) {
    const document = Reflect.get(hash, uri)

    if (isArray(document)) {
      return transform(hash, items, uri, uri)
    }
  }

  return (
    Object
      .keys(hash)
      .filter((key) => key.startsWith(uri))
      .reduce((accumulator, key) => {
        const v = uri.endsWith('/') ? key.slice(uri.length) : key.slice(uri.length + 1)
        const i = v ? Number(v.includes('/') ? v.slice(0, v.indexOf('/')) : v) : NaN

        if (!isNaN(i)) {
          const schemaUri = getUri(parentUri, i)

          accumulator[i] = transform(hash, items[i], schemaUri, schemaUri) // items[i]
        }

        return accumulator
      }, [])
  )
}

export function transformItemsObjectFor (hash, items = {}, parentUri = '#', uri = getUri(parentUri)) {
  /*
   *  log('transformItemsObjectFor')
   */

  if (Reflect.has(hash, uri)) {
    const document = Reflect.get(hash, uri)

    if (isArray(document)) {
      return transform(hash, items, uri, uri)
    }
  }

  return (
    Object
      .keys(hash)
      .filter((key) => key.startsWith(uri))
      .reduce((accumulator, key) => {
        const v = uri.endsWith('/') ? key.slice(uri.length) : key.slice(uri.length + 1)
        const i = v ? Number(v.includes('/') ? v.slice(0, v.indexOf('/')) : v) : NaN

        if (!isNaN(i)) {
          const schemaUri = getUri(parentUri, i)

          accumulator[i] = transform(hash, items, schemaUri, schemaUri) // items
        }

        return accumulator
      }, [])
  )
}

export function transformNull (hash, schema, parentUri, uri) {
  /*
   *  log('transformNull')
   */

  if (Reflect.has(hash, uri)) {
    const document = Reflect.get(hash, uri)

    if (hasEnum(schema)) {
      const array = getEnum(schema)

      if (isArray(document)) return document.map((v) => transformValueFor(v, array))
      return transformValueFor(document, array)
    } else {
      if (hasAnyOf(schema)) {
        const array = getAnyOf(schema)

        if (isArray(document)) return document.map((v) => transformValueFor(v, array))
        return transformValueFor(document, array)
      } else {
        if (hasOneOf(schema)) {
          const array = getOneOf(schema)

          if (isArray(document)) return document.map((v) => transformValueFor(v, array))
          return transformValueFor(document, array)
        }
      }
    }

    try {
      if (isArray(document)) return document.map(toNull)
      return toNull(document)
    } catch (e) {
      handleError(e)
    }

    return document
  }
}

export function transformBoolean (hash, schema, parentUri, uri) {
  /*
   *  log('transformBoolean')
   */

  if (Reflect.has(hash, uri)) {
    const document = Reflect.get(hash, uri)

    if (hasEnum(schema)) {
      const array = getEnum(schema)

      if (isArray(document)) return document.map((v) => transformValueFor(v, array))
      return transformValueFor(document, array)
    } else {
      if (hasAnyOf(schema)) {
        const array = getAnyOf(schema)

        if (isArray(document)) return document.map((v) => transformValueFor(v, array))
        return transformValueFor(document, array)
      } else {
        if (hasOneOf(schema)) {
          const array = getOneOf(schema)

          if (isArray(document)) return document.map((v) => transformValueFor(v, array))
          return transformValueFor(document, array)
        }
      }
    }

    try {
      if (isArray(document)) return document.map(toBoolean)
      return toBoolean(document)
    } catch (e) {
      handleError(e)
    }

    return document
  }
}

export function transformObject (hash, schema, parentUri, uri) {
  /*
   *  log('transformObject')
   */

  if (hasEnum(schema)) {
    const array = getEnum(schema)

    return getArrayFor(hash, array, uri)
  } else {
    if (hasAnyOf(schema)) {
      const array = getAnyOf(schema)

      return getArrayFor(hash, array, uri)
    } else {
      if (hasOneOf(schema)) {
        const array = getOneOf(schema)

        return getArrayFor(hash, array, uri)
      }
    }
  }

  return transformObjectFor(hash, schema, parentUri, uri)
}

export function transformArray (hash, schema, parentUri, uri) {
  /*
   *  log('transformArray')
   */

  if (hasEnum(schema)) {
    const array = getEnum(schema)

    return getArrayFor(hash, array, uri)
  } else {
    if (hasAnyOf(schema)) {
      const array = getAnyOf(schema)

      return getArrayFor(hash, array, uri)
    } else {
      if (hasOneOf(schema)) {
        const array = getOneOf(schema)

        return getArrayFor(hash, array, uri)
      }
    }
  }

  return transformArrayFor(hash, schema, parentUri, uri)
}

export function transformNumber (hash, schema, parentUri, uri) {
  /*
   *  log('transformNumber')
   */

  if (Reflect.has(hash, uri)) {
    const document = Reflect.get(hash, uri)

    if (hasEnum(schema)) {
      const array = getEnum(schema)

      if (isArray(document)) return document.map((v) => transformValueFor(v, array))
      return transformValueFor(document, array)
    } else {
      if (hasAnyOf(schema)) {
        const array = getAnyOf(schema)

        if (isArray(document)) return document.map((v) => transformValueFor(v, array))
        return transformValueFor(document, array)
      } else {
        if (hasOneOf(schema)) {
          const array = getOneOf(schema)

          if (isArray(document)) return document.map((v) => transformValueFor(v, array))
          return transformValueFor(document, array)
        }
      }
    }

    try {
      if (isArray(document)) return document.map(toNumber)
      return toNumber(document)
    } catch (e) {
      handleError(e)
    }

    return document
  }
}

export function transformString (hash, schema, parentUri, uri) {
  /*
   *  log('transformString')
   */

  if (Reflect.has(hash, uri)) {
    const document = Reflect.get(hash, uri)

    if (hasEnum(schema)) {
      const array = getEnum(schema)

      if (isArray(document)) return document.map((v) => transformValueFor(v, array))
      return transformValueFor(document, array)
    } else {
      if (hasAnyOf(schema)) {
        const array = getAnyOf(schema)

        if (isArray(document)) return document.map((v) => transformValueFor(v, array))
        return transformValueFor(document, array)
      } else {
        if (hasOneOf(schema)) {
          const array = getOneOf(schema)

          if (isArray(document)) return document.map((v) => transformValueFor(v, array))
          return transformValueFor(document, array)
        }
      }
    }

    try {
      if (isArray(document)) return document.map(toString)
      return toString(document)
    } catch (e) {
      handleError(e)
    }

    return document
  }
}

export default function transform (hash = {}, rootSchema = {}, parentUri = '#', uri = getUri(parentUri)) {
  log('fromHashToDocument')

  const { type } = rootSchema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformNull(hash, rootSchema, parentUri, uri)

    case 'boolean':
      return transformBoolean(hash, rootSchema, parentUri, uri)

    case 'object':
      return transformObject(hash, rootSchema, parentUri, uri)

    case 'array':
      return transformArray(hash, rootSchema, parentUri, uri)

    case 'number':
      return transformNumber(hash, rootSchema, parentUri, uri)

    case 'string':
      return transformString(hash, rootSchema, parentUri, uri)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}
