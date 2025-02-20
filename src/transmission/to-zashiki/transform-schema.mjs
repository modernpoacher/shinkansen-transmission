/**
 *  @typedef {TransmissionTypes.ObjectLiteralType} ObjectLiteralType
 *  @typedef {TransmissionTypes.ObjectType} ObjectType
 *
 *  @typedef {TransmissionTypes.EnumType} EnumType
 *  @typedef {TransmissionTypes.AnyOfType} AnyOfType
 *  @typedef {TransmissionTypes.OneOfType} OneOfType
 *  @typedef {TransmissionTypes.FieldType} FieldType
 *
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.ValuesType} ValuesType
 *  @typedef {TransmissionTypes.ParamsType} ParamsType
 *
 *  @typedef {TransmissionTypes.Zashiki.ZashikiType} ZashikiType
 *
 *  @typedef {TransmissionTypes.Zashiki.StringMetaType} ZashikiStringMetaType
 *  @typedef {TransmissionTypes.Zashiki.NumberMetaType} ZashikiNumberMetaType
 *  @typedef {TransmissionTypes.Zashiki.ArrayMetaType} ZashikiArrayMetaType
 *  @typedef {TransmissionTypes.Zashiki.ObjectMetaType} ZashikiObjectMetaType
 *  @typedef {TransmissionTypes.Zashiki.BooleanMetaType} ZashikiBooleanMetaType
 *  @typedef {TransmissionTypes.Zashiki.NullMetaType} ZashikiNullMetaType
 *
 *  @typedef {TransmissionTypes.Zashiki.StringElementsType} ZashikiStringElementsType
 *  @typedef {TransmissionTypes.Zashiki.NumberElementsType} ZashikiNumberElementsType
 *  @typedef {TransmissionTypes.Zashiki.ArrayElementsType} ZashikiArrayElementsType
 *  @typedef {TransmissionTypes.Zashiki.ObjectElementsType} ZashikiObjectElementsType
 *  @typedef {TransmissionTypes.Zashiki.BooleanElementsType} ZashikiBooleanElementsType
 *  @typedef {TransmissionTypes.Zashiki.NullElementsType} ZashikiNullElementsType
 */

import debug from 'debug'

import {
  isArray,
  isObject,
  isPrimitive,
  isArraySchema,
  isObjectSchema,
  getSelectedItems,
  hasEnum,
  hasAnyOf,
  hasOneOf,
  hasAllOf,
  getUri,
  getMetaProps,
  getElementsFieldProps
} from '#transmission/transmission/common'

import {
  getRenderParamsByIndexForEnum,
  getRenderParamsByIndexForOneOf,
  getRenderParamsByIndexForAnyOf,
  getRenderParamsByIndexForAllOf,
  getRenderParamsByIndex,
  getRenderParamsByKeyForEnum,
  getRenderParamsByKeyForAnyOf,
  getRenderParamsByKeyForOneOf,
  getRenderParamsByKeyForAllOf,
  getRenderParamsByKey,
  getRenderParamsForEnum,
  getRenderParamsForAnyOf,
  getRenderParamsForOneOf,
  getRenderParamsForAllOf,
  getRenderParams
} from './render-params/schema/index.mjs'

import {
  renderStringForEnum,
  renderStringForAnyOf,
  renderStringForOneOf,
  renderStringForAllOf,
  renderString
} from './render/string/index.mjs'

import {
  renderNumberForEnum,
  renderNumberForAnyOf,
  renderNumberForOneOf,
  renderNumberForAllOf,
  renderNumber
} from './render/number/index.mjs'

import {
  renderArrayForEnum,
  renderArrayForAnyOf,
  renderArrayForOneOf,
  renderArrayForAllOf,
  renderArray
} from './render/array/index.mjs'

import {
  renderObjectForEnum,
  renderObjectForAnyOf,
  renderObjectForOneOf,
  renderObjectForAllOf,
  renderObject
} from './render/object/index.mjs'

import {
  renderBooleanForEnum,
  renderBooleanForAnyOf,
  renderBooleanForOneOf,
  renderBooleanForAllOf,
  renderBoolean
} from './render/boolean/index.mjs'

import {
  renderNullForEnum,
  renderNullForAnyOf,
  renderNullForOneOf,
  renderNullForAllOf,
  renderNull
} from './render/null/index.mjs'

import {
  getParamsByIndexForEnum,
  getParamsByIndexForAnyOf,
  getParamsByIndexForOneOf,
  getParamsByIndex,
  getParamsByKeyForEnum,
  getParamsByKeyForAnyOf,
  getParamsByKeyForOneOf,
  getParamsByKey
} from './params/index.mjs'

const log = debug('shinkansen-transmission/to-zashiki/transform-schema')

log('`shinkansen` is awake')

/**
 *  @param {SchemaType} schemaProps
 *  @param {SchemaType} item
 *  @returns {SchemaType}
 */
