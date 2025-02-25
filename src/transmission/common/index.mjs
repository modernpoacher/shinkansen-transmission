/**
 *  @typedef {TransmissionTypes.ObjectLiteralType} ObjectLiteralType
 *  @typedef {TransmissionTypes.ObjectType} ObjectType
 *
 *  @typedef {TransmissionTypes.ItemsType} ItemsType
 *
 *  @typedef {TransmissionTypes.Transmission.StringMetaType} TransmissionStringMetaType
 *  @typedef {TransmissionTypes.Transmission.NumberMetaType} TransmissionNumberMetaType
 *  @typedef {TransmissionTypes.Transmission.ArrayMetaType} TransmissionArrayMetaType
 *  @typedef {TransmissionTypes.Transmission.ObjectMetaType} TransmissionObjectMetaType
 *  @typedef {TransmissionTypes.Transmission.BooleanMetaType} TransmissionBooleanMetaType
 *  @typedef {TransmissionTypes.Transmission.NullMetaType} TransmissionNullMetaType
 *
 *  @typedef {TransmissionTypes.Transmission.StringElementsType} TransmissionStringElementsType
 *  @typedef {TransmissionTypes.Transmission.NumberElementsType} TransmissionNumberElementsType
 *  @typedef {TransmissionTypes.Transmission.ArrayElementsType} TransmissionArrayElementsType
 *  @typedef {TransmissionTypes.Transmission.ObjectElementsType} TransmissionObjectElementsType
 *  @typedef {TransmissionTypes.Transmission.BooleanElementsType} TransmissionBooleanElementsType
 *  @typedef {TransmissionTypes.Transmission.NullElementsType} TransmissionNullElementsType
 *
 *  @typedef {TransmissionTypes.EnumType} EnumType
 *  @typedef {TransmissionTypes.AnyOfType} AnyOfType
 *  @typedef {TransmissionTypes.OneOfType} OneOfType
 *  @typedef {TransmissionTypes.FieldType} FieldType
 *
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *
 *  @typedef {TransmissionTypes.StringSchemaType} StringSchemaType
 *  @typedef {TransmissionTypes.NumberSchemaType} NumberSchemaType
 *  @typedef {TransmissionTypes.ArraySchemaType} ArraySchemaType
 *  @typedef {TransmissionTypes.ObjectSchemaType} ObjectSchemaType
 *  @typedef {TransmissionTypes.BooleanSchemaType} BooleanSchemaType
 *  @typedef {TransmissionTypes.NullSchemaType} NullSchemaType
 *
 *  @typedef {TransmissionTypes.ValuesType} ValuesType
 *  @typedef {TransmissionTypes.ParamsType} ParamsType
 */

import debug from 'debug'

import equal from 'fast-deep-equal'

const log = debug('shinkansen-transmission/transmission/common')

log('`shinkansen` is awake')

/**
 *  @param {unknown} [v]
 *  @returns {v is (Record<PropertyKey, string | number | object | boolean | null | string[] | number[] | object[] | boolean[] | null[]> | Record<PropertyKey, never>)}
 */
export const isObject = (v) => (v || false) instanceof Object && !isArray(v)

/**
 *  @param {unknown} [v]
 *  @returns {v is (string[] | number[] | object[] | boolean[] | null[])} //  | SchemaType)[]}
 */
export const isArray = (v) => Array.isArray(v)

/**
 *  @param {unknown} [v]
 *  @returns {v is (string | number | boolean | null)}
 */
export const isPrimitive = (v) => !isObject(v) && !isArray(v)

/**
 *  @param {SchemaType | object} [v]
 *  @returns {v is SchemaType}
 */
export const isSchema = (v = {}) => 'type' in v // Reflect.has(v, 'type')

/**
 *  @param {SchemaType} schema
 *  @returns {schema is StringSchemaType}
 */
export const isStringSchema = ({ type } = {}) => type === 'string'

/**
 *  @param {SchemaType} schema
 *  @returns {schema is NumberSchemaType}
 */
export const isNumberSchema = ({ type } = {}) => type === 'number'

/**
 *  @param {SchemaType} schema
 *  @returns {schema is ArraySchemaType}
 */
export const isArraySchema = ({ type } = {}) => type === 'array'

/**
 *  @param {SchemaType} schema
 *  @returns {schema is ObjectSchemaType}
 */
