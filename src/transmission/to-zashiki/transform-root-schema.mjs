/**
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.ValuesType} ValuesType
 *  @typedef {TransmissionTypes.ParamsType} ParamsType
 *
 *  @typedef {TransmissionTypes.Zashiki.ZashikiType} ZashikiType
 */

import debug from 'debug'

import {
  isArray,
  isObject,
  getSelectedItems,
  hasEnum,
  hasAnyOf,
  hasOneOf,
  hasAllOf,
  getMetaProps
} from '#transmission/transmission/common'

import {
  mapTransformStringByIndex,
  mapTransformNumberByIndex,
  mapTransformBooleanByIndex,
  mapTransformNullByIndex,
  mapTransformArrayByIndex,
  mapTransformObjectByIndex,
  mapTransformByIndex,
  getTransformByIndex,
  mapTransformByKey
} from './transform-schema.mjs'

import {
  getRenderParamsForEnum,
  getRenderParamsForAnyOf,
  getRenderParamsForOneOf,
  getRenderParamsForAllOf,
  getRenderParams
} from './render-params/root-schema/index.mjs'

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
 *  Root schema
 *
 *  "enum"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringForEnum (rootSchema, values, params) {
  /*
   *  log('transformStringForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = rootSchema // const items = getEnum(rootSchema)

  return renderStringForEnum(rootSchema, values, getRenderParamsForEnum(rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  Root schema
 *
 *  "anyOf"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringForAnyOf (rootSchema, values, params) {
  /*
   *  log('transformStringForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = rootSchema
  const items = anyOf.filter(isObject).map(mapTransformStringByIndex(rootSchema, values, Object.assign(structuredClone(params), { selectedItems, parentUri: uri })))

  return renderStringForAnyOf(rootSchema, values, getRenderParamsForAnyOf(rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  Root schema
 *
 *  "oneOf"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringForOneOf (rootSchema, values, params) {
  /*
   *  log('transformStringForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = rootSchema
  const items = oneOf.filter(isObject).map(mapTransformStringByIndex(rootSchema, values, Object.assign(structuredClone(params), { selectedItems, parentUri: uri })))

  return renderStringForOneOf(rootSchema, values, getRenderParamsForOneOf(rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  Root schema
 *
 *  "allOf"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformStringForAllOf (rootSchema, values, params) {
  /*
   *  log('transformStringForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = rootSchema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderStringForAllOf(itemSchema, values, getRenderParamsForAllOf(rootSchema, params))
}

/**
 *  Root schema
 *
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformString (rootSchema, values, params) {
  /*
   *  log('transformString')
   */

  if (hasEnum(rootSchema)) {
    return transformStringForEnum(rootSchema, values, params)
  } else {
    if (hasAnyOf(rootSchema)) {
      return transformStringForAnyOf(rootSchema, values, params)
    } else {
      if (hasOneOf(rootSchema)) {
        return transformStringForOneOf(rootSchema, values, params)
      } else {
        if (hasAllOf(rootSchema)) {
          return transformStringForAllOf(rootSchema, values, params)
        }
      }
    }
  }

  return renderString(rootSchema, values, getRenderParams(rootSchema, params))
}