function toSchema (schemaProps, item) {
  return Object.assign(schemaProps, item)
}

/**
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {(schema: SchemaType, index: number) => ZashikiType}
 */
export function mapTransformNullByIndex (rootSchema, values, params) {
  /**
   *  log('mapTransformNullByIndex')
   */

  return function map (schema, index) {
    /**
     *  log('map)
     */
    params.index = index

    return (
      transformNullByIndex(schema, rootSchema, values, params)
    )
  }
}

/**
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {(schema: SchemaType, index: number) => ZashikiType}
 */
export function mapTransformBooleanByIndex (rootSchema, values, params) {
  /**
   *  log('mapTransformBooleanByIndex')
   */

  return function map (schema, index) {
    /**
     *  log('map')
     */
    params.index = index

    return (
      transformBooleanByIndex(schema, rootSchema, values, params)
    )
  }
}

/**
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {(schema: SchemaType, index: number) => ZashikiType}
 */
export function mapTransformObjectByIndex (rootSchema, values, params) {
  /**
   *  log('mapTransformObjectByIndex')
   */

  return function map (schema, index) {
    /**
     *  log('map')
     */
    params.index = index

    return (
      transformObjectByIndex(schema, rootSchema, values, params)
    )
  }
}

/**
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {(schema: SchemaType, index: number) => ZashikiType}
 */
export function mapTransformArrayByIndex (rootSchema, values, params) {
  /**
   *  log('mapTransformArrayByIndex')
   */

  return function map (schema, index) {
    /**
     *  log('map')
     */
    params.index = index

    return (
      transformArrayByIndex(schema, rootSchema, values, params)
    )
  }
}

/**
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {(schema: SchemaType, index: number) => ZashikiType}
 */
export function mapTransformNumberByIndex (rootSchema, values, params) {
  /**
   *  log('mapTransformNumberByIndex')
   */

  return function map (schema, index) {
    /**
     *  log('map')
     */
    params.index = index

    return (
      transformNumberByIndex(schema, rootSchema, values, params)
    )
  }
}

/**
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {(schema: SchemaType, index: number) => ZashikiType}
 */
export function mapTransformStringByIndex (rootSchema, values, params) {
  /**
   *  log('mapTransformStringByIndex')
   */

  return function map (schema, index) {
    /**
     *  log('map')
     */
    params.index = index

    return (
      transformStringByIndex(schema, rootSchema, values, params)
    )
  }
}

/**
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {(schema: SchemaType, index: number) => ZashikiType}
 */
export function mapTransformByIndex (rootSchema, values, params) {
  /**
   *  log('mapTransformByIndex')
   */

  return function map (schema, index) {
    /**
     *  log('map')
     */
    params.index = index

    return (
      getTransformByIndex(schema, rootSchema, values, params)
    )
  }
}

/**
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {(entries: [key: string, schema: SchemaType]) => ZashikiType}
 */
