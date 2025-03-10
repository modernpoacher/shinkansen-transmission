/**
 *  @typedef {TransmissionTypes.ObjectLiteralType} ObjectLiteralType
 *  @typedef {TransmissionTypes.ObjectType} ObjectType
 *
 *  @typedef {TransmissionTypes.MemberArrayType} MemberArrayType
 *  @typedef {TransmissionTypes.MemberType} MemberType
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
 *  @returns {v is (MemberArrayType)} //  | SchemaType)[]}
 */
export const isArray = (v) => Array.isArray(v)

/**
 *  @param {unknown} [v]
 *  @returns {v is (Record<PropertyKey, MemberType | MemberArrayType> | Record<PropertyKey, never>)}
 */
export const isObject = (v) => (v || false) instanceof Object && !isArray(v)

/**
 *  @param {unknown} [v]
 *  @returns {v is (string | number | boolean | null)}
 */
export const isPrimitive = (v) => !isObject(v) && !isArray(v)

/**
 *  @param {SchemaType | object} [v]
 *  @returns {v is SchemaType}
 */
export const isSchema = (v = {}) => 'type' in v

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

  if (u in values) {
    const v = values[u]

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
  if (uri in params) {
    const {
      meta = {}
    } = params[uri]

    return meta
  }

  return {}
}

/**
 *  @param {SchemaType} [schema]
 *  @returns {boolean}
 */
export function hasMetaDefaultValue (schema = {}) {
  if ('default' in schema) {
    const defaultValue = schema.default

    return isPrimitive(defaultValue)
  }

  return false
}

/**
 *  @param {SchemaType} [schema]
 *  @returns {{ defaultValue: string } | {}}
 */