export const isObjectSchema = ({ type } = {}) => type === 'object'

/**
 *  @param {SchemaType} schema
 *  @returns {schema is BooleanSchemaType}
 */
export const isBooleanSchema = ({ type } = {}) => type === 'boolean'

/**
 *  @param {SchemaType} schema
 *  @returns {schema is NullSchemaType}
 */
export const isNullSchema = ({ type } = {}) => type === 'null'

/**
 *  @param {SchemaType} schema
 *  @returns {{ title: string} | {}}
 */
export const getTitle = ({ title } = {}) => (title ? { title } : {})

/**
 *  @param {SchemaType} schema
 *  @returns {{ description: string} | {}}
 */
export const getDescription = ({ description } = {}) => (description ? { description } : {})

/**
 *  @param {SchemaType} schema
 *  @returns {{ readOnly: boolean } | {}}
 */
export const getIsReadOnly = ({ readOnly = false } = {}) => (readOnly ? { readOnly } : {})

/**
 *  @param {SchemaType} schema
 *  @returns {{ writeOnly: boolean } | {}}
 */
export const getIsWriteOnly = ({ writeOnly = false } = {}) => (writeOnly ? { writeOnly } : {})

/**
 *  @param {string} uri
 *  @returns {string}
 */
const getUriForRegExp = (uri) => uri.endsWith('/') ? uri : uri + '/'

/**
 *  @param {Record<string, string | number | boolean | null | string[] | number[] | boolean[] | null[]>} [values]
 *  @param {string} [uri]
 *  @returns {(
 *    string |
 *    number |
 *    boolean |
 *    null
 *  )[]}
 */
export function getSelectedItems (values = {}, uri = '#') {
  const u = normaliseUri(uri)

  if (u in values) { // if (Reflect.has(values, u)) {
    const v = values[u] // Reflect.get(values, u)

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

        return isNaN(n)
          ? v
          : n
      })
  )
}

/**
 *  @param {string} [parentUri]
 *  @param {string} [uri]
 *  @returns {boolean}
 */
export function isParentUri (parentUri = '#', uri = '#') {
  return (
    parentUri !== '#' &&
    parentUri !== uri
  )
}

/**
 *  @param {ParamsType} [params]
 *  @param {string} [uri]
 *  @returns {TransmissionStringMetaType | TransmissionNumberMetaType | TransmissionArrayMetaType | TransmissionObjectMetaType | TransmissionBooleanMetaType | TransmissionNullMetaType | Record<string, never>}
 */
export function getMetaProps (params = {}, uri = '#') {
  if (uri in params) { // if (Reflect.has(params, uri)) {
    const {
      meta = {}
    } = params[uri] // Reflect.get(params, uri))

    return meta
  }

  return {}
}

/**
 *  @param {SchemaType} [schema]
 *  @returns {boolean}
 */
export function hasMetaDefaultValue (schema = {}) {
  if ('default' in schema) { // if (Reflect.has(schema, 'default') {
    const defaultValue = schema.default // Reflect.get(schema, 'default')

    return isPrimitive(defaultValue)
  }

  return false
}

/**
 *  @param {SchemaType} [schema]
 *  @returns {{ defaultValue: string } | {}}
 */
export function getMetaDefaultValue (schema = {}) {
  if ('default' in schema) { // if (Reflect.has(schema, 'default') {
    const defaultValue = schema.default // Reflect.get(schema, 'default')

    return { defaultValue: String(defaultValue) }
  }

  return {}
}

/**
 *  @param {ValuesType} [values]
 *  @param {string} [uri]
 *  @param {SchemaType} [schema]
 *  @returns {boolean}
 */
export function hasMetaValue (values = {}, uri = '#', schema = {}) {
  if (uri in values) { // Reflect.has(values, uri)) {
    const value = values[uri] // Reflect.get(values, uri)

    return isPrimitive(value)
  }

  if ('const' in schema) { // Reflect.has(schema, 'const')) {
    const constValue = schema.const // Reflect.get(schema, 'const')

    return isPrimitive(constValue)
  }

  return false
}

/**
 *  @param {ValuesType} [values]
 *  @param {string} [uri]
 *  @param {SchemaType} [schema]
 *  @returns {{ value: string } | {}}
 */
