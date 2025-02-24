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
 *  @typedef {TransmissionTypes.Zashiki.NumberMetaType} ZashikiNumberMetaType
 *  @typedef {TransmissionTypes.Zashiki.NumberElementsType} ZashikiNumberElementsType
 *  @typedef {TransmissionTypes.Zashiki.NumberType} ZashikiNumberType
 */

import debug from 'debug'

import {
  isArray,
  getTitle,
  getDescription,
  isParentUri,
  getMin,
  getMax,
  getIsExclusiveMin,
  getIsExclusiveMax,
  getStep,
  getMetaProps,
  getMetaDefaultValue,
  getMetaValue,
  getElementsFieldPropsForEnum,
  getElementsFieldPropsForAnyOf,
  getElementsFieldPropsForOneOf,
  getElementsFieldProps,
  getElementsFieldValue
} from '#transmission/transmission/common'

const log = debug('shinkansen-transmission/to-zashiki/render/number')

log('`shinkansen` is awake')

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberMetaType}
 */
export function renderNumberMetaForEnum (schema, params, uri, min, max, step) {
  /**
   *  log('renderNumberMetaForEnum')
   */

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'number'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      min,
      max,
      step,
      isExclusiveMin,
      isExclusiveMax,
      metaProps
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberMetaType}
 */
export function renderNumberMetaForAnyOf (schema, params, uri, min, max, step) {
  /**
   *  log('renderNumberMetaForAnyOf')
   */

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'number'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      min,
      max,
      step,
      isExclusiveMin,
      isExclusiveMax,
      metaProps
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberMetaType}
 */
export function renderNumberMetaForOneOf (schema, params, uri, min, max, step) {
  /**
   *  log('renderNumberMetaForOneOf')
   */

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'number'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      min,
      max,
      step,
      isExclusiveMin,
      isExclusiveMax,
      metaProps
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberMetaType}
 */
export function getNumberMetaForAllOf (schema, values, params, uri, min, max, step) {
  /**
   *  log('getNumberMetaForAllOf')
   */

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const metaDefaultValue = getMetaDefaultValue(schema) // , uri)
  const metaValue = getMetaValue(values, uri, schema)

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'number'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      min,
      max,
      step,
      isExclusiveMin,
      isExclusiveMax,
      metaDefaultValue,
      metaValue,
      metaProps
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberMetaType}
 */