export function getMetaDefaultValue (schema = {}) {
  if ('default' in schema) {
    const defaultValue = schema.default

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
  if (uri in values) {
    const value = values[uri]

    return isPrimitive(value)
  }

  if ('const' in schema) {
    const constValue = schema.const

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
  if (uri in values) {
    const value = values[uri]

    if (isPrimitive(value)) {
      return { value: String(value) }
    }
  }

  if ('const' in schema) {
    const constValue = schema.const

    if (isPrimitive(constValue)) {
      return { value: String(constValue) }
    }
  }

  return {}
}

/**
 *  @param {MemberType} [item]
 *  @returns {MemberType | undefined}
 */
export function transformToValue (item) {
  if (item === undefined) return item

  if (isPrimitive(item)) return item

  if (isArray(item)) return item

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
export function getFindByKey (parentUri, uri) {
  /*
   *  log('getFindByKey')
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
 *  @returns {(schema: SchemaType, index: number) => boolean}
 */
export function getFindByIndex (parentUri, uri) {
  /*
   *  log('getFindByIndex')
   */
  return function find (schema, index) {
    /*
     *  log('find')
     */
    return (
      getUri(parentUri, index) === uri
    )
  }
}

/**
 *  @param {MemberType} [value]
 *  @returns {(item?: MemberType | MemberArrayType) => boolean}
 */
export function getFindByValue (value) {
  /*
   *  log('getFindByValue')
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
 *  @param {MemberType} [value]
 *  @returns {(item?: MemberType | MemberArrayType) => boolean}
 */
export function getFindByEqual (value) {
  /*
   *  log('getFindByEqual')
   */
  return function find (item) {
    /*
     *  log('find')
     */
    return (
      equal(value, transformToValue(item))
    )
  }
}

/**
 *  @param {MemberType} [value]
 *  @returns {string}
 */
export function toString (value) {
  /*
   *  log('toString')
   */
  return (value !== undefined) ? String(value) : ''
}

/**
 *  @param {{ items?: SchemaType | SchemaType[] }} schema
 *  @param {string} parentUri
 *  @param {string} uri
 *  @returns {SchemaType | undefined}
 */
export function getSchemaFromItems ({ items /* array or object */ }, parentUri, uri) {
  /*
   *  log('getSchemaFromItems')
   */

  if (isArray(items)) {
    return (
      items.find(getFindByIndex(parentUri, uri))
    )
  } else {
    if (isObject(items)) {
      return (
        items
      )
    }
  }

  return undefined
}

/**
 *  @param {{ properties?: Record<string, SchemaType> }} schema
 *  @param {string} parentUri
 *  @param {string} uri
 *  @returns {SchemaType | undefined}
 */
export function getSchemaFromProperties ({ properties /* object */ }, parentUri, uri) {
  /*
   *  log('getSchemaFromProperties')
   */

  if (isObject(properties)) {
    const key = Object.keys(properties).find(getFindByKey(parentUri, uri))

    if (key) {
      return (
        properties[key]
      )
    }
  }

  return undefined
}

/**
 *  @param {MemberArrayType} array
 *  @param {MemberType} [value]
 *  @returns {string}
 */
export function transformIndexToValueByFindValue (array, value) {
  /*
   *  log('transformIndexToValueByFindValue')
   */

  const index = findIndexByValue(array, value)

  /*
   *  Transform a number to a string
   */
  return String(index)
}

/**
 *  @param {MemberArrayType} array
 *  @param {MemberType} [value]
 *  @returns {number}
 */
export function findIndexByValue (array, value) {
  /*
   *  log('findIndexByValue')
   */

  const find = getFindByValue(value)

  return (
    array.findIndex(find)
  )
}

/**
 *  @param {MemberArrayType} array
 *  @param {MemberType} [value]
 *  @returns {string}
 */
export function transformIndexToValueByFindEqual (array, value) {
  /*
   *  log('transformIndexToValueByFindEqual')
   */

  const index = findIndexByEqual(array, value)

  /*
    *  Transform a number to a string
    */
  return String(index)
}

/**
 *  @param {MemberArrayType} array
 *  @param {MemberType} [value]
 *  @returns {MemberType}
 */
export function findIndexByEqual (array, value) {
  /*
   *  log('findIndexByEqual')
   */

  const find = getFindByEqual(value)

  return (
    array.findIndex(find)
  )
}

/**
 *  @deprecated
 *
 *  @param {ValuesType} [values]
 *  @param {string} [uri]
 *  @param {SchemaType} [schema]
 *  @returns {boolean}
 */
export function hasValue (values = {}, uri = '#', schema = {}) {
  if (uri in values) {
    const value = values[uri]

    return isPrimitive(value)
  }

  if ('const' in schema) {
    const constValue = schema.const

    return isPrimitive(constValue)
  }

  return false
}

/**
 *  @deprecated
 *
 *  @param {ValuesType} [values]
 *  @param {string} [uri]
 *  @param {SchemaType} [schema]
 *  @returns {string}
 */
export function getValue (values = {}, uri = '#', schema = {}) {
  if (uri in values) {
    const value = values[uri]

    if (isPrimitive(value)) {
      return String(value)
    }
  }

  if ('const' in schema) {
    const constValue = schema.const

    if (isPrimitive(constValue)) {
      return String(constValue)
    }
  }

  return ''
}

/**
 *  @param {ParamsType} [params]
 *  @param {string} [uri]
 *  @returns {TransmissionStringElementsType | TransmissionNumberElementsType | TransmissionArrayElementsType | TransmissionObjectElementsType | TransmissionBooleanElementsType | TransmissionNullElementsType | Record<string, never>}
 */
export function getElementsProps (params = {}, uri = '#') {
  if (uri in params) {
    const {
      elements = {}
    } = params[uri]

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
  if (uri in params) {
    /**
     *  @type {{ elements?: { enum?: EnumType | ObjectLiteralType } }}
     */
    const {
      elements: {
        enum: value = {}
      } = {}
    } = params[uri]

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
  if (uri in params) {
    /**
     *  @type {{ elements?: { oneOf?: OneOfType | ObjectLiteralType } }}
     */
    const {
      elements: {
        oneOf: value = {}
      } = {}
    } = params[uri]

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
  if (uri in params) {
    /**
     *  @type {{ elements?: { anyOf?: AnyOfType | ObjectLiteralType } }}
     */
    const {
      elements: {
        anyOf: value = {}
      } = {}
    } = params[uri]

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
  if (uri in params) {
    /**
     *  @type {{ elements?: { field?: FieldType | ObjectLiteralType } }}
     */
    const {
      elements: {
        field: value = {}
      } = {}
    } = params[uri]

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
  if (uri in params) {
    /**
     *  @type {{ elements?: { field?: FieldType | ObjectLiteralType } }}
     */
    const {
      elements: {
        field: value = {}
      } = {}
    } = params[uri]

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
  if (uri in values) {
    const value = values[uri]

    if (isPrimitive(value)) {
      return { value: String(value) }
    }
  }

  if ('const' in schema) {
    const constValue = schema.const

    if (isPrimitive(constValue)) {
      return { value: String(constValue) }
    }
  }

  if ('default' in schema) {
    const defaultValue = schema.default

    if (isPrimitive(defaultValue)) {
      return { value: String(defaultValue) }
    }
  }

  return {}
}

/**
 *  @param {{ 'enum'?: MemberArrayType }} [schema]
 *  @returns {schema is { 'enum': MemberArrayType }}
 */
export const hasEnum = (schema = {}) => 'enum' in schema

/**
 *  @overload
 *  @param {{ 'enum': MemberArrayType }} schema
 *  @returns {MemberArrayType}
 *
 *  @param {{ 'enum'?: MemberArrayType }} [schema]
 *  @returns {MemberArrayType | undefined}
 */
export const getEnum = (schema = {}) => schema.enum

/**
 *  @param {{ 'anyOf'?: MemberArrayType }} [schema]
 *  @returns {schema is { 'anyOf': MemberArrayType }}
 */
export const hasAnyOf = (schema = {}) => 'anyOf' in schema

/**
 *  @overload
 *  @param {{ 'anyOf': MemberArrayType }} schema
 *  @returns {MemberArrayType}
 *
 *  @param {{ 'anyOf'?: MemberArrayType }} [schema]
 *  @returns {MemberArrayType | undefined}
 */
export const getAnyOf = (schema = {}) => schema.anyOf

/**
 *  @param {{ 'oneOf'?: MemberArrayType }} [schema]
 *  @returns {schema is { 'oneOf': MemberArrayType }}
 */
export const hasOneOf = (schema = {}) => 'oneOf' in schema

/**
 *  @overload
 *  @param {{ 'oneOf': MemberArrayType }} schema
 *  @returns {MemberArrayType}
 *
 *  @param {{ 'oneOf'?: MemberArrayType }} schema
 *  @returns {MemberArrayType | undefined}
 */
export const getOneOf = (schema = {}) => schema.oneOf

/**
 *  @param {{ 'allOf'?: MemberArrayType }} [schema]
 *  @returns {schema is { 'allOf': MemberArrayType }}
 */
export const hasAllOf = (schema = {}) => 'allOf' in schema

/**
 *  @overload
 *  @param {{ 'allOf': MemberArrayType }} schema
 *  @returns {MemberArrayType}
 *
 *  @param {{ 'allOf'?: MemberArrayType }} [schema]
 *  @returns {MemberArrayType | undefined}
 */
export const getAllOf = (schema = {}) => schema.allOf

/**
 *  @param {{ 'const'?: MemberType }} [schema]
 *  @returns {schema is { 'const': MemberType }}
 */
export const hasConst = (schema = {}) => 'const' in schema

/**
 *  @overload
 *  @param {{ 'const': MemberType }} schema
 *  @returns {MemberType}
 *
 *  @param {{ 'const'?: MemberType }} [schema]
 *  @returns {MemberType | undefined}
 */
export const getConst = (schema = {}) => schema.const

/**
 *  @param {{ 'default'?: MemberType }} [schema]
 *  @returns {schema is { 'default': MemberType }}
 */
export const hasDefault = (schema = {}) => 'default' in schema

/**
 *  @overload
 *  @param {{ 'default': MemberType }} schema
 *  @returns {MemberType}
 *
 *  @param {{ 'default'?: MemberType }} [schema]
 *  @returns {MemberType | undefined}
 */
export const getDefault = (schema = {}) => schema.default

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
  if ('uniqueItems' in schema) {
    const value = schema.uniqueItems

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
  if ('exclusiveMinimum' in schema) {
    const value = schema.exclusiveMinimum

    return (typeof value === 'boolean') ? { isExclusiveMin: value } : {}
  }

  return {}
}

/**
 *  @param {{ exclusiveMaximum?: boolean }} schema
 *  @returns {{ isExclusiveMax: boolean } | {}}
 */
export function getIsExclusiveMax (schema = {}) {
  if ('exclusiveMaximum' in schema) {
    const value = schema.exclusiveMaximum

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