export function getMetaValue (values = {}, uri = '#', schema = {}) {
  if (uri in values) { // if (Reflect.has(values, uri)) {
    const value = values[uri] // Reflect.get(values, uri)

    if (isPrimitive(value)) {
      return { value: String(value) }
    }
  }

  if ('const' in schema) { // if (Reflect.has(schema, 'const')) {
    const constValue = schema.const // Reflect.get(schema, 'const')

    if (isPrimitive(constValue)) {
      return { value: String(constValue) }
    }
  }

  return {}
}

/**
 *  @param {string | number | object | boolean | null} [item]
 *  @returns {string | number | object | boolean | null | undefined}
 */
export function transformToValue (item) {
  if (item === undefined) return item

  if (isPrimitive(item)) return item

  if (isArray(item)) return item // .map(transformToValue)

  if (isObject(item)) {
    if (hasConst(item)) {
      return getConst(item)
    } else {
      if (hasDefault(item)) {
        return getDefault(item)
      }
    }

    return item
  }
}

/**
 *  @param {string} parentUri
 *  @param {string} uri
 *  @returns {(key: string | number) => boolean}
 */
export function findByKey (parentUri, uri) {
  /*
   *  log('findByKey')
   */
  return function find (key) {
    /*
     *  log('find')
     */

    return (
      getUri(parentUri, key) === uri
    )
  }
}

/**
 *  @param {string} parentUri
 *  @param {string} uri
 *  @returns {(item: SchemaType, index: number) => boolean}
 */
export function findByIndex (parentUri, uri) {
  /*
   *  log('findByIndex')
   */
  return function find (item, index) {
    /*
     *  log('find')
     */

    /**
     *  It's a schema not a value
     */

    if (hasEnum(item)) {
      /**
       *  Do the `parentUri` and `uri` match?
       */

      return (
        getUri(parentUri, index) === uri
      )
    } else {
      if (hasAnyOf(item)) {
        const array = getAnyOf(item)

        return (
          array.filter(isObject).some(findByIndex(parentUri, uri))
        )
      } else {
        if (hasOneOf(item)) {
          const array = getOneOf(item)

          return (
            array.filter(isObject).some(findByIndex(parentUri, uri))
          )
        }
      }
    }

    /**
     *  It's any other kind of schema/sub-schema
     */

    return (
      getUri(parentUri, index) === uri
    )
  }
}

/**
 *  @param {string | number | object | boolean | null} [value]
 *  @returns {(item?: string | number | object | boolean | null | string[] | number[] | object[] | boolean[] | null[]) => boolean}
 */
export function findByValue (value) {
  /*
   *  log('findByValue')
   */
  return function find (item) {
    /*
     *  log('find')
     */

    return (
      value === transformToValue(item)
    )
  }
}

/**
 *  @param {string | number | object | boolean | null} [value]
 *  @returns {(item?: string | number | object | boolean | null | string[] | number[] | object[] | boolean[] | null[]) => boolean}
 */
export function findByEqual (value) {
  /*
   *  log('findByEqual')
   */
  return function find (item) {
    /*
     *  log('find')
     */
    return equal(value, transformToValue(item))
  }
}

/**
 *  @param {string | number | object | boolean | null} [value]
 *  @returns {string}
 */
export function toString (value) {
  /*
   *  log('toString')
   */
  return (value !== undefined) ? String(value) : ''
}

/**
 *  @param {{ items?: SchemaType | SchemaType[] }} [schema]
 *  @param {string} parentUri
 *  @param {string} uri
 *  @returns {SchemaType | undefined}
 */
export function getArray ({ items /* array or object */ } = {}, parentUri = '', uri = '') {
  /*
   *  log('getArray')
   */

  if (isArray(items)) {
    const find = findByIndex(parentUri, uri)

    return (
      items.find(find)
    )
  }

  if (isObject(items)) return items

  return undefined
}

/**
 *  @param {{ properties?: Record<string, SchemaType> }} [schema]
 *  @param {string} [parentUri]
 *  @param {string} [uri]
 *  @returns {SchemaType | undefined}
 */
export function getObject ({ properties /* object */ } = {}, parentUri = '', uri = '') {
  /*
   *  log('getObject')
   */

  if (isObject(properties)) {
    const find = findByKey(parentUri, uri)
    const key = Object.keys(properties).find(find)

    if (key) {
      return (
        properties[key]
      )
    }
  }

  return undefined
}

