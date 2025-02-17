import debug from 'debug'

import equal from 'fast-deep-equal'

const log = debug('shinkansen-transmission/transmission/common')

log('`shinkansen` is awake')

export const isObject = (v) => (v || false) instanceof Object && !isArray(v)

export const isArray = (v) => Array.isArray(v)

export const isPrimitive = (v) => !isObject(v) && !isArray(v)

export const isSchema = (v = {}) => Reflect.has(v, 'type')

export const isStringSchema = ({ type } = {}) => type === 'string'

export const isNumberSchema = ({ type } = {}) => type === 'number'

export const isArraySchema = ({ type } = {}) => type === 'array'

export const isObjectSchema = ({ type } = {}) => type === 'object'

export const isBooleanSchema = ({ type } = {}) => type === 'boolean'

export const isNullSchema = ({ type } = {}) => type === 'null'

export const getTitle = ({ title } = {}) => (title ? { title } : {})

export const getDescription = ({ description } = {}) => (description ? { description } : {})

export const getIsReadOnly = ({ readOnly = false } = {}) => (readOnly ? { readOnly } : {})

export const getIsWriteOnly = ({ writeOnly = false } = {}) => (writeOnly ? { writeOnly } : {})

const getUriForRegExp = (uri) => uri.endsWith('/') ? uri : uri.concat('/')

export function getSelectedItems (values = {}, uri = '#') {
  const u = normaliseUri(uri)

  if (Reflect.has(values, u)) {
    const v = Reflect.get(values, u)

    // transformByKeyForEnum
    // transformByKeyForAnyOf
    // transformByKeyForOneOf

    if (isPrimitive(v)) {
      const n = Number(v)

      return isNaN(n)
        ? [v]
        : [n]
    }

    return v.map((v) => {
      const n = Number(v)

      return isNaN(n)
        ? v
        : n
    })
  }

  // transformByKeyForEnum
  // transformByKeyForAnyOf
  // transformByKeyForOneOf

  /*
   *  Given the uri `#/`
   *
   *  Get the values `#/n` (where `n` is a number)
   */
  const pattern = new RegExp(`^${getUriForRegExp(u)}\\d+$`)

  return (
    Object
      .entries(values)
      .filter(([key]) => pattern.test(key)) // uri
      .map(([key, value]) => {
        const i = Number(key.slice(key.lastIndexOf('/') + 1))
        const v = isArray(value) ? value[i] : value
        const n = Number(v)

        if (!isNaN(n)) return n
        return v
      })
  )
}

export function isParentUri (parentUri = '#', uri = '#') {
  return (
    parentUri !== '#' &&
    parentUri !== uri
  )
}

export function getMetaProps (params = {}, uri = '#') {
  let meta
  if (Reflect.has(params, uri)) {
    ({
      meta
    } = Reflect.get(params, uri))
  }

  return meta || {}
}

export function getMetaDefaultValue (schema = {}) {
  if (Reflect.has(schema, 'default')) {
    const defaultValue = Reflect.get(schema, 'default')

    return { defaultValue: String(defaultValue) }
  }

  return {}
}

export function hasMetaValue (values = {}, uri = '#', schema = {}) {
  if (Reflect.has(values, uri)) {
    const value = Reflect.get(values, uri)

    return isPrimitive(value)
  }

  if (Reflect.has(schema, 'const')) {
    const constValue = Reflect.get(schema, 'const')

    return isPrimitive(constValue)
  }

  return false
}

export function getMetaValue (values = {}, uri = '#', schema = {}) {
  if (Reflect.has(values, uri)) {
    const value = Reflect.get(values, uri)

    if (isPrimitive(value)) {
      return { value: String(value) }
    }
  }

  if (Reflect.has(schema, 'const')) {
    const constValue = Reflect.get(schema, 'const')

    if (isPrimitive(constValue)) {
      return { value: String(constValue) }
    }
  }

  return {}
}

