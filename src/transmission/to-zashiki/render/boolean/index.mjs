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
  getTitle,
  getDescription,
  isParentUri,
  getMetaProps,
  getMetaDefaultValue,
  getMetaValue,
  getElementsFieldPropsForEnum,
  getElementsFieldPropsForAnyOf,
  getElementsFieldPropsForOneOf,
  getElementsFieldProps,
  getElementsFieldValue
} from '#transmission/transmission/common'

const log = debug('shinkansen-transmission/to-zashiki/render/boolean')

log('`shinkansen` is awake')

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiBooleanMetaType}
 */
export function renderBooleanMetaForEnum (params, uri) {
  /**
   *  log('renderBooleanMetaForEnum')
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
        type: 'boolean'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiBooleanMetaType}
 */
export function renderBooleanMetaForAnyOf (params, uri) {
  /**
   *  log('renderBooleanMetaForAnyOf')
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
        type: 'boolean'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiBooleanMetaType}
 */
export function renderBooleanMetaForOneOf (params, uri) {
  /**
   *  log('renderBooleanMetaForOneOf')
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
        type: 'boolean'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      metaProps
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiBooleanMetaType}
 */
export function getBooleanMetaForAllOf (schema, values, params, uri) {
  /**
   *  log('renderBooleanMetaForAllOf')
   */

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
        type: 'boolean'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
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
 *  @returns {ZashikiBooleanMetaType}
 */
export function renderBooleanMetaForAllOf (schema, values, params, uri) {
  /**
   *  log('renderBooleanMetaForAllOf')
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
        getBooleanMetaForAllOf(schema, values, params, uri),
        isArray(selectedItems) ? { selectedItems } : {}
      )
    )
  }

  return (
    getBooleanMetaForAllOf(schema, values, params, uri)
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiBooleanMetaType}
 */
export function getBooleanMeta (schema, values, params, uri) {
  /**
   *  log('getBooleanMeta')
   */

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
        type: 'boolean'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
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
 *  @returns {ZashikiBooleanMetaType}
 */
export function renderBooleanMeta (schema, values, params, uri) {
  /**
   *  log('renderBooleanMeta')
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
        getBooleanMeta(schema, values, params, uri),
        isArray(selectedItems) ? { selectedItems } : {}
      )
    )
  }

  return (
    getBooleanMeta(schema, values, params, uri)
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {EnumType}
 */
export function renderBooleanElementsFieldForEnum (field, params, uri) {
  /**
   *  log('renderBooleanElementsFieldForEnum')
   */

  return (
    Object.assign(
      field,
      getElementsFieldPropsForEnum(params, uri),
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
 *  @returns {AnyOfType}
 */
export function renderBooleanElementsFieldForAnyOf (field, params, uri) {
  /**
   *  log('renderBooleanElementsFieldForAnyOf')
   */

  return (
    Object.assign(
      field,
      getElementsFieldPropsForAnyOf(params, uri),
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
 *  @returns {OneOfType}
 */
export function renderBooleanElementsFieldForOneOf (field, params, uri) {
  /**
   *  log('renderBooleanElementsFieldForOneOf')
   */

  return (
    Object.assign(
      field,
      getElementsFieldPropsForOneOf(params, uri),
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
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getBooleanElementsFieldForAllOf (field, schema, values, params, uri) {
  /**
   *  log('getBooleanElementsFieldForAllOf')
   */

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  return (
    Object.assign(
      field,
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
 *  @returns {FieldType}
 */
export function renderBooleanElementsFieldForAllOf (field, schema, values, params, uri) {
  /**
   *  log('renderBooleanElementsFieldForAllOf')
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
        getBooleanElementsFieldForAllOf(field, schema, values, params, uri),
        isArray(selectedItems) ? { selectedItems } : {},
        {
          id: uri
        }
      )
    )
  }

  return (
    Object.assign(
      getBooleanElementsFieldForAllOf(field, schema, values, params, uri),
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
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getBooleanElementsField (field, schema, values, params, uri) {
  /**
   *  log('getBooleanElementsField')
   */

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  return (
    Object.assign(
      field,
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
 *  @returns {FieldType}
 */
export function renderBooleanElementsField (field, schema, values, params, uri) {
  /**
   *  log('renderBooleanElementsField')
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
        getBooleanElementsField(field, schema, values, params, uri),
        isArray(selectedItems) ? { selectedItems } : {},
        {
          id: uri
        }
      )
    )
  }

  return (
    Object.assign(
      getBooleanElementsField(field, schema, values, params, uri),
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
export function getBooleanElements (elements, schema) {
  /**
   *  log('getBooleanElements')
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
 *  @returns {ZashikiBooleanElementsType}
 */
export function renderBooleanElementsForEnum (schema, params, uri) {
  /**
   *  log('renderBooleanElementsForEnum')
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
      getBooleanElements(elements, schema),
      {
        enum: renderBooleanElementsFieldForEnum(field, params, uri)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiBooleanElementsType}
 */
export function renderBooleanElementsForAnyOf (schema, params, uri) {
  /**
   *  log('renderBooleanElementsForAnyOf')
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
      getBooleanElements(elements, schema),
      {
        anyOf: renderBooleanElementsFieldForAnyOf(field, params, uri)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiBooleanElementsType}
 */
export function renderBooleanElementsForOneOf (schema, params, uri) {
  /**
   *  log('renderBooleanElementsForOneOf')
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
      getBooleanElements(elements, schema),
      {
        oneOf: renderBooleanElementsFieldForOneOf(field, params, uri)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiBooleanElementsType}
 */
export function renderBooleanElementsForAllOf (schema, values, params, uri) {
  /**
   *  log('renderBooleanElementsForAllOf')
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
      getBooleanElements(elements, schema),
      {
        field: renderBooleanElementsFieldForAllOf(field, schema, values, params, uri)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiBooleanElementsType}
 */
export function renderBooleanElements (schema, values, params, uri) {
  /**
   *  log('renderBooleanElements')
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
      getBooleanElements(elements, schema),
      {
        field: renderBooleanElementsField(field, schema, values, params, uri)
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
export function renderBooleanForEnum (schema, values, params) {
  /**
   *  log('renderBooleanForEnum')
   */

  const {
    uri = '#/'
  } = params

  const meta = renderBooleanMetaForEnum(params, uri)
  const elements = renderBooleanElementsForEnum(schema, params, uri)

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
export function renderBooleanForAnyOf (schema, values, params) {
  /**
   *  log('renderBooleanForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const meta = renderBooleanMetaForAnyOf(params, uri)
  const elements = renderBooleanElementsForAnyOf(schema, params, uri)

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
export function renderBooleanForOneOf (schema, values, params) {
  /**
   *  log('renderBooleanForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const meta = renderBooleanMetaForOneOf(params, uri)
  const elements = renderBooleanElementsForOneOf(schema, params, uri)

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
export function renderBooleanForAllOf (schema, values, params) {
  /**
   *  log('renderBooleanForAllOf')
   */

  const {
    uri = '#/'
  } = params

  const meta = renderBooleanMetaForAllOf(schema, values, params, uri)
  const elements = renderBooleanElementsForAllOf(schema, values, params, uri)

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
export function renderBoolean (schema, values, params) {
  /**
   *  log('renderBoolean')
   */

  const {
    uri = '#/'
  } = params

  const meta = renderBooleanMeta(schema, values, params, uri)
  const elements = renderBooleanElements(schema, values, params, uri)

  return {
    meta,
    elements
  }
}