/**
 *  Root schema
 *
 *  "enum"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberForEnum (rootSchema, values, params) {
  /*
   *  log('transformNumberForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = rootSchema // const items = getEnum(rootSchema)

  return renderNumberForEnum(rootSchema, values, getRenderParamsForEnum(rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  Root schema
 *
 *  "anyOf"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberForAnyOf (rootSchema, values, params) {
  /*
   *  log('transformNumberForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = rootSchema
  const items = anyOf.filter(isObject).map(mapTransformNumberByIndex(rootSchema, values, Object.assign(structuredClone(params), { selectedItems, parentUri: uri })))

  return renderNumberForAnyOf(rootSchema, values, getRenderParamsForAnyOf(rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  Root schema
 *
 *  "oneOf"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberForOneOf (rootSchema, values, params) {
  /*
   *  log('transformNumberForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = rootSchema
  const items = oneOf.filter(isObject).map(mapTransformNumberByIndex(rootSchema, values, Object.assign(structuredClone(params), { selectedItems, parentUri: uri })))

  return renderNumberForOneOf(rootSchema, values, getRenderParamsForOneOf(rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  Root schema
 *
 *  "allOf"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumberForAllOf (rootSchema, values, params) {
  /*
   *  log('transformNumberForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = rootSchema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderNumberForAllOf(itemSchema, values, getRenderParamsForAllOf(rootSchema, params))
}

/**
 *  Root schema
 *
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.1
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNumber (rootSchema, values, params) {
  /*
   *  log('transformNumber')
   */

  if (hasEnum(rootSchema)) {
    return transformNumberForEnum(rootSchema, values, params)
  } else {
    if (hasAnyOf(rootSchema)) {
      return transformNumberForAnyOf(rootSchema, values, params)
    } else {
      if (hasOneOf(rootSchema)) {
        return transformNumberForOneOf(rootSchema, values, params)
      } else {
        if (hasAllOf(rootSchema)) {
          return transformNumberForAllOf(rootSchema, values, params)
        }
      }
    }
  }

  return renderNumber(rootSchema, values, getRenderParams(rootSchema, params))
}

/**
 *  Root schema
 *
 *  "enum"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayForEnum (rootSchema, values, params) {
  /*
   *  log('renderArrayForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = rootSchema // const items = getEnum(rootSchema)

  return renderArrayForEnum(rootSchema, values, getRenderParamsForEnum(rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  Root schema
 *
 *  "anyOf"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayForAnyOf (rootSchema, values, params) {
  /*
   *  log('transformArrayForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = rootSchema
  const items = anyOf.filter(isObject).map(mapTransformArrayByIndex(rootSchema, values, Object.assign(structuredClone(params), { selectedItems, parentUri: uri })))

  return renderArrayForAnyOf(rootSchema, values, getRenderParamsForAnyOf(rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  Root schema
 *
 *  "oneOf"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayForOneOf (rootSchema, values, params) {
  /*
   *  log('transformArrayForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = rootSchema
  const items = oneOf.filter(isObject).map(mapTransformArrayByIndex(rootSchema, values, Object.assign(structuredClone(params), { selectedItems, parentUri: uri })))

  return renderArrayForOneOf(rootSchema, values, getRenderParamsForOneOf(rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  Root schema
 *
 *  "allOf"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArrayForAllOf (rootSchema, values, params) {
  /*
   *  log('transformArrayForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = rootSchema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderArrayForAllOf(itemSchema, values, getRenderParamsForAllOf(rootSchema, params))
}

/**
 *  Root schema
 *
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformArray (rootSchema, values, params) {
  /*
   *  log('transformArray')
   */

  if (hasEnum(rootSchema)) {
    return transformArrayForEnum(rootSchema, values, params)
  } else {
    if (hasAnyOf(rootSchema)) {
      return transformArrayForAnyOf(rootSchema, values, params)
    } else {
      if (hasOneOf(rootSchema)) {
        return transformArrayForOneOf(rootSchema, values, params)
      } else {
        if (hasAllOf(rootSchema)) {
          return transformArrayForAllOf(rootSchema, values, params)
        }
      }
    }
  }

  const {
    items = [] // array or object
  } = rootSchema

  if (isArray(items)) {
    const fields = (
      items.map(mapTransformByIndex(rootSchema, values, Object.assign(structuredClone(params), { parentUri: '#/' })))
    )

    return renderArray(rootSchema, values, getRenderParams(rootSchema, Object.assign(params, { fields })))
  } else {
    if (isObject(items)) {
      const fields = [
        getTransformByIndex(items, rootSchema, values, Object.assign(structuredClone(params), { parentUri: '#/' }))
      ]

      return renderArray(rootSchema, values, getRenderParams(rootSchema, Object.assign(params, { fields })))
    }
  }

  throw new Error('Invalid `array`')
}