export function mapTransformByKey (rootSchema, values, params) {
  /**
   *  log('mapTransformByKey')
   */

  return function map ([key, schema]) {
    /**
     *  log('map')
     */
    params.key = key

    return (
      getTransformByKey(schema, rootSchema, values, params)
    )
  }
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function getTransformByKey (schema, rootSchema, values, params) {
  /**
   *  log('getTransformByKey')
   */

  if (hasEnum(schema)) {
    return transformByKeyForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformByKeyForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformByKeyForOneOf(schema, rootSchema, values, params)
      }
    }
  }

  return transformByKey(schema, rootSchema, values, getParamsByKey(schema, rootSchema, values, params))
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function getTransformByIndex (schema, rootSchema, values, params) {
  /**
   *  log('getTransformByIndex')
   */

  if (hasEnum(schema)) {
    return transformByIndexForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformByIndexForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformByIndexForOneOf(schema, rootSchema, values, params)
      }
    }
  }

  if (isArraySchema(schema)) { // getParamsByIndex
    /*
     *  log('isArraySchema')
     */

    return transformByIndex(schema, rootSchema, values, getParamsByIndex(schema, rootSchema, values, params))
  } else {
    if (isObjectSchema(schema)) { // getParamsByIndex
      /*
       *  log('isObjectSchema')
       */

      return transformByIndex(schema, rootSchema, values, getParamsByIndex(schema, rootSchema, values, params))
    } else {
      const {
        parentUri = '#/'
      } = params

      if (parentUri in values) { // Reflect.has(values, parentUri)) {
        const value = values[parentUri] // Reflect.get(values, parentUri)

        if (isPrimitive(value)) {
          const {
            index = 0
          } = params

          const uri = getUri(parentUri, index)

          const s = String(value)

          const meta = Object.assign(getMetaProps(params, uri), {
            parentUri,
            uri,
            value: s
          })
          const elements = {
            field: Object.assign(getElementsFieldProps(params, uri), {
              value: s
            })
          }

          return transformByIndex(schema, rootSchema, values, Object.assign(structuredClone(params), { parentUri, uri, [uri]: { meta, elements } }))
        } else {
          const {
            index = 0
          } = params

          if (index in value) { // Reflect.has(value, index)) {
            const v = value[index] // Reflect.get(value, index)

            const uri = getUri(parentUri, index)

            const s = String(v)

            const meta = Object.assign(getMetaProps(params, uri), {
              parentUri,
              uri,
              value: s
            })
            const elements = {
              field: Object.assign(getElementsFieldProps(params, uri), {
                value: s
              })
            }

            return transformByIndex(schema, rootSchema, values, Object.assign(structuredClone(params), { parentUri, uri, [uri]: { meta, elements } }))
          }
        }
      }
    }
  }

  // getParamsByIndex

  return transformByIndex(schema, rootSchema, values, getParamsByIndex(schema, rootSchema, values, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringByKeyForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformStringByKeyForEnum')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderStringForEnum(schema, values, getRenderParamsByKeyForEnum(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringByKeyForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformStringByKeyForAnyOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema

  /**
   *  @type {ZashikiType[]}
   */
  const items = anyOf.filter(isObject).map(mapTransformStringByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderStringForAnyOf(schema, values, getRenderParamsByKeyForAnyOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringByKeyForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformStringByKeyForOneOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformStringByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderStringForOneOf(schema, values, getRenderParamsByKeyForOneOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringByKeyForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformStringByKeyForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderStringForAllOf(itemSchema, values, getRenderParamsByKeyForAllOf(schema, rootSchema, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringByIndexForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformStringByIndexForEnum')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderStringForEnum(schema, values, getRenderParamsByIndexForEnum(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringByIndexForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformStringByIndexForAnyOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformStringByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderStringForAnyOf(schema, values, getRenderParamsByIndexForAnyOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringByIndexForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformStringByIndexForOneOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformStringByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri })))

  return renderStringForOneOf(schema, values, getRenderParamsByIndexForOneOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringByIndexForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformStringByIndexForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderStringForAllOf(itemSchema, values, getRenderParamsByIndexForAllOf(schema, rootSchema, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformStringForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderStringForEnum(schema, values, getRenderParamsForEnum(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformStringForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformStringByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderStringForAnyOf(schema, values, getRenderParamsForAnyOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformStringForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformStringByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderStringForOneOf(schema, values, getRenderParamsForOneOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformStringForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderStringForAllOf(itemSchema, values, getRenderParamsForAllOf(schema, rootSchema, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberByKeyForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberByKeyForEnum')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderNumberForEnum(schema, values, getRenderParamsByKeyForEnum(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberByKeyForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberByKeyForAnyOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformNumberByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNumberForAnyOf(schema, values, getRenderParamsByKeyForAnyOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberByKeyForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberByKeyForOneOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformNumberByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNumberForOneOf(schema, values, getRenderParamsByKeyForOneOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberByKeyForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberByKeyForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderNumberForAllOf(itemSchema, values, getRenderParamsByKeyForAllOf(schema, rootSchema, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberByIndexForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberByIndexForEnum')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderNumberForEnum(schema, values, getRenderParamsByIndexForEnum(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberByIndexForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberByIndexForAnyOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformNumberByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNumberForAnyOf(schema, values, getRenderParamsByIndexForAnyOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberByIndexForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberByIndexForOneOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformNumberByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNumberForOneOf(schema, values, getRenderParamsByIndexForOneOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberByIndexForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberByIndexForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderNumberForAllOf(itemSchema, values, getRenderParamsByIndexForAllOf(schema, rootSchema, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderNumberForEnum(schema, values, getRenderParamsForEnum(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformNumberByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNumberForAnyOf(schema, values, getRenderParamsForAnyOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformNumberByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNumberForOneOf(schema, values, getRenderParamsForOneOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderNumberForAllOf(itemSchema, values, getRenderParamsForAllOf(schema, rootSchema, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayByKeyForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayByKeyForEnum')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderArrayForEnum(schema, values, getRenderParamsByKeyForEnum(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayByKeyForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayByKeyForAnyOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformArrayByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderArrayForAnyOf(schema, values, getRenderParamsByKeyForAnyOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayByKeyForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayByKeyForOneOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformArrayByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderArrayForOneOf(schema, values, getRenderParamsByKeyForOneOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayByKeyForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayByKeyForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderArrayForAllOf(itemSchema, values, getRenderParamsByKeyForAllOf(schema, rootSchema, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayByIndexForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayByIndexForEnum')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderArrayForEnum(schema, values, getRenderParamsByIndexForEnum(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayByIndexForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayByIndexForAnyOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformArrayByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderArrayForAnyOf(schema, values, getRenderParamsByIndexForAnyOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayByIndexForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayByIndexForOneOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformArrayByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderArrayForOneOf(schema, values, getRenderParamsByIndexForOneOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayByIndexForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayByIndexForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderArrayForAllOf(itemSchema, values, getRenderParamsByIndexForAllOf(schema, rootSchema, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderArrayForEnum(schema, values, getRenderParamsForEnum(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformArrayByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderArrayForAnyOf(schema, values, getRenderParamsForAnyOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformArrayByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderArrayForOneOf(schema, values, getRenderParamsForOneOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  const {
    items = [] // array or object
  } = itemSchema

  if (isArray(items)) {
    const {
      uri = '#/'
    } = params

    params.fields = (
      items.map(mapTransformByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri })))
    )

    return renderArrayForAllOf(itemSchema, values, getRenderParamsForAllOf(schema, rootSchema, params))
  } else {
    if (isObject(items)) {
      const {
        uri = '#/'
      } = params

      params.fields = [
        getTransformByIndex(items, rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri }))
      ]

      return renderArrayForAllOf(itemSchema, values, getRenderParamsForAllOf(schema, rootSchema, params))
    }
  }

  throw new Error('Invalid `array`')
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectByKeyForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectByKeyForEnum')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderObjectForEnum(schema, values, getRenderParamsByKeyForEnum(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectByKeyForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectByKeyForAnyOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformObjectByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderObjectForAnyOf(schema, values, getRenderParamsByKeyForAnyOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectByKeyForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectByKeyForOneOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformObjectByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderObjectForOneOf(schema, values, getRenderParamsByKeyForOneOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectByKeyForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectByKeyForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderObjectForAllOf(itemSchema, values, getRenderParamsByKeyForAllOf(schema, rootSchema, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectByIndexForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectByIndexForEnum')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderObjectForEnum(schema, values, getRenderParamsByIndexForEnum(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectByIndexForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectByIndexForAnyOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformObjectByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderObjectForAnyOf(schema, values, getRenderParamsByIndexForAnyOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectByIndexForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectByIndexForOneOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformObjectByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderObjectForOneOf(schema, values, getRenderParamsByIndexForOneOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectByIndexForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectByIndexForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderObjectForAllOf(itemSchema, values, getRenderParamsByIndexForAllOf(schema, rootSchema, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderObjectForEnum(schema, values, getRenderParamsForEnum(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformObjectByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderObjectForAnyOf(schema, values, getRenderParamsForAnyOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformObjectByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderObjectForOneOf(schema, values, getRenderParamsForOneOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectForAllOf (schema, rootSchema, values, params) { // As-is
  /**
   *  log('transformObjectForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  const {
    properties = {},
    required = []
  } = itemSchema

  const {
    uri = '#/'
  } = params

  params.fields = (
    Object
      .entries(properties)
      .map(mapTransformByKey(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, required })))
  )

  return renderObjectForAllOf(itemSchema, values, getRenderParamsForAllOf(schema, rootSchema, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanByKeyForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanByKeyForEnum')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderBooleanForEnum(schema, values, getRenderParamsByKeyForEnum(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanByKeyForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanByKeyForAnyOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformBooleanByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderBooleanForAnyOf(schema, values, getRenderParamsByKeyForAnyOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanByKeyForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanByKeyForOneOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformBooleanByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderBooleanForOneOf(schema, values, getRenderParamsByKeyForOneOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanByKeyForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanByKeyForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderBooleanForAllOf(itemSchema, values, getRenderParamsByKeyForAllOf(schema, rootSchema, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanByIndexForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanByIndexForEnum')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderBooleanForEnum(schema, values, getRenderParamsByIndexForEnum(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanByIndexForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanByIndexForAnyOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformBooleanByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderBooleanForAnyOf(schema, values, getRenderParamsByIndexForAnyOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanByIndexForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanByIndexForOneOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformBooleanByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderBooleanForOneOf(schema, values, getRenderParamsByIndexForOneOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanByIndexForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanByIndexForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderBooleanForAllOf(itemSchema, values, getRenderParamsByIndexForAllOf(schema, rootSchema, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderBooleanForEnum(schema, values, getRenderParamsForEnum(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformBooleanByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderBooleanForAnyOf(schema, values, getRenderParamsForAnyOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformBooleanByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderBooleanForOneOf(schema, values, getRenderParamsForOneOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderBooleanForAllOf(itemSchema, values, getRenderParamsForAllOf(schema, rootSchema, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullByKeyForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformNullByKeyForEnum')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderNullForEnum(schema, values, getRenderParamsByKeyForEnum(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullByKeyForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNullByKeyForAnyOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformNullByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNullForAnyOf(schema, values, getRenderParamsByKeyForAnyOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullByKeyForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNullByKeyForOneOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = ''
  } = params

  const uri = getUri(fieldParentUri, fieldKey)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformNullByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNullForOneOf(schema, values, getRenderParamsByKeyForOneOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullByKeyForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNullByKeyForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderNullForAllOf(itemSchema, values, getRenderParamsByKeyForAllOf(schema, rootSchema, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullByIndexForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformNullByIndexForEnum')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderNullForEnum(schema, values, getRenderParamsByIndexForEnum(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullByIndexForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNullByIndexForAnyOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformNullByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNullForAnyOf(schema, values, getRenderParamsByIndexForAnyOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullByIndexForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNullByIndexForOneOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  const uri = getUri(arrayParentUri, arrayIndex)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformNullByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNullForOneOf(schema, values, getRenderParamsByIndexForOneOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullByIndexForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNullByIndexForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderNullForAllOf(itemSchema, values, getRenderParamsByIndexForAllOf(schema, rootSchema, params))
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformNullForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = schema // const items = getEnum(schema)

  return renderNullForEnum(schema, values, getRenderParamsForEnum(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNullForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = schema
  const items = anyOf.filter(isObject).map(mapTransformNullByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNullForAnyOf(schema, values, getRenderParamsForAnyOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNullForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = schema
  const items = oneOf.filter(isObject).map(mapTransformNullByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, selectedItems })))

  return renderNullForOneOf(schema, values, getRenderParamsForOneOf(schema, rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullForAllOf (schema, rootSchema, values, params) {
  /**
   *  log('transformNullForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = schema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderNullForAllOf(itemSchema, values, getRenderParamsForAllOf(schema, rootSchema, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringByKey (schema, rootSchema, values, params) {
  /**
   *  log('transformStringByKey')
   */

  if (hasEnum(schema)) {
    return transformStringByKeyForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformStringByKeyForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformStringByKeyForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformStringByKeyForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  return renderString(schema, values, getRenderParamsByKey(schema, rootSchema, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringByIndex (schema, rootSchema, values, params) {
  /**
   *  log('transformStringByIndex')
   */

  if (hasEnum(schema)) {
    return transformStringByIndexForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformStringByIndexForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformStringByIndexForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformStringByIndexForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  return renderString(schema, values, getRenderParamsByIndex(schema, rootSchema, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberByKey (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberByKey')
   */

  if (hasEnum(schema)) {
    return transformNumberByKeyForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformNumberByKeyForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformNumberByKeyForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformNumberByKeyForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  return renderNumber(schema, values, getRenderParamsByKey(schema, rootSchema, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberByIndex (schema, rootSchema, values, params) {
  /**
   *  log('transformNumberByIndex')
   */

  if (hasEnum(schema)) {
    return transformNumberByIndexForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformNumberByIndexForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformNumberByIndexForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformNumberByIndexForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  return renderNumber(schema, values, getRenderParamsByIndex(schema, rootSchema, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayByKey (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayByKey')
   */

  if (hasEnum(schema)) {
    return transformArrayByKeyForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformArrayByKeyForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformArrayByKeyForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformArrayByKeyForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  const {
    items = [] // array or object
  } = schema

  if (isArray(items)) {
    const {
      parentUri: fieldParentUri = '#',
      key: fieldKey = ''
    } = params

    params.fields = (
      items.map(mapTransformByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: getUri(fieldParentUri, fieldKey) })))
    )

    return renderArray(schema, values, getRenderParamsByKey(schema, rootSchema, params))
  } else {
    if (isObject(items)) {
      const {
        parentUri: fieldParentUri = '#',
        key: fieldKey = ''
      } = params

      params.fields = [
        getTransformByIndex(items, rootSchema, values, Object.assign(structuredClone(params), { parentUri: getUri(fieldParentUri, fieldKey) }))
      ]

      return renderArray(schema, values, getRenderParamsByKey(schema, rootSchema, params))
    }
  }

  throw new Error('Invalid `array`')
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayByIndex (schema, rootSchema, values, params) {
  /**
   *  log('transformArrayByIndex')
   */

  if (hasEnum(schema)) {
    return transformArrayByIndexForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformArrayByIndexForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformArrayByIndexForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformArrayByIndexForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  const {
    items = [] // array or object
  } = schema

  if (isArray(items)) {
    const {
      parentUri: arrayParentUri = '#/',
      index: arrayIndex = 0
    } = params

    params.fields = (
      items.map(mapTransformByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: getUri(arrayParentUri, arrayIndex) })))
    )

    return renderArray(schema, values, getRenderParamsByIndex(schema, rootSchema, params))
  } else {
    if (isObject(items)) {
      const {
        parentUri: arrayParentUri = '#',
        index: arrayIndex = 0
      } = params

      params.fields = [
        getTransformByIndex(items, rootSchema, values, Object.assign(structuredClone(params), { parentUri: getUri(arrayParentUri, arrayIndex) }))
      ]

      return renderArray(schema, values, getRenderParamsByIndex(schema, rootSchema, params))
    }
  }

  throw new Error('Invalid `array`')
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectByKey (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectByKey')
   */

  if (hasEnum(schema)) {
    return transformObjectByKeyForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformObjectByKeyForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformObjectByKeyForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformObjectByKeyForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  const {
    properties = {},
    required = []
  } = schema

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey
  } = params

  params.fields = (
    Object
      .entries(properties)
      .map(mapTransformByKey(rootSchema, values, Object.assign(structuredClone(params), { parentUri: getUri(fieldParentUri, fieldKey), required })))
  )

  return renderObject(schema, values, getRenderParamsByKey(schema, rootSchema, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectByIndex (schema, rootSchema, values, params) {
  /**
   *  log('transformObjectByIndex')
   */

  if (hasEnum(schema)) {
    return transformObjectByIndexForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformObjectByIndexForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformObjectByIndexForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformObjectByIndexForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  const {
    properties = {},
    required = []
  } = schema

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  params.fields = (
    Object
      .entries(properties)
      .map(mapTransformByKey(rootSchema, values, Object.assign(structuredClone(params), { parentUri: getUri(arrayParentUri, arrayIndex), required })))
  )

  return renderObject(schema, values, getRenderParamsByIndex(schema, rootSchema, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanByKey (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanByKey')
   */

  if (hasEnum(schema)) {
    return transformBooleanByKeyForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformBooleanByKeyForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformBooleanByKeyForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformBooleanByKeyForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  return renderBoolean(schema, values, getRenderParamsByKey(schema, rootSchema, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanByIndex (schema, rootSchema, values, params) {
  /**
   *  log('transformBooleanByIndex')
   */

  if (hasEnum(schema)) {
    return transformBooleanByIndexForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformBooleanByIndexForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformBooleanByIndexForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformBooleanByIndexForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  return renderBoolean(schema, values, getRenderParamsByIndex(schema, rootSchema, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullByKey (schema, rootSchema, values, params) {
  /**
   *  log('transformNullByKey')
   */

  if (hasEnum(schema)) {
    return transformNullByKeyForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformNullByKeyForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformNullByKeyForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformNullByKeyForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  return renderNull(schema, values, getRenderParamsByKey(schema, rootSchema, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullByIndex (schema, rootSchema, values, params) {
  /**
   *  log('transformNullByIndex')
   */

  if (hasEnum(schema)) {
    return transformNullByIndexForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformNullByIndexForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformNullByIndexForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformNullByIndexForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  return renderNull(schema, values, getRenderParamsByIndex(schema, rootSchema, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformString (schema, rootSchema, values, params) {
  /**
   *  log('transformString')
   */

  if (hasEnum(schema)) {
    return transformStringForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformStringForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformStringForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformStringForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  return renderString(schema, values, getRenderParams(schema, rootSchema, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.1
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumber (schema, rootSchema, values, params) {
  /**
   *  log('transformNumber')
   */

  if (hasEnum(schema)) {
    return transformNumberForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformNumberForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformNumberForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformNumberForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  return renderNumber(schema, values, getRenderParams(schema, rootSchema, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArray (schema, rootSchema, values, params) {
  /**
   *  log('transformArray')
   */

  if (hasEnum(schema)) {
    return transformArrayForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformArrayForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformArrayForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformArrayForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  const {
    items = [] // array or object
  } = schema

  if (isArray(items)) {
    const {
      uri = '#/'
    } = params

    params.fields = (
      items.map(mapTransformByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri })))
    )

    return renderArray(schema, values, getRenderParams(schema, rootSchema, params))
  } else {
    if (isObject(items)) {
      const {
        uri = '#/'
      } = params

      params.fields = [
        getTransformByIndex(items, rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri }))
      ]

      return renderArray(schema, values, getRenderParams(schema, rootSchema, params))
    }
  }

  throw new Error('Invalid `array`')
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObject (schema, rootSchema, values, params) {
  /**
   *  log('transformObject')
   */

  if (hasEnum(schema)) {
    return transformObjectForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformObjectForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformObjectForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformObjectForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  const {
    properties = {},
    required = []
  } = schema

  const {
    uri = '#/'
  } = params

  params.fields = (
    Object
      .entries(properties)
      .map(mapTransformByKey(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, required })))
  )

  return renderObject(schema, values, getRenderParams(schema, rootSchema, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBoolean (schema, rootSchema, values, params) {
  /**
   *  log('transformBoolean')
   */

  if (hasEnum(schema)) {
    return transformBooleanForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformBooleanForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformBooleanForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformBooleanForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  return renderBoolean(schema, values, getRenderParams(schema, rootSchema, params))
}

/**
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
 *
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNull (schema, rootSchema, values, params) {
  /**
   *  log('transformNull')
   */

  if (hasEnum(schema)) {
    return transformNullForEnum(schema, rootSchema, values, params)
  } else {
    if (hasAnyOf(schema)) {
      return transformNullForAnyOf(schema, rootSchema, values, params)
    } else {
      if (hasOneOf(schema)) {
        return transformNullForOneOf(schema, rootSchema, values, params)
      } else {
        if (hasAllOf(schema)) {
          return transformNullForAllOf(schema, rootSchema, values, params)
        }
      }
    }
  }

  return renderNull(schema, values, getRenderParams(schema, rootSchema, params))
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformByKeyForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformByKeyForEnum')
   */

  const {
    type
  } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'string':
      return transformStringByKeyForEnum(schema, rootSchema, values, getParamsByKeyForEnum(schema, rootSchema, values, params))

    case 'number':
      return transformNumberByKeyForEnum(schema, rootSchema, values, getParamsByKeyForEnum(schema, rootSchema, values, params))

    case 'array':
      return transformArrayByKeyForEnum(schema, rootSchema, values, getParamsByKeyForEnum(schema, rootSchema, values, params))

    case 'object':
      return transformObjectByKeyForEnum(schema, rootSchema, values, getParamsByKeyForEnum(schema, rootSchema, values, params))

    case 'boolean':
      return transformBooleanByKeyForEnum(schema, rootSchema, values, getParamsByKeyForEnum(schema, rootSchema, values, params))

    case 'null':
      return transformNullByKeyForEnum(schema, rootSchema, values, getParamsByKeyForEnum(schema, rootSchema, values, params))
  }

  throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformByKeyForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformByKeyForAnyOf')
   */

  const {
    type
  } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'string':
      return transformStringByKeyForAnyOf(schema, rootSchema, values, getParamsByKeyForAnyOf(schema, rootSchema, values, params))

    case 'number':
      return transformNumberByKeyForAnyOf(schema, rootSchema, values, getParamsByKeyForAnyOf(schema, rootSchema, values, params))

    case 'array':
      return transformArrayByKeyForAnyOf(schema, rootSchema, values, getParamsByKeyForAnyOf(schema, rootSchema, values, params))

    case 'object':
      return transformObjectByKeyForAnyOf(schema, rootSchema, values, getParamsByKeyForAnyOf(schema, rootSchema, values, params))

    case 'boolean':
      return transformBooleanByKeyForAnyOf(schema, rootSchema, values, getParamsByKeyForAnyOf(schema, rootSchema, values, params))

    case 'null':
      return transformNullByKeyForAnyOf(schema, rootSchema, values, getParamsByKeyForAnyOf(schema, rootSchema, values, params))
  }

  throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformByKeyForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformByKeyForOneOf')
   */

  const {
    type
  } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'string':
      return transformStringByKeyForOneOf(schema, rootSchema, values, getParamsByKeyForOneOf(schema, rootSchema, values, params))

    case 'number':
      return transformNumberByKeyForOneOf(schema, rootSchema, values, getParamsByKeyForOneOf(schema, rootSchema, values, params))

    case 'array':
      return transformArrayByKeyForOneOf(schema, rootSchema, values, getParamsByKeyForOneOf(schema, rootSchema, values, params))

    case 'object':
      return transformObjectByKeyForOneOf(schema, rootSchema, values, getParamsByKeyForOneOf(schema, rootSchema, values, params))

    case 'boolean':
      return transformBooleanByKeyForOneOf(schema, rootSchema, values, getParamsByKeyForOneOf(schema, rootSchema, values, params))

    case 'null':
      return transformNullByKeyForOneOf(schema, rootSchema, values, getParamsByKeyForOneOf(schema, rootSchema, values, params))
  }

  throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformByIndexForEnum (schema, rootSchema, values, params) {
  /**
   *  log('transformByIndexForEnum')
   */

  const {
    type
  } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'string':
      return transformStringByIndexForEnum(schema, rootSchema, values, getParamsByIndexForEnum(schema, rootSchema, values, params))

    case 'number':
      return transformNumberByIndexForEnum(schema, rootSchema, values, getParamsByIndexForEnum(schema, rootSchema, values, params))

    case 'array':
      return transformArrayByIndexForEnum(schema, rootSchema, values, getParamsByIndexForEnum(schema, rootSchema, values, params))

    case 'object':
      return transformObjectByIndexForEnum(schema, rootSchema, values, getParamsByIndexForEnum(schema, rootSchema, values, params))

    case 'boolean':
      return transformBooleanByIndexForEnum(schema, rootSchema, values, getParamsByIndexForEnum(schema, rootSchema, values, params))

    case 'null':
      return transformNullByIndexForEnum(schema, rootSchema, values, getParamsByIndexForEnum(schema, rootSchema, values, params))
  }

  throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformByIndexForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('transformByIndexForAnyOf')
   */

  const {
    type
  } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'string':
      return transformStringByIndexForAnyOf(schema, rootSchema, values, getParamsByIndexForAnyOf(schema, rootSchema, values, params))

    case 'number':
      return transformNumberByIndexForAnyOf(schema, rootSchema, values, getParamsByIndexForAnyOf(schema, rootSchema, values, params))

    case 'array':
      return transformArrayByIndexForAnyOf(schema, rootSchema, values, getParamsByIndexForAnyOf(schema, rootSchema, values, params))

    case 'object':
      return transformObjectByIndexForAnyOf(schema, rootSchema, values, getParamsByIndexForAnyOf(schema, rootSchema, values, params))

    case 'boolean':
      return transformBooleanByIndexForAnyOf(schema, rootSchema, values, getParamsByIndexForAnyOf(schema, rootSchema, values, params))

    case 'null':
      return transformNullByIndexForAnyOf(schema, rootSchema, values, getParamsByIndexForAnyOf(schema, rootSchema, values, params))
  }

  throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformByIndexForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('transformByIndexForOneOf')
   */

  const {
    type
  } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'string':
      return transformStringByIndexForOneOf(schema, rootSchema, values, getParamsByIndexForOneOf(schema, rootSchema, values, params))

    case 'number':
      return transformNumberByIndexForOneOf(schema, rootSchema, values, getParamsByIndexForOneOf(schema, rootSchema, values, params))

    case 'array':
      return transformArrayByIndexForOneOf(schema, rootSchema, values, getParamsByIndexForOneOf(schema, rootSchema, values, params))

    case 'object':
      return transformObjectByIndexForOneOf(schema, rootSchema, values, getParamsByIndexForOneOf(schema, rootSchema, values, params))

    case 'boolean':
      return transformBooleanByIndexForOneOf(schema, rootSchema, values, getParamsByIndexForOneOf(schema, rootSchema, values, params))

    case 'null':
      return transformNullByIndexForOneOf(schema, rootSchema, values, getParamsByIndexForOneOf(schema, rootSchema, values, params))
  }

  throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
}

/**
 *  @param {SchemaType} [schema]
 *  @param {SchemaType} [rootSchema]
 *  @param {ValuesType} [values]
 *  @param {ParamsType} [params]
 *  @returns {ZashikiType}
 */
export function transformByKey (schema = {}, rootSchema = schema, values = {}, params = {}) {
  /**
   *  log('transformByKey')
   */

  const {
    type
  } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'string':
      return transformStringByKey(schema, rootSchema, values, params)

    case 'number':
      return transformNumberByKey(schema, rootSchema, values, params)

    case 'array':
      return transformArrayByKey(schema, rootSchema, values, params)

    case 'object':
      return transformObjectByKey(schema, rootSchema, values, params)

    case 'boolean':
      return transformBooleanByKey(schema, rootSchema, values, params)

    case 'null':
      return transformNullByKey(schema, rootSchema, values, params)
  }

  throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
}

/**
 *  @param {SchemaType} [schema]
 *  @param {SchemaType} [rootSchema]
 *  @param {ValuesType} [values]
 *  @param {ParamsType} [params]
 *  @returns {ZashikiType}
 */
export function transformByIndex (schema = {}, rootSchema = schema, values = {}, params = {}) {
  /**
   *  log('transformByIndex')
   */

  const {
    type
  } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'string':
      return transformStringByIndex(schema, rootSchema, values, params)

    case 'number':
      return transformNumberByIndex(schema, rootSchema, values, params)

    case 'array':
      return transformArrayByIndex(schema, rootSchema, values, params)

    case 'object':
      return transformObjectByIndex(schema, rootSchema, values, params)

    case 'boolean':
      return transformBooleanByIndex(schema, rootSchema, values, params)

    case 'null':
      return transformNullByIndex(schema, rootSchema, values, params)
  }

  throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
}

/**
 *  @param {SchemaType} [schema]
 *  @param {SchemaType} [rootSchema]
 *  @param {ValuesType} [values]
 *  @param {ParamsType} [params]
 *  @returns {ZashikiType}
 */
export default function toZashiki (schema = {}, rootSchema = {}, values = {}, params = {}) {
  log('toZashiki')

  const {
    type
  } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'string':
      return transformString(schema, rootSchema, values, params)

    case 'number':
      return transformNumber(schema, rootSchema, values, params)

    case 'array':
      return transformArray(schema, rootSchema, values, params)

    case 'object':
      return transformObject(schema, rootSchema, values, params)

    case 'boolean':
      return transformBoolean(schema, rootSchema, values, params)

    case 'null':
      return transformNull(schema, rootSchema, values, params)
  }

  throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
}
