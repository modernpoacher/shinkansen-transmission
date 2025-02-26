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
 *  @typedef {TransmissionTypes.Zashiki.StringMetaType} ZashikiStringMetaType
 *  @typedef {TransmissionTypes.Zashiki.StringElementsType} ZashikiStringElementsType
 *  @typedef {TransmissionTypes.Zashiki.StringType} ZashikiStringType
 */

import debug from 'debug'

import {
  isArray,
  getTitle,
  getDescription,
  isParentUri,
  getMinLength,
  getMaxLength,
  getPattern,
  getMetaProps,
  getMetaDefaultValue,
  getMetaValue,
  getElementsFieldPropsForEnum,
  getElementsFieldPropsForAnyOf,
  getElementsFieldPropsForOneOf,
  getElementsFieldProps,
  getElementsFieldValue
} from '#transmission/transmission/common'

const log = debug('shinkansen-transmission/to-zashiki/render/string')

log('`shinkansen` is awake')

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringMetaType}
 */
export function renderStringMetaForEnum (params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringMetaForEnum')
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
        type: 'string'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minLength,
      maxLength,
      pattern,
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringMetaType}
 */
export function renderStringMetaForAnyOf (params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringMetaForAnyOf')
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
        type: 'string'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minLength,
      maxLength,
      pattern,
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringMetaType}
 */
export function renderStringMetaForOneOf (params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringMetaForOneOf')
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
        type: 'string'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minLength,
      maxLength,
      pattern,
      metaProps
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringMetaType}
 */
export function getStringMetaForAllOf (schema, values, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('getStringMetaForAllOf)
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
        type: 'string'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minLength,
      maxLength,
      pattern,
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
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringMetaType}
 */
export function renderStringMetaForAllOf (schema, values, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringMetaForAllOf')
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
        getStringMetaForAllOf(schema, values, params, uri, minLength, maxLength, pattern),
        isArray(selectedItems) ? { selectedItems } : {}
      )
    )
  }

  return (
    getStringMetaForAllOf(schema, values, params, uri, minLength, maxLength, pattern)
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringMetaType}
 */
export function getStringMeta (schema, values, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('getStringMeta')
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
        type: 'string'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minLength,
      maxLength,
      pattern,
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
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringMetaType}
 */