/**
 *  Root schema
 *
 *  "enum"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectForEnum (rootSchema, values, params) {
  /*
   *  log('renderObjectForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = rootSchema // const items = getEnum(rootSchema)

  return renderObjectForEnum(rootSchema, values, getRenderParamsForEnum(rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  Root schema
 *
 *  "anyOf"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectForAnyOf (rootSchema, values, params) {
  /*
   *  log('transformObjectForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = rootSchema
  const items = anyOf.filter(isObject).map(mapTransformObjectByIndex(rootSchema, values, Object.assign(structuredClone(params), { selectedItems, parentUri: uri })))

  return renderObjectForAnyOf(rootSchema, values, getRenderParamsForAnyOf(rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  Root schema
 *
 *  "oneOf"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectForOneOf (rootSchema, values, params) {
  /*
   *  log('transformObjectForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = rootSchema
  const items = oneOf.filter(isObject).map(mapTransformObjectByIndex(rootSchema, values, Object.assign(structuredClone(params), { selectedItems, parentUri: uri })))

  return renderObjectForOneOf(rootSchema, values, getRenderParamsForOneOf(rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  Root schema
 *
 *  "allOf"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObjectForAllOf (rootSchema, values, params) {
  /*
   *  log('transformObjectForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = rootSchema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderObjectForAllOf(itemSchema, values, getRenderParamsForAllOf(rootSchema, params))
}

/**
 *  Root schema
 *
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformObject (rootSchema, values, params) {
  /*
   *  log('transformObject')
   */

  if (hasEnum(rootSchema)) {
    return transformObjectForEnum(rootSchema, values, params)
  } else {
    if (hasAnyOf(rootSchema)) {
      return transformObjectForAnyOf(rootSchema, values, params)
    } else {
      if (hasOneOf(rootSchema)) {
        return transformObjectForOneOf(rootSchema, values, params)
      } else {
        if (hasAllOf(rootSchema)) {
          return transformObjectForAllOf(rootSchema, values, params)
        }
      }
    }
  }

  const {
    properties = {},
    required = []
  } = rootSchema

  const {
    uri = '#/'
  } = params

  const fields = (
    Object
      .entries(properties)
      .map(mapTransformByKey(rootSchema, values, Object.assign(structuredClone(params), { parentUri: uri, required })))
  )

  return renderObject(rootSchema, values, getRenderParams(rootSchema, Object.assign(params, { fields })))
}

/**
 *  Root schema
 *
 *  "enum"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanForEnum (rootSchema, values, params) {
  /*
   *  log('transformBooleanForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = rootSchema // const items = getEnum(rootSchema)

  return renderBooleanForEnum(rootSchema, values, getRenderParamsForEnum(rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  Root schema
 *
 *  "anyOf"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanForAnyOf (rootSchema, values, params) {
  /*
   *  log('transformBooleanForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = rootSchema
  const items = anyOf.filter(isObject).map(mapTransformBooleanByIndex(rootSchema, values, Object.assign(structuredClone(params), { selectedItems, parentUri: uri })))

  return renderBooleanForAnyOf(rootSchema, values, getRenderParamsForAnyOf(rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  Root schema
 *
 *  "oneOf"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanForOneOf (rootSchema, values, params) {
  /*
   *  log('transformBooleanForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = rootSchema
  const items = oneOf.filter(isObject).map(mapTransformBooleanByIndex(rootSchema, values, Object.assign(structuredClone(params), { selectedItems, parentUri: uri })))

  return renderBooleanForOneOf(rootSchema, values, getRenderParamsForOneOf(rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  Root schema
 *
 *  "allOf"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBooleanForAllOf (rootSchema, values, params) {
  /*
   *  log('transformBooleanForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = rootSchema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderBooleanForAllOf(itemSchema, values, getRenderParamsForAllOf(rootSchema, params))
}

/**
 *  Root schema
 *
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformBoolean (rootSchema, values, params) {
  /*
   *  log('transformBoolean')
   */

  if (hasEnum(rootSchema)) {
    return transformBooleanForEnum(rootSchema, values, params)
  } else {
    if (hasAnyOf(rootSchema)) {
      return transformBooleanForAnyOf(rootSchema, values, params)
    } else {
      if (hasOneOf(rootSchema)) {
        return transformBooleanForOneOf(rootSchema, values, params)
      } else {
        if (hasAllOf(rootSchema)) {
          return transformBooleanForAllOf(rootSchema, values, params)
        }
      }
    }
  }

  return renderBoolean(rootSchema, values, getRenderParams(rootSchema, params))
}