/**
 *  @overload
 *  @param {(
 *    StringSchemaType |
 *    NumberSchemaType |
 *    ArraySchemaType |
 *    ObjectSchemaType |
 *    BooleanSchemaType |
 *    NullSchemaType
 *  )} schema
 *  @param {string} [parentUri]
 *  @param {string} [uri]
 *  @returns {SchemaType | undefined}
 *
 *
 *  @param {*} [schema]
 *  @param {string} [parentUri]
 *  @param {string} [uri]
 *  @returns {* | undefined}
 */
export function getSchema (schema = {}, parentUri = '', uri = '') {
  /*
   *  log('getSchema')
   */

  const {
    type
  } = schema

  switch (type) {
    case 'array':
      return getArray(schema, parentUri, uri)

    case 'object':
      return getObject(schema, parentUri, uri)

    default:
      return schema
  }
}

/**
 *  @param {string[] | number[] | object[] | boolean[] | null[]} array
 *  @param {string | number | object | boolean | null} [value]
 *  @returns {string}
 */
export function transformValueIndexFor (array, value) {
  /*
   *  log('transformEqualIndexFor')
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

/**
 *  @param {string[] | number[] | object[] | boolean[] | null[]} array
 *  @param {string | number | object | boolean | null} [value]
 *  @returns {string}
 */
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

/**
 *  @param {ValuesType} [values]
 *  @param {string} [uri]
 *  @param {SchemaType} [schema]
 *  @returns {boolean}
 */
export function hasValue (values = {}, uri = '#', schema = {}) {
  if (uri in values) { // if (Reflect.has(values, uri)) {
    const value = values[uri] // Reflect.get(values, uri)

    return isPrimitive(value)
  }

  if ('const' in schema) { // if (Reflect.has(schema, 'const')) {
    const constValue = schema.const // Reflect.get(schema, 'const')

    return isPrimitive(constValue)
  }

  return false
}

/**
 *  @param {ValuesType} [values]
 *  @param {string} [uri]
 *  @param {SchemaType} [schema]
 *  @returns {string}
 */
export function getValue (values = {}, uri = '#', schema = {}) {
  if (uri in values) { // if (Reflect.has(values, uri)) {
    const value = values[uri] // Reflect.get(values, uri)

    if (isPrimitive(value)) {
      return String(value)
    }
  }

  if ('const' in schema) { // if (Reflect.has(schema, 'const')) {
    const constValue = schema.const // Reflect.get(schema, 'const')

    if (isPrimitive(constValue)) {
      return String(constValue)
    }
  }

  return ''
}

/**
 *  @deprecated
 *
 *  @param {string | number} v
 *  @param {{ enum?: ItemsType }} [schema]
 *  @returns {string}
 */
export function getValueForEnum (v, { enum: items = [] } = {}) {
  if (v in items) { // @ts-ignore // if (Reflect.has(items, v)) {
    const enumValue = items[v] // Reflect.get(items, v)

    return String(enumValue)
  }

  return ''
}

/**
 *  Use `index` `item` `arrayIndex`
 *
 *  @deprecated
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

/**
 *  @deprecated
 *
 *  @param {string | number} v
 *  @param {{ anyOf?: ItemsType }} [schema]
 *  @returns {string}
 */
export function getValueForAnyOf (v, { anyOf: items = [] } = {}) {
  if (v in items) { // @ts-ignore // if (Reflect.has(items, v)) {
    const anyOf = items[v] // Reflect.get(items, v)

    const anyOfValue = transformToValue(anyOf)

    if (isPrimitive(anyOfValue)) {
      return String(anyOfValue)
    }
  }

  return ''
}

/**
 *  Use `index` `item` `arrayIndex`
 *
 *  @deprecated
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

/**
 *  @deprecated
 *
 *  @param {string | number} v
 *  @param {{ oneOf?: ItemsType }} [schema]
 *  @returns {string}
 */
export function getValueForOneOf (v, { oneOf: items = [] } = {}) {
  if (v in items) { // @ts-ignore // if (Reflect.has(items, v)) {
    const oneOf = items[v] // Reflect.get(items, v)

    const oneOfValue = transformToValue(oneOf)

    if (isPrimitive(oneOfValue)) {
      return String(oneOfValue)
    }
  }

  return ''
}

/**
 *  Use `index` `item` `arrayIndex`
 *
 *  @deprecated
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

/**
 *  @param {ParamsType} [params]
 *  @param {string} [uri]
 *  @returns {TransmissionStringElementsType | TransmissionNumberElementsType | TransmissionArrayElementsType | TransmissionObjectElementsType | TransmissionBooleanElementsType | TransmissionNullElementsType | Record<string, never>}
 */
export function getElementsProps (params = {}, uri = '#') {
  if (uri in params) { // if (Reflect.has(values, uri)) {
    const {
      elements = {}
    } = params[uri] // Reflect.get(values, uri)

    return elements
  }

  return {}
}

/**
 *  @param {ParamsType} [params]
 *  @param {string} [uri]
 *  @returns {EnumType | ObjectLiteralType}
 */
export function getElementsFieldPropsForEnum (params = {}, uri = '#') {
  if (uri in params) { // if (Reflect.has(values, uri)) {
    /**
     *  @type {{ elements?: { enum?: EnumType | ObjectLiteralType } }}
     */
    const {
      elements: {
        enum: value = {}
      } = {}
    } = params[uri] // Reflect.get(values, uri)

    return value
  }

  return {}
}

/**
 *  @param {ParamsType} [params]
 *  @param {string} [uri]
 *  @returns {OneOfType | ObjectLiteralType}
 */
export function getElementsFieldPropsForOneOf (params = {}, uri = '#') {
  if (uri in params) { // if (Reflect.has(values, uri)) {
    /**
     *  @type {{ elements?: { oneOf?: OneOfType | ObjectLiteralType } }}
     */
    const {
      elements: {
        oneOf: value = {}
      } = {}
    } = params[uri] // Reflect.get(values, uri)

    return value
  }

  return {}
}

/**
 *  @param {ParamsType} [params]
 *  @param {string} [uri]
 *  @returns {AnyOfType | ObjectLiteralType}
 */
export function getElementsFieldPropsForAnyOf (params = {}, uri = '#') {
  if (uri in params) { // if (Reflect.has(values, uri)) {
    /**
     *  @type {{ elements?: { anyOf?: AnyOfType | ObjectLiteralType } }}
     */
    const {
      elements: {
        anyOf: value = {}
      } = {}
    } = params[uri] // Reflect.get(values, uri)

    return value
  }

  return {}
}

/**
 *  @param {ParamsType} [params]
 *  @param {string} [uri]
 *  @returns {FieldType | ObjectLiteralType}
 */
export function getElementsFieldPropsForAllOf (params = {}, uri = '#') {
  if (uri in params) { // if (Reflect.has(values, uri)) {
    /**
     *  @type {{ elements?: { field?: FieldType | ObjectLiteralType } }}
     */
    const {
      elements: {
        field: value = {}
      } = {}
    } = params[uri] // Reflect.get(values, uri)

    return value
  }

  return {}
}

/**
 *  @param {ParamsType} [params]
 *  @param {string} [uri]
 *  @returns {FieldType | ObjectLiteralType}
 */
export function getElementsFieldProps (params = {}, uri = '#') {
  if (uri in params) { // if (Reflect.has(values, uri)) {
    /**
     *  @type {{ elements?: { field?: FieldType | ObjectLiteralType } }}
     */
    const {
      elements: {
        field: value = {}
      } = {}
    } = params[uri] // Reflect.get(values, uri)

    return value
  }

  return {}
}

/**
 *  @param {ValuesType} [values]
 *  @param {string} [uri]
 *  @param {SchemaType} [schema]
 *  @returns {{ value: string } | {}}
 */
export function getElementsFieldValue (values = {}, uri = '#', schema = {}) {
  if (uri in values) { // (Reflect.has(values, uri)) {
    const value = values[uri] // Reflect.get(values, uri)

    if (isPrimitive(value)) {
      return { value: String(value) }
    }
  }

  if ('const' in schema) { // Reflect.has(schema, 'const')) {
    const constValue = schema.const // Reflect.get(schema, 'const')

    if (isPrimitive(constValue)) {
      return { value: String(constValue) }
    }
  }

  if ('default' in schema) { // Reflect.has(schema, 'default')) {
    const defaultValue = schema.default // Reflect.get(schema, 'default')

    if (isPrimitive(defaultValue)) {
      return { value: String(defaultValue) }
    }
  }

  return {}
}

/**
 *  @param {{ 'enum'?: ItemsType }} [schema]
 *  @returns {schema is { 'enum': ItemsType }}
 */
export const hasEnum = (schema = {}) => 'enum' in schema // Reflect.has(schema, 'enum')

/**
 *  @overload
 *  @param {{ 'enum': ItemsType }} schema
 *  @returns {ItemsType}
 *
 *  @param {{ 'enum'?: ItemsType }} [schema]
 *  @returns {ItemsType | undefined}
 */
export const getEnum = (schema = {}) => schema.enum // Reflect.get(schema, 'enum')

/**
 *  @param {{ 'const'?: string | number | object | boolean | null }} [schema]
 *  @returns {schema is { 'const': string | number | object | boolean | null }}
 */
export const hasConst = (schema = {}) => 'const' in schema // Reflect.has(schema, 'const')

/**
 *  @overload
 *  @param {{ 'const': string | number | object | boolean | null }} schema
 *  @returns {string | number | object | boolean | null}
 *
 *  @param {{ 'const'?: string | number | object | boolean | null }} [schema]
 *  @returns {string | number | object | boolean | null | undefined}
 */
export const getConst = (schema = {}) => schema.const // Reflect.get(schema, 'const')

/**
 *  @param {{ 'default'?: string | number | object | boolean | null }} [schema]
 *  @returns {schema is { 'default': string | number | object | boolean | null }}
 */
export const hasDefault = (schema = {}) => 'default' in schema // Reflect.has(schema, 'default')

/**
 *  @overload
 *  @param {{ 'default': string | number | object | boolean | null }} schema
 *  @returns {string | number | object | boolean | null}
 *
 *  @param {{ 'default'?: string | number | object | boolean | null }} [schema]
 *  @returns {string | number | object | boolean | null | undefined}
 */
export const getDefault = (schema = {}) => schema.default // Reflect.get(schema, 'default')

/**
 *  @param {{ 'anyOf'?: ItemsType }} [schema]
 *  @returns {schema is { 'anyOf': ItemsType }}
 */
export const hasAnyOf = (schema = {}) => 'anyOf' in schema // Reflect.has(schema, 'anyOf')

/**
 *  @overload
 *  @param {{ 'anyOf': ItemsType }} schema
 *  @returns {ItemsType}
 *
 *  @param {{ 'anyOf'?: ItemsType }} [schema]
 *  @returns {ItemsType | undefined}
 */
export const getAnyOf = (schema = {}) => schema.anyOf // Reflect.get(schema, 'anyOf')

/**
 *  @param {{ 'oneOf'?: ItemsType }} [schema]
 *  @returns {schema is { 'oneOf': ItemsType }}
 */
export const hasOneOf = (schema = {}) => 'oneOf' in schema // Reflect.has(schema, 'oneOf')

/**
 *  @overload
 *  @param {{ 'oneOf': ItemsType }} schema
 *  @returns {ItemsType}
 *
 *  @param {{ 'oneOf'?: ItemsType }} schema
 *  @returns {ItemsType | undefined}
 */
export const getOneOf = (schema = {}) => schema.oneOf // Reflect.get(schema, 'oneOf')

/**
 *  @param {{ 'allOf'?: ItemsType }} [schema]
 *  @returns {schema is { 'allOf': ItemsType }}
 */
export const hasAllOf = (schema = {}) => 'allOf' in schema // Reflect.has(schema, 'allOf')

/**
 *  @overload
 *  @param {{ 'allOf': ItemsType }} schema
 *  @returns {ItemsType}
 *
 *  @param {{ 'allOf'?: ItemsType }} [schema]
 *  @returns {ItemsType | undefined}
 */
export const getAllOf = (schema = {}) => schema.allOf // Reflect.get(schema, 'allOf')

/**
 *  @param {string} [uri]
 *  @param {string | number} [resource]
 *  @returns {string}
 */
export const getUri = (uri = '#', resource = '') => (uri.endsWith('/') ? uri : uri + '/') + String(resource)

/**
 *  @param {string} [uri]
 *  @returns {string}
 */
export const normaliseUri = (uri = '#') => uri === '#' ? '#/' : uri

/**
 *  @param {{ minimum?: number }} schema
 *  @returns {{ min: number } | {}}
 */
export function getMin ({ minimum } = {}) {
  const value = Number(minimum)

  return isNaN(value) ? {} : { min: value }
}

/**
 *  @param {{ maximum?: number }} schema
 *  @returns {{ max: number } | {}}
 */
export function getMax ({ maximum } = {}) {
  const value = Number(maximum)

  return isNaN(value) ? {} : { max: value }
}

/**
 *  @param {{ minLength?: number }} schema
 *  @returns {{ minLength: number } | {}}
 */
export function getMinLength ({ minLength } = {}) {
  const value = Number(minLength)

  return isNaN(value) ? {} : { minLength: value }
}

/**
 *  @param {{ maxLength?: number }} schema
 *  @returns {{ maxLength: number } | {}}
 */
export function getMaxLength ({ maxLength } = {}) {
  const value = Number(maxLength)

  return isNaN(value) ? {} : { maxLength: value }
}

/**
 *  @param {{ minItems?: number }} schema
 *  @returns {{ minItems: number } | {}}
 */
export function getMinItems ({ minItems } = {}) {
  const value = Number(minItems)

  return isNaN(value) ? {} : { minItems: value }
}

/**
 *  @param {{ maxItems?: number }} schema
 *  @returns {{ maxItems: number } | {}}
 */
export function getMaxItems ({ maxItems } = {}) {
  const value = Number(maxItems)

  return isNaN(value) ? {} : { maxItems: value }
}

/**
 *  @param {{ uniqueItems?: boolean }} schema
 *  @returns {{ hasUniqueItems: boolean } | {}}
 */
export function getHasUniqueItems (schema = {}) {
  if ('uniqueItems' in schema) { // if (Reflect.has(schema, 'uniqueItems') {
    const value = schema.uniqueItems // Reflect.get(schema, 'uniqueItems')

    return (typeof value === 'boolean') ? { hasUniqueItems: value } : {}
  }

  return {}
}

/**
 *  @param {{ minContains?: number }} schema
 *  @returns {{ minContains: number } | {}}
 */
export function getMinContains ({ minContains } = {}) {
  const value = Number(minContains)

  return isNaN(value) ? {} : { minContains: value }
}

/**
 *  @param {{ maxContains?: number }} schema
 *  @returns {{ maxContains: number } | {}}
 */
export function getMaxContains ({ maxContains } = {}) {
  const value = Number(maxContains)

  return isNaN(value) ? {} : { maxContains: value }
}

/**
 *  @param {{ minProperties?: number }} schema
 *  @returns {{ minProperties: number } | {}}
 */
export function getMinProperties ({ minProperties } = {}) {
  const value = Number(minProperties)

  return isNaN(value) ? {} : { minProperties: value }
}

/**
 *  @param {{ maxProperties?: number }} schema
 *  @returns {{ maxProperties: number } | {}}
 */
export function getMaxProperties ({ maxProperties } = {}) {
  const value = Number(maxProperties)

  return isNaN(value) ? {} : { maxProperties: value }
}

/**
 *  @param {{ exclusiveMinimum?: boolean }} schema
 *  @returns {{ isExclusiveMin: boolean } | {}}
 */
export function getIsExclusiveMin (schema = {}) {
  if ('exclusiveMinimum' in schema) { // if (Reflect.has(schema, 'exclusiveMinimum') {
    const value = schema.exclusiveMinimum // Reflect.get(schema, 'exclusiveMinimum')

    return (typeof value === 'boolean') ? { isExclusiveMin: value } : {}
  }

  return {}
}

/**
 *  @param {{ exclusiveMaximum?: boolean }} schema
 *  @returns {{ isExclusiveMax: boolean } | {}}
 */
export function getIsExclusiveMax (schema = {}) {
  if ('exclusiveMaximum' in schema) { // if (Reflect.has(schema, 'exclusiveMaximum') {
    const value = schema.exclusiveMaximum // Reflect.get(schema, 'exclusiveMaximum')

    return (typeof value === 'boolean') ? { isExclusiveMax: value } : {}
  }

  return {}
}

/**
 *  @param {{ pattern?: RegExp }} schema
 *  @returns {{ pattern: RegExp } | {}}
 */
export const getPattern = ({ pattern } = {}) => (pattern ? { pattern } : {})

/**
 *  @param {{ multipleOf?: number }} schema
 *  @returns {{ step: number } | {}}
 */
export function getStep ({ multipleOf } = {}) {
  const value = Number(multipleOf)

  return isNaN(value) ? {} : { step: value }
}