export function renderStringMeta (schema, values, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringMeta')
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
        getStringMeta(schema, values, params, uri, minLength, maxLength, pattern),
        isArray(selectedItems) ? { selectedItems } : {}
      )
    )
  }

  return (
    getStringMeta(schema, values, params, uri, minLength, maxLength, pattern)
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {EnumType}
 */
export function renderStringElementsFieldForEnum (field, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringElementsFieldForEnum')
   */

  const fieldProps = getElementsFieldPropsForEnum(params, uri)

  return (
    Object.assign(
      field,
      minLength,
      maxLength,
      pattern,
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
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {AnyOfType}
 */
export function renderStringElementsFieldForAnyOf (field, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringElementsFieldForAnyOf')
   */

  const fieldProps = getElementsFieldPropsForAnyOf(params, uri)

  return (
    Object.assign(
      field,
      minLength,
      maxLength,
      pattern,
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
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {OneOfType}
 */
export function renderStringElementsFieldForOneOf (field, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringElementsFieldForOneOf')
   */

  const fieldProps = getElementsFieldPropsForOneOf(params, uri)

  return (
    Object.assign(
      field,
      minLength,
      maxLength,
      pattern,
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
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getStringElementsFieldForAllOf (field, schema, values, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('getStringElementsFieldForAllOf')
   */

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  return (
    Object.assign(
      field,
      minLength,
      maxLength,
      pattern,
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
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {FieldType}
 */
export function renderStringElementsFieldForAllOf (field, schema, values, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringElementsFieldForAllOf')
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
        getStringElementsFieldForAllOf(field, schema, values, params, uri, minLength, maxLength, pattern),
        isArray(selectedItems) ? { selectedItems } : {},
        {
          id: uri
        }
      )
    )
  }

  return (
    Object.assign(
      getStringElementsFieldForAllOf(field, schema, values, params, uri, minLength, maxLength, pattern),
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
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getStringElementsField (field, schema, values, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('getStringElementsField')
   */

  const fieldValue = getElementsFieldValue(values, uri, schema)
  const fieldProps = getElementsFieldProps(params, uri)

  return (
    Object.assign(
      field,
      minLength,
      maxLength,
      pattern,
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
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {FieldType}
 */
export function renderStringElementsField (field, schema, values, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringElementsField')
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
        getStringElementsField(field, schema, values, params, uri, minLength, maxLength, pattern),
        isArray(selectedItems) ? { selectedItems } : {},
        {
          id: uri
        }
      )
    )
  }

  return (
    Object.assign(
      getStringElementsField(field, schema, values, params, uri, minLength, maxLength, pattern),
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
export function getStringElements (elements, schema) {
  /*
   *  log('getStringElements')
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
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringElementsType}
 */
export function renderStringElementsForEnum (schema, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringElementsForEnum')
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
      getStringElements(elements, schema),
      {
        enum: renderStringElementsFieldForEnum(field, params, uri, minLength, maxLength, pattern)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringElementsType}
 */
export function renderStringElementsForAnyOf (schema, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringElementsForAnyOf')
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
      getStringElements(elements, schema),
      {
        anyOf: renderStringElementsFieldForAnyOf(field, params, uri, minLength, maxLength, pattern)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringElementsType}
 */
export function renderStringElementsForOneOf (schema, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringElementsForOneOf')
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
      getStringElements(elements, schema),
      {
        oneOf: renderStringElementsFieldForOneOf(field, params, uri, minLength, maxLength, pattern)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringElementsType}
 */
export function renderStringElementsForAllOf (schema, values, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringElementsForAllOf')
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
      getStringElements(elements, schema),
      {
        field: renderStringElementsFieldForAllOf(field, schema, values, params, uri, minLength, maxLength, pattern)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minLength?: number }} minLength
 *  @param {{ maxLength?: number }} maxLength
 *  @param {{ pattern?: RegExp }} pattern
 *  @returns {ZashikiStringElementsType}
 */
export function renderStringElements (schema, values, params, uri, minLength, maxLength, pattern) {
  /*
   *  log('renderStringElements')
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
      getStringElements(elements, schema),
      {
        field: renderStringElementsField(field, schema, values, params, uri, minLength, maxLength, pattern)
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
 *  @returns {ZashikiStringType}
 */
export function renderStringForEnum (schema, values, params) {
  /*
   *  log('renderStringForEnum')
   */

  const {
    uri = '#/'
  } = params

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const meta = renderStringMetaForEnum(params, uri, minLength, maxLength, pattern)
  const elements = renderStringElementsForEnum(schema, params, uri, minLength, maxLength, pattern)

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
 *  @returns {ZashikiStringType}
 */
export function renderStringForAnyOf (schema, values, params) {
  /*
   *  log('renderStringForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const meta = renderStringMetaForAnyOf(params, uri, minLength, maxLength, pattern)
  const elements = renderStringElementsForAnyOf(schema, params, uri, minLength, maxLength, pattern)

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
 *  @returns {ZashikiStringType}
 */
export function renderStringForOneOf (schema, values, params) {
  /*
   *  log('renderStringForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const meta = renderStringMetaForOneOf(params, uri, minLength, maxLength, pattern)
  const elements = renderStringElementsForOneOf(schema, params, uri, minLength, maxLength, pattern)

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
 *  @returns {ZashikiStringType}
 */
export function renderStringForAllOf (schema, values, params) {
  /*
   *  log('renderStringForAllOf')
   */

  const {
    uri = '#/'
  } = params

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const meta = renderStringMetaForAllOf(schema, values, params, uri, minLength, maxLength, pattern)
  const elements = renderStringElementsForAllOf(schema, values, params, uri, minLength, maxLength, pattern)

  return {
    meta,
    elements
  }
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiStringType}
 */
export function renderString (schema, values, params) {
  /*
   *  log('renderString')
   */

  const {
    uri = '#/'
  } = params

  const minLength = getMinLength(schema)
  const maxLength = getMaxLength(schema)
  const pattern = getPattern(schema)

  const meta = renderStringMeta(schema, values, params, uri, minLength, maxLength, pattern)
  const elements = renderStringElements(schema, values, params, uri, minLength, maxLength, pattern)

  return {
    meta,
    elements
  }
}