export function renderNumberMetaForAllOf (schema, values, params, uri, min, max, step) {
  /**
   *  log('renderNumberMetaForAllOf')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#'
  } = getMetaProps(params, uri)

  if (isParentUri(parentUri, uri)) {
    const {
      selectedItems
    } = getMetaProps(params, parentUri)

    return (
      Object.assign(
        getNumberMetaForAllOf(schema, values, params, uri, min, max, step),
        isArray(selectedItems) ? { selectedItems } : {}
      )
    )
  }

  return (
    getNumberMetaForAllOf(schema, values, params, uri, min, max, step)
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberMetaType}
 */
export function getNumberMeta (schema, values, params, uri, min, max, step) {
  /**
   *  log('getNumberMeta')
   */

  const isExclusiveMin = getIsExclusiveMin(schema)
  const isExclusiveMax = getIsExclusiveMax(schema)

  const metaDefaultValue = getMetaDefaultValue(schema) // , uri)
  const metaValue = getMetaValue(values, uri, schema)

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#',
    ...metaProps
  } = getMetaProps(params, uri)

  return (
    Object.assign(
      {
        uri,
        type: 'number'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      min,
      max,
      step,
      isExclusiveMin,
      isExclusiveMax,
      metaDefaultValue,
      metaValue,
      metaProps
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberMetaType}
 */
export function renderNumberMeta (schema, values, params, uri, min, max, step) {
  /**
   *  log('renderNumberMeta')
   */

  /**
   *  @type {{ parentUri?: string }}
   */
  const {
    parentUri = '#'
  } = getMetaProps(params, uri)

  if (isParentUri(parentUri, uri)) {
    const {
      selectedItems
    } = getMetaProps(params, parentUri)

    return (
      Object.assign(
        getNumberMeta(schema, values, params, uri, min, max, step),
        isArray(selectedItems) ? { selectedItems } : {}
      )
    )
  }

  return (
    getNumberMeta(schema, values, params, uri, min, max, step)
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {EnumType}
 */
export function renderNumberElementsFieldForEnum (field, params, uri, min, max, step) {
  /**
   *  log('renderNumberElementsFieldForEnum')
   */

  const fieldProps = getElementsFieldPropsForEnum(params, uri)

  return (
    Object.assign(
      field,
      min,
      max,
      step,
      fieldProps,
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {AnyOfType}
 */
export function renderNumberElementsFieldForAnyOf (field, params, uri, min, max, step) {
  /**
   *  log('renderNumberElementsFieldForAnyOf')
   */

  const fieldProps = getElementsFieldPropsForAnyOf(params, uri)

  return (
    Object.assign(
      field,
      min,
      max,
      step,
      fieldProps,
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {OneOfType}
 */
export function renderNumberElementsFieldForOneOf (field, params, uri, min, max, step) {
  /**
   *  log('renderNumberElementsFieldForOneOf')
   */

  const fieldProps = getElementsFieldPropsForOneOf(params, uri)

  return (
    Object.assign(
      field,
      min,
      max,
      step,
      fieldProps,
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getNumberElementsFieldForAllOf (field, schema, values, params, uri, min, max, step) {
  /**
   *  log('getNumberElementsFieldForAllOf')
   */

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  return (
    Object.assign(
      field,
      min,
      max,
      step,
      fieldValue,
      fieldProps
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {FieldType}
 */
export function renderNumberElementsFieldForAllOf (field, schema, values, params, uri, min, max, step) {
  /**
   *  log('renderNumberElementsFieldForAllOf')
   */

  const {
    parentUri = '#'
  } = params

  if (isParentUri(parentUri, uri)) {
    const {
      selectedItems
    } = getMetaProps(params, parentUri)

    return (
      Object.assign(
        getNumberElementsFieldForAllOf(field, schema, values, params, uri, min, max, step),
        isArray(selectedItems) ? { selectedItems } : {},
        {
          id: uri
        }
      )
    )
  }

  return (
    Object.assign(
      getNumberElementsFieldForAllOf(field, schema, values, params, uri, min, max, step),
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getNumberElementsField (field, schema, values, params, uri, min, max, step) {
  /**
   *  log('getNumberElementsField')
   */

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  return (
    Object.assign(
      field,
      min,
      max,
      step,
      fieldValue,
      fieldProps
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {FieldType}
 */
export function renderNumberElementsField (field, schema, values, params, uri, min, max, step) {
  /**
   *  log('renderNumberElementsField')
   */

  const {
    parentUri = '#'
  } = params

  if (isParentUri(parentUri, uri)) {
    const {
      selectedItems
    } = getMetaProps(params, parentUri)

    return (
      Object.assign(
        getNumberElementsField(field, schema, values, params, uri, min, max, step),
        isArray(selectedItems) ? { selectedItems } : {},
        {
          id: uri
        }
      )
    )
  }

  return (
    Object.assign(
      getNumberElementsField(field, schema, values, params, uri, min, max, step),
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} elements
 *  @param {SchemaType} schema
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getNumberElements (elements, schema) {
  /**
   *  log('getNumberElements')
   */

  return (
    Object.assign(
      elements,
      getTitle(schema),
      getDescription(schema)
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberElementsType}
 */
export function renderNumberElementsForEnum (schema, params, uri, min, max, step) {
  /**
   *  log('renderNumberElementsForEnum')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getNumberElements(elements, schema),
      {
        enum: renderNumberElementsFieldForEnum(field, params, uri, min, max, step)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberElementsType}
 */
export function renderNumberElementsForAnyOf (schema, params, uri, min, max, step) {
  /**
   *  log('renderNumberElementsForAnyOf')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getNumberElements(elements, schema),
      {
        anyOf: renderNumberElementsFieldForAnyOf(field, params, uri, min, max, step)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberElementsType}
 */
export function renderNumberElementsForOneOf (schema, params, uri, min, max, step) {
  /**
   *  log('renderNumberElementsForOneOf')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getNumberElements(elements, schema),
      {
        oneOf: renderNumberElementsFieldForOneOf(field, params, uri, min, max, step)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberElementsType}
 */
export function renderNumberElementsForAllOf (schema, values, params, uri, min, max, step) {
  /**
   *  log('renderNumberElementsForAllOf')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getNumberElements(elements, schema),
      {
        field: renderNumberElementsFieldForAllOf(field, schema, values, params, uri, min, max, step)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ min?: number }} min
 *  @param {{ max?: number }} max
 *  @param {{ step?: number }} step
 *  @returns {ZashikiNumberElementsType}
 */
export function renderNumberElements (schema, values, params, uri, min, max, step) {
  /**
   *  log('renderNumberElements')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  /**
   *  @type {ObjectLiteralType}
   */
  const field = {}

  return (
    Object.assign(
      getNumberElements(elements, schema),
      {
        field: renderNumberElementsField(field, schema, values, params, uri, min, max, step)
      }
    )
  )
}

/**
 *  "enum"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiNumberType}
 */
export function renderNumberForEnum (schema, values, params) {
  /**
   *  log('renderNumberForEnum')
   */

  const {
    uri = '#/'
  } = params

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const meta = renderNumberMetaForEnum(schema, params, uri, min, max, step)
  const elements = renderNumberElementsForEnum(schema, params, uri, min, max, step)

  return {
    meta,
    elements
  }
}

/**
 *  "anyOf"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiNumberType}
 */
export function renderNumberForAnyOf (schema, values, params) {
  /**
   *  log('renderNumberForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const meta = renderNumberMetaForAnyOf(schema, params, uri, min, max, step)
  const elements = renderNumberElementsForAnyOf(schema, params, uri, min, max, step)

  return {
    meta,
    elements
  }
}

/**
 *  "oneOf"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiNumberType}
 */
export function renderNumberForOneOf (schema, values, params) {
  /**
   *  log('renderNumberForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const meta = renderNumberMetaForOneOf(schema, params, uri, min, max, step)
  const elements = renderNumberElementsForOneOf(schema, params, uri, min, max, step)

  return {
    meta,
    elements
  }
}

/**
 *  "allOf"
 *
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiNumberType}
 */
export function renderNumberForAllOf (schema, values, params) {
  /**
   *  log('renderNumberForAllOf')
   */

  const {
    uri = '#/'
  } = params

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const meta = renderNumberMetaForAllOf(schema, values, params, uri, min, max, step)
  const elements = renderNumberElementsForAllOf(schema, values, params, uri, min, max, step)

  return {
    meta,
    elements
  }
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiNumberType}
 */
export function renderNumber (schema, values, params) {
  /**
   *  log('renderNumber')
   */

  const {
    uri = '#/'
  } = params

  const min = getMin(schema)
  const max = getMax(schema)
  const step = getStep(schema)

  const meta = renderNumberMeta(schema, values, params, uri, min, max, step)
  const elements = renderNumberElements(schema, values, params, uri, min, max, step)

  return {
    meta,
    elements
  }
}