export function transformValue (schema) {
  return (
    isObject(schema)
      ? hasConst(schema)
        ? getConst(schema)
        : hasDefault(schema)
          ? getDefault(schema)
          : schema
      : schema
  )
}

export function findByKey (parentUri, uri) {
  /*
   *  log('findByKey')
   */
  return function find (key) {
    /*
     *  log('find')
     */
    return getUri(parentUri, key) === uri
  }
}

export function findByIndex (parentUri, uri) {
  /*
   *  log('findByIndex')
   */
  return function find (schema, index) {
    /*
     *  log('find')
     */
    if (hasEnum(schema)) {
      return getUri(parentUri, index) === uri
    }

    if (hasAnyOf(schema)) {
      const array = getAnyOf(schema)

      return array.find(findByIndex(parentUri, uri))
    }

    if (hasOneOf(schema)) {
      const array = getOneOf(schema)

      return array.find(findByIndex(parentUri, uri))
    }

    return getUri(parentUri, index) === uri
  }
}

export function findByValue (value) {
  /*
   *  log('findByValue')
   */
  return function find (schema) {
    /*
     *  log('find')
     */
    return value === transformValue(schema)
  }
}

export function findByEqual (value) {
  /*
   *  log('findByEqual')
   */
  return function find (schema) {
    /*
     *  log('find')
     */
    return equal(value, transformValue(schema))
  }
}

export function toString (value) {
  /*
   *  log('toString')
   */
  return (value !== undefined) ? String(value) : ''
}

export function getObject ({ properties = {} /* object */ } = {}, parentUri = '', uri = '') {
  /*
   *  log('getObject')
   */
  return (
    Reflect.get(properties, (
      Object.keys(properties)
        .find(findByKey(parentUri, uri))
    ))
  )
}

export function getArray ({ items = {} /* array or object */ } = {}, parentUri = '', uri = '') {
  /*
   *  log('getArray')
   */
  return (isArray(items))
    ? items.find(findByIndex(parentUri, uri))
    : items
}

