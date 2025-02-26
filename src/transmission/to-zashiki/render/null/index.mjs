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
 *  @typedef {TransmissionTypes.Zashiki.NullMetaType} ZashikiNullMetaType
 *  @typedef {TransmissionTypes.Zashiki.NullElementsType} ZashikiNullElementsType
 *  @typedef {TransmissionTypes.Zashiki.NullType} ZashikiNullType
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

const log = debug('shinkansen-transmission/to-zashiki/render/null')

log('`shinkansen` is awake')

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiNullMetaType}
 */
export function renderNullMetaForEnum (params, uri) {
  /*
   *  log('renderNullMetaForEnum')
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
        type: 'null'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiNullMetaType}
 */
export function renderNullMetaForAnyOf (params, uri) {
  /*
   *  log('renderNullMetaForAnyOf')
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
        type: 'null'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiNullMetaType}
 */
export function renderNullMetaForOneOf (params, uri) {
  /*
   *  log('renderNullMetaForOneOf')
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
        type: 'null'
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
 *  @returns {ZashikiNullMetaType}
 */
export function getNullMetaForAllOf (schema, values, params, uri) {
  /*
   *  log('getNullMetaForAllOf')
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
        type: 'null'
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
 *  @returns {ZashikiNullMetaType}
 */
export function renderNullMetaForAllOf (schema, values, params, uri) {
  /*
   *  log('renderNullMetaForAllOf')
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
        getNullMetaForAllOf(schema, values, params, uri),
        isArray(selectedItems) ? { selectedItems } : {}
      )
    )
  }

  return (
    getNullMetaForAllOf(schema, values, params, uri)
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiNullMetaType}
 */
export function getNullMeta (schema, values, params, uri) {
  /*
   *  log('getNullMeta')
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
        type: 'null'
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
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiNullMetaType}
 */
export function renderNullMeta (schema, values, params, uri) {
  /*
   *  log('renderNullMeta')
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
        getNullMeta(schema, values, params, uri),
        isArray(selectedItems) ? { selectedItems } : {}
      )
    )
  }

  return (
    getNullMeta(schema, values, params, uri)
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {EnumType}
 */
export function renderNullElementsFieldForEnum (field, params, uri) {
  /*
   *  log('renderNullElementsFieldForEnum')
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
export function renderNullElementsFieldForAnyOf (field, params, uri) {
  /*
   *  log('renderNullElementsFieldForAnyOf')
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
export function renderNullElementsFieldForOneOf (field, params, uri) {
  /*
   *  log('renderNullElementsFieldForOneOf')
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
 *  @param {ParamsType} params
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {string} uri
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getNullElementsFieldForAllOf (field, schema, values, params, uri) {
  /*
   *  log('getNullElementsFieldForAllOf')
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
 *  @param {ParamsType} params
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {string} uri
 *  @returns {FieldType}
 */
export function renderNullElementsFieldForAllOf (field, schema, values, params, uri) {
  /*
   *  log('renderNullElementsFieldForAllOf')
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
        getNullElementsFieldForAllOf(field, schema, values, params, uri),
        isArray(selectedItems) ? { selectedItems } : {},
        {
          id: uri
        }
      )
    )
  }

  return (
    Object.assign(
      getNullElementsFieldForAllOf(field, schema, values, params, uri),
      {
        id: uri
      }
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {string} uri
 *  @returns {ObjectLiteralType | ObjectType}
 */
export function getNullElementsField (field, schema, values, params, uri) {
  /*
   *  log('getNullElementsField')
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
 *  @param {ParamsType} params
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {string} uri
 *  @returns {FieldType}
 */
export function renderNullElementsField (field, schema, values, params, uri) {
  /*
   *  log('renderNullElementsField')
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
        getNullElementsField(field, schema, values, params, uri),
        isArray(selectedItems) ? { selectedItems } : {},
        {
          id: uri
        }
      )
    )
  }

  return (
    Object.assign(
      getNullElementsField(field, schema, values, params, uri),
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
export function getNullElements (elements, schema) {
  /*
   *  log('getNullElements')
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
 *  @returns {ZashikiNullElementsType}
 */
export function renderNullElementsForEnum (schema, params, uri) {
  /*
   *  log('renderNullElementsForEnum')
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
      getNullElements(elements, schema),
      {
        enum: renderNullElementsFieldForEnum(field, params, uri)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiNullElementsType}
 */
export function renderNullElementsForOneOf (schema, params, uri) {
  /*
   *  log('renderNullElementsForOneOf')
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
      getNullElements(elements, schema),
      {
        oneOf: renderNullElementsFieldForOneOf(field, params, uri)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiNullElementsType}
 */
export function renderNullElementsForAnyOf (schema, params, uri) {
  /*
   *  log('renderNullElementsForAnyOf')
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
      getNullElements(elements, schema),
      {
        anyOf: renderNullElementsFieldForAnyOf(field, params, uri)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiNullElementsType}
 */
export function renderNullElementsForAllOf (schema, values, params, uri) {
  /*
   *  log('renderNullElementsForAllOf')
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
      getNullElements(elements, schema),
      {
        field: renderNullElementsFieldForAllOf(field, schema, values, params, uri)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @returns {ZashikiNullElementsType}
 */
export function renderNullElements (schema, values, params, uri) {
  /*
   *  log('renderNullElements')
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
      getNullElements(elements, schema),
      {
        field: renderNullElementsField(field, schema, values, params, uri)
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
 *  @returns {ZashikiNullType}
 */
export function renderNullForEnum (schema, values, params) {
  /*
   *  log('renderNullForEnum')
   */

  const {
    uri = '#/'
  } = params

  const meta = renderNullMetaForEnum(params, uri)
  const elements = renderNullElementsForEnum(schema, params, uri)

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
 *  @returns {ZashikiNullType}
 */
export function renderNullForAnyOf (schema, values, params) {
  /*
   *  log('renderNullForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const meta = renderNullMetaForAnyOf(params, uri)
  const elements = renderNullElementsForAnyOf(schema, params, uri)

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
 *  @returns {ZashikiNullType}
 */
export function renderNullForOneOf (schema, values, params) {
  /*
   *  log('renderNullForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const meta = renderNullMetaForOneOf(params, uri)
  const elements = renderNullElementsForOneOf(schema, params, uri)

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
 *  @returns {ZashikiNullType}
 */
export function renderNullForAllOf (schema, values, params) {
  /*
   *  log('renderNullForAllOf')
   */

  const {
    uri = '#/'
  } = params

  const meta = renderNullMetaForAllOf(schema, values, params, uri)
  const elements = renderNullElementsForAllOf(schema, values, params, uri)

  return {
    meta,
    elements
  }
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiNullType}
 */
export function renderNull (schema, values, params) {
  /*
   *  log('renderNull')
   */

  const {
    uri = '#/'
  } = params

  const meta = renderNullMeta(schema, values, params, uri)
  const elements = renderNullElements(schema, values, params, uri)

  return {
    meta,
    elements
  }
}