/**
 *  Root schema
 *
 *  "enum"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullForEnum (rootSchema, values, params) {
  /*
   *  log('transformNullForEnum')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { enum: items = [] } = rootSchema // const items = getEnum(rootSchema)

  return renderNullForEnum(rootSchema, values, getRenderParamsForEnum(rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  Root schema
 *
 *  "anyOf"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullForAnyOf (rootSchema, values, params) {
  /*
   *  log('transformNullForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { anyOf = [] } = rootSchema
  const items = anyOf.filter(isObject).map(mapTransformNullByIndex(rootSchema, values, Object.assign(structuredClone(params), { selectedItems, parentUri: uri })))

  return renderNullForAnyOf(rootSchema, values, getRenderParamsForAnyOf(rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  Root schema
 *
 *  "oneOf"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullForOneOf (rootSchema, values, params) {
  /*
   *  log('transformNullForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const { oneOf = [] } = rootSchema
  const items = oneOf.filter(isObject).map(mapTransformNullByIndex(rootSchema, values, Object.assign(structuredClone(params), { selectedItems, parentUri: uri })))

  return renderNullForOneOf(rootSchema, values, getRenderParamsForOneOf(rootSchema, Object.assign(params, { selectedItems, items })))
}

/**
 *  Root schema
 *
 *  "allOf"
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNullForAllOf (rootSchema, values, params) {
  /*
   *  log('transformNullForAllOf')
   */

  const {
    allOf = [],
    ...schemaProps
  } = rootSchema

  /**
   *  @type {SchemaType}
   */
  const itemSchema = allOf.filter(isObject).reduce(toSchema, structuredClone(schemaProps)) // initialise with `rest`

  return renderNullForAllOf(itemSchema, values, getRenderParamsForAllOf(rootSchema, params))
}

/**
 *  Root schema
 *
 *  @link https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
 *
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function transformNull (rootSchema, values, params) {
  /*
   *  log('transformNull')
   */

  if (hasEnum(rootSchema)) {
    return transformNullForEnum(rootSchema, values, params)
  } else {
    if (hasAnyOf(rootSchema)) {
      return transformNullForAnyOf(rootSchema, values, params)
    } else {
      if (hasOneOf(rootSchema)) {
        return transformNullForOneOf(rootSchema, values, params)
      } else {
        if (hasAllOf(rootSchema)) {
          return transformNullForAllOf(rootSchema, values, params)
        }
      }
    }
  }

  return renderNull(rootSchema, values, getRenderParams(rootSchema, params))
}

/**
 *  @param {SchemaType} [rootSchema]
 *  @param {ValuesType} [values]
 *  @param {ParamsType} [params]
 *  @returns {ZashikiType}
 */
export default function toZashiki (rootSchema = {}, values = {}, params = {}) {
  log('toZashiki')

  const {
    type
  } = rootSchema

  /**
   *  @link https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
   */
  switch (type) {
    case 'string':
      return transformString(rootSchema, values, params)

    case 'number':
      return transformNumber(rootSchema, values, params)

    case 'array':
      return transformArray(rootSchema, values, params)

    case 'object':
      return transformObject(rootSchema, values, params)

    case 'boolean':
      return transformBoolean(rootSchema, values, params)

    case 'null':
      return transformNull(rootSchema, values, params)
  }

  throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
}