export function getSchema (schema = {}, parentUri = '', uri = '') {
  /*
   *  log('getSchema')
   */
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

export function transformValueIndexFor (array, value) {
  /*
   *  log('transformValueIndexFor')
   */
  const find = findByValue(value)

  if (array.some(find)) {
    const index = array.findIndex(find)

    /*
     *  Transform a number to a string
     */
    return String(index)
  }

  /*
   *  Takes the place of `toString(document)` in `transform()`
   */
  return toString(value)
}

export function transformEqualIndexFor (array, value) {
  /*
   *  log('transformEqualIndexFor')
   */
  const find = findByEqual(value)

  if (array.some(find)) {
    const index = array.findIndex(find)

    /*
     *  Transform a number to a string
     */
    return String(index)
  }

  /*
   *  Takes the place of `toString(document)` in `transform()`
   */
  return toString(value)
}

export function hasValue (values = {}, uri = '#', schema = {}) {
  if (Reflect.has(values, uri)) {
    const value = Reflect.get(values, uri)

    return isPrimitive(value)
  }

  if (Reflect.has(schema, 'const')) {
    const constValue = Reflect.get(schema, 'const')

    return isPrimitive(constValue)
  }

  return false
}

export function getValue (values = {}, uri = '#', schema = {}) {
  if (Reflect.has(values, uri)) {
    const value = Reflect.get(values, uri)

    if (isPrimitive(value)) {
      return String(value)
    }
  }

  if (Reflect.has(schema, 'const')) {
    const constValue = Reflect.get(schema, 'const')

    if (isPrimitive(constValue)) {
      return String(constValue)
    }
  }
}

export function getValueForEnum (v, { enum: items = [] } = {}) {
  if (Reflect.has(items, v)) {
    const enumValue = Reflect.get(items, v)

    return String(enumValue)
  }
}

/*
 *  Use `index` `item` `arrayIndex`
 */
export function getIndexForEnum (values = {}, parentUri = '#', uri = '#', schema = {}) {
  if (/\/\d+$/.test(uri)) {
    /*
     *  Get the index
     */
    return Number(uri.slice(uri.lastIndexOf('/') + 1))
  }

  return NaN
}

export function getValueForAnyOf (v, { anyOf: items = [] } = {}) {
  if (Reflect.has(items, v)) {
    const anyOf = Reflect.get(items, v)

    const anyOfValue = transformValue(anyOf)

    if (isPrimitive(anyOfValue)) {
      return String(anyOfValue)
    }
  }
}

/*
 *  Use `index` `item` `arrayIndex`
 */
export function getIndexForAnyOf (values = {}, parentUri = '#', uri = '#', schema = {}) {
  if (/\/\d+$/.test(uri)) {
    /*
     *  Get the index
     */
    return Number(uri.slice(uri.lastIndexOf('/') + 1))
  }

  return NaN
}

export function getValueForOneOf (v, { oneOf: items = [] } = {}) {
  if (Reflect.has(items, v)) {
    const oneOf = Reflect.get(items, v)

    const oneOfValue = transformValue(oneOf)

    if (isPrimitive(oneOfValue)) {
      return String(oneOfValue)
    }
  }
}

/*
 *  Use `index` `item` `arrayIndex`
 */
export function getIndexForOneOf (values = {}, parentUri = '#', uri = '#', schema = {}) {
  if (/\/\d+$/.test(uri)) {
    /*
     *  Get the index
     */
    return Number(uri.slice(uri.lastIndexOf('/') + 1))
  }

  return NaN
}

export function getElementsProps (params = {}, uri = '#') {
  let elements
  if (Reflect.has(params, uri)) {
    ({
      elements = {}
    } = Reflect.get(params, uri))
  }

  return elements || {}
}

export function getElementsTitleProps (params = {}, uri = '#') {
  let title
  if (Reflect.has(params, uri)) {
    ({
      elements: {
        title
      } = {}
    } = Reflect.get(params, uri))
  }

  return title || {}
}

export function getElementsDescriptionProps (params = {}, uri = '#') {
  let description
  if (Reflect.has(params, uri)) {
    ({
      elements: {
        description
      } = {}
    } = Reflect.get(params, uri))
  }

  return description || {}
}

export function getElementsFieldPropsForEnum (params = {}, uri = '#') {
  let field
  if (Reflect.has(params, uri)) {
    ({
      elements: {
        enum: field
      } = {}
    } = Reflect.get(params, uri))
  }

  return field || {}
}

export function getElementsFieldPropsForOneOf (params = {}, uri = '#') {
  let field
  if (Reflect.has(params, uri)) {
    ({
      elements: {
        oneOf: field
      } = {}
    } = Reflect.get(params, uri))
  }

  return field || {}
}

export function getElementsFieldPropsForAnyOf (params = {}, uri = '#') {
  let field
  if (Reflect.has(params, uri)) {
    ({
      elements: {
        anyOf: field
      } = {}
    } = Reflect.get(params, uri))
  }

  return field || {}
}

export function getElementsFieldPropsForAllOf (params = {}, uri = '#') {
  let field
  if (Reflect.has(params, uri)) {
    ({
      elements: {
        field
      } = {}
    } = Reflect.get(params, uri))
  }

  return field || {}
}

export function getElementsFieldProps (params = {}, uri = '#') {
  let field
  if (Reflect.has(params, uri)) {
    ({
      elements: {
        field
      } = {}
    } = Reflect.get(params, uri))
  }

  return field || {}
}

export function getElementsFieldValue (values = {}, uri = '#', schema = {}) {
  if (Reflect.has(values, uri)) {
    const value = Reflect.get(values, uri)

    if (isPrimitive(value)) {
      return { value: String(value) }
    }
  }

  if (Reflect.has(schema, 'const')) {
    const constValue = Reflect.get(schema, 'const')

    if (isPrimitive(constValue)) {
      return { value: String(constValue) }
    }
  }

  if (Reflect.has(schema, 'default')) {
    const defaultValue = Reflect.get(schema, 'default')

    if (isPrimitive(defaultValue)) {
      return { value: String(defaultValue) }
    }
  }

  return {}
}

export const hasEnum = (schema = {}) => Reflect.has(schema, 'enum')
export const getEnum = (schema = {}) => Reflect.get(schema, 'enum')

export const hasConst = (schema = {}) => Reflect.has(schema, 'const')
export const getConst = (schema = {}) => Reflect.get(schema, 'const')

export const hasDefault = (schema = {}) => Reflect.has(schema, 'default')
export const getDefault = (schema = {}) => Reflect.get(schema, 'default')

export const hasAnyOf = (schema = {}) => Reflect.has(schema, 'anyOf')
export const getAnyOf = (schema = {}) => Reflect.get(schema, 'anyOf')

export const hasOneOf = (schema = {}) => Reflect.has(schema, 'oneOf')
export const getOneOf = (schema = {}) => Reflect.get(schema, 'oneOf')

export const hasAllOf = (schema = {}) => Reflect.has(schema, 'allOf')
export const getAllOf = (schema = {}) => Reflect.get(schema, 'allOf')

export const getUri = (uri = '#', resource = '') => (uri.endsWith('/') ? uri : uri.concat('/')).concat(resource)

export const normaliseUri = (uri = '#') => uri === '#' ? '#/' : uri

export function getMin ({ minimum } = {}) {
  const value = Number(minimum)

  return isNaN(value) ? {} : { min: value }
}

export function getMax ({ maximum } = {}) {
  const value = Number(maximum)

  return isNaN(value) ? {} : { max: value }
}

export function getMinLength ({ minLength } = {}) {
  const value = Number(minLength)

  return isNaN(value) ? {} : { minLength: value }
}

export function getMaxLength ({ maxLength } = {}) {
  const value = Number(maxLength)

  return isNaN(value) ? {} : { maxLength: value }
}

export function getMinItems ({ minItems } = {}) {
  const value = Number(minItems)

  return isNaN(value) ? {} : { minItems: value }
}

export function getMaxItems ({ maxItems } = {}) {
  const value = Number(maxItems)

  return isNaN(value) ? {} : { maxItems: value }
}

export function getHasUniqueItems (schema = {}) {
  if (Reflect.has(schema, 'uniqueItems')) {
    const value = Reflect.get(schema, 'uniqueItems')

    return (typeof value === 'boolean') ? { hasUniqueItems: value } : {}
  }

  return {}
}

export function getMinContains ({ minContains } = {}) {
  const value = Number(minContains)

  return isNaN(value) ? {} : { minContains: value }
}

export function getMaxContains ({ maxContains } = {}) {
  const value = Number(maxContains)

  return isNaN(value) ? {} : { maxContains: value }
}

export function getMinProperties ({ minProperties } = {}) {
  const value = Number(minProperties)

  return isNaN(value) ? {} : { minProperties: value }
}

export function getMaxProperties ({ maxProperties } = {}) {
  const value = Number(maxProperties)

  return isNaN(value) ? {} : { maxProperties: value }
}

export function getIsExclusiveMin (schema = {}) {
  if (Reflect.has(schema, 'exclusiveMinimum')) {
    const value = Reflect.get(schema, 'exclusiveMinimum')

    return (typeof value === 'boolean') ? { isExclusiveMin: value } : {}
  }

  return {}
}

export function getIsExclusiveMax (schema = {}) {
  if (Reflect.has(schema, 'exclusiveMaximum')) {
    const value = Reflect.get(schema, 'exclusiveMaximum')

    return (typeof value === 'boolean') ? { isExclusiveMax: value } : {}
  }

  return {}
}

export const getPattern = ({ pattern } = {}) => (pattern ? { pattern } : {})

export function getStep ({ multipleOf } = {}) {
  const value = Number(multipleOf)

  return isNaN(value) ? {} : { step: value }
}
