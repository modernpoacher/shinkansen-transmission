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
  getTitle,
  getDescription,
  isParentUri,
  getMinItems,
  getMaxItems,
  getHasUniqueItems,
  getMinContains,
  getMaxContains,
  getMetaProps,
  getElementsFieldPropsForEnum,
  getElementsFieldPropsForAnyOf,
  getElementsFieldPropsForOneOf,
  getElementsFieldPropsForAllOf
} from '#transmission/transmission/common'

const log = debug('shinkansen-transmission/to-zashiki/render/array')

log('`shinkansen` is awake')

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {ZashikiArrayMetaType}
 */
export function renderArrayMetaForEnum (params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayMetaForEnum')
   */

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
        type: 'array'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minItems,
      maxItems,
      hasUniqueItems,
      minContains,
      maxContains,
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {ZashikiArrayMetaType}
 */
export function renderArrayMetaForAnyOf (params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayMetaForAnyOf')
   */

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
        type: 'array'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minItems,
      maxItems,
      hasUniqueItems,
      minContains,
      maxContains,
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {ZashikiArrayMetaType}
 */
export function renderArrayMetaForOneOf (params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayMetaForOneOf')
   */

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
        type: 'array'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minItems,
      maxItems,
      hasUniqueItems,
      minContains,
      maxContains,
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {ZashikiArrayMetaType}
 */
export function renderArrayMetaForAllOf (params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayMetaForAllOf')
   */

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
        type: 'array'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minItems,
      maxItems,
      hasUniqueItems,
      minContains,
      maxContains,
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {ZashikiArrayMetaType}
 */
export function renderArrayMeta (params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayMeta')
   */

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
        type: 'array'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minItems,
      maxItems,
      hasUniqueItems,
      minContains,
      maxContains,
      metaProps
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {EnumType}
 */
export function renderArrayElementsFieldForEnum (field, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayElementsFieldForEnum')
   */

  const fieldProps = getElementsFieldPropsForEnum(params, uri)

  return (
    Object.assign(
      field,
      minItems,
      maxItems,
      hasUniqueItems,
      minContains,
      maxContains,
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
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {AnyOfType}
 */
export function renderArrayElementsFieldForAnyOf (field, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayElementsFieldForAnyOf')
   */

  const fieldProps = getElementsFieldPropsForAnyOf(params, uri)

  return (
    Object.assign(
      field,
      minItems,
      maxItems,
      hasUniqueItems,
      minContains,
      maxContains,
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
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {OneOfType}
 */
export function renderArrayElementsFieldForOneOf (field, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayElementsFieldForOneOf')
   */

  const fieldProps = getElementsFieldPropsForOneOf(params, uri)

  return (
    Object.assign(
      field,
      minItems,
      maxItems,
      hasUniqueItems,
      minContains,
      maxContains,
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
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {FieldType}
 */
export function renderArrayElementsFieldForAllOf (field, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayElementsFieldForAllOf')
   */

  const fieldProps = getElementsFieldPropsForAllOf(params, uri)

  return (
    Object.assign(
      field,
      minItems,
      maxItems,
      hasUniqueItems,
      minContains,
      maxContains,
      fieldProps,
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
export function getArrayElements (elements, schema) {
  /**
   *  log('getArrayElements')
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
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {ZashikiArrayElementsType}
 */
export function renderArrayElementsForEnum (schema, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayElementsForEnum')
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
      getArrayElements(elements, schema),
      {
        enum: renderArrayElementsFieldForEnum(field, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {ZashikiArrayElementsType}
 */
export function renderArrayElementsForAnyOf (schema, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayElementsForAnyOf')
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
      getArrayElements(elements, schema),
      {
        anyOf: renderArrayElementsFieldForAnyOf(field, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {ZashikiArrayElementsType}
 */
export function renderArrayElementsForOneOf (schema, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayElementsForOneOf')
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
      getArrayElements(elements, schema),
      {
        oneOf: renderArrayElementsFieldForOneOf(field, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minItems?: number }} minItems
 *  @param {{ maxItems?: number }} maxItems
 *  @param {{ hasUniqueItems?: boolean }} hasUniqueItems
 *  @param {{ minContains?: number }} minContains
 *  @param {{ maxContains?: number }} maxContains
 *  @returns {ZashikiArrayElementsType}
 */
export function renderArrayElementsForAllOf (schema, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains) {
  /**
   *  log('renderArrayElementsForAllOf')
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
      getArrayElements(elements, schema),
      {
        field: renderArrayElementsFieldForAllOf(field, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @returns {ZashikiArrayElementsType}
 */
export function renderArrayElements (schema, params) {
  /**
   *  log('renderArrayElements')
   */

  /**
   *  @type {ObjectLiteralType}
   */
  const elements = {}

  const {
    fields = []
  } = params

  return (
    Object.assign(
      getArrayElements(elements, schema),
      {
        fields
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
 *  @returns {ZashikiType}
 */
export function renderArrayForEnum (schema, values, params) {
  /**
   *  log('renderArrayForEnum')
   */

  const {
    uri = '#/'
  } = params

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const meta = renderArrayMetaForEnum(params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)
  const elements = renderArrayElementsForEnum(schema, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)

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
 *  @returns {ZashikiType}
 */
export function renderArrayForAnyOf (schema, values, params) {
  /**
   *  log('renderArrayForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const meta = renderArrayMetaForAnyOf(params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)
  const elements = renderArrayElementsForAnyOf(schema, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)

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
 *  @returns {ZashikiType}
 */
export function renderArrayForOneOf (schema, values, params) {
  /**
   *  log('renderArrayForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const meta = renderArrayMetaForOneOf(params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)
  const elements = renderArrayElementsForOneOf(schema, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)

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
 *  @returns {ZashikiType}
 */
export function renderArrayForAllOf (schema, values, params) {
  /**
   *  log('renderArrayForAllOf')
   */

  const {
    uri = '#/'
  } = params

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const meta = renderArrayMetaForAllOf(params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)
  const elements = renderArrayElementsForAllOf(schema, params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)

  return {
    meta,
    elements
  }
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiType}
 */
export function renderArray (schema, values, params) {
  /**
   *  log('renderArray')
   */

  const {
    uri = '#/'
  } = params

  const minItems = getMinItems(schema)
  const maxItems = getMaxItems(schema)
  const hasUniqueItems = getHasUniqueItems(schema)
  const maxContains = getMaxContains(schema)
  const minContains = getMinContains(schema)

  const meta = renderArrayMeta(params, uri, minItems, maxItems, hasUniqueItems, minContains, maxContains)
  const elements = renderArrayElements(schema, params)

  return {
    meta,
    elements
  }
}
