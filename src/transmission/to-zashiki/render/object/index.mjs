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
 *  @typedef {TransmissionTypes.Zashiki.ObjectMetaType} ZashikiObjectMetaType
 *  @typedef {TransmissionTypes.Zashiki.ObjectElementsType} ZashikiObjectElementsType
 *  @typedef {TransmissionTypes.Zashiki.ObjectType} ZashikiObjectType
 */

import debug from 'debug'

import {
  getTitle,
  getDescription,
  isParentUri,
  getMinProperties,
  getMaxProperties,
  getMetaProps,
  getElementsFieldPropsForEnum,
  getElementsFieldPropsForAnyOf,
  getElementsFieldPropsForOneOf,
  getElementsFieldPropsForAllOf
} from '#transmission/transmission/common'

const log = debug('shinkansen-transmission/to-zashiki/render/object')

log('`shinkansen` is awake')

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {ZashikiObjectMetaType}
 */
export function renderObjectMetaForEnum (params, uri, minProperties, maxProperties) {
  /*
   *  log('renderObjectMetaForEnum')
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
        type: 'object'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minProperties,
      maxProperties,
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {ZashikiObjectMetaType}
 */
export function renderObjectMetaForAnyOf (params, uri, minProperties, maxProperties) {
  /*
   *  log('renderObjectMetaForAnyOf')
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
        type: 'object'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minProperties,
      maxProperties,
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {ZashikiObjectMetaType}
 */
export function renderObjectMetaForOneOf (params, uri, minProperties, maxProperties) {
  /*
   *  log('renderObjectMetaForOneOf')
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
        type: 'object'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minProperties,
      maxProperties,
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {ZashikiObjectMetaType}
 */
export function renderObjectMetaForAllOf (params, uri, minProperties, maxProperties) {
  /*
   *  log('renderObjectMetaForAllOf')
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
        type: 'object'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minProperties,
      maxProperties,
      metaProps
    )
  )
}

/**
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {ZashikiObjectMetaType}
 */
export function renderObjectMeta (params, uri, minProperties, maxProperties) {
  /*
   *  log('renderObjectMeta')
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
        type: 'object'
      },
      isParentUri(parentUri, uri) ? { parentUri } : {},
      minProperties,
      maxProperties,
      metaProps
    )
  )
}

/**
 *  @param {ObjectLiteralType | ObjectType} field
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {EnumType}
 */
export function renderObjectElementsFieldForEnum (field, params, uri, minProperties, maxProperties) {
  /*
   *  log('renderObjectElementsFieldForEnum')
   */

  const fieldProps = getElementsFieldPropsForEnum(params, uri)

  return (
    Object.assign(
      field,
      minProperties,
      maxProperties,
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
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {AnyOfType}
 */
export function renderObjectElementsFieldForAnyOf (field, params, uri, minProperties, maxProperties) {
  /*
   *  log('renderObjectElementsFieldForAnyOf')
   */

  const fieldProps = getElementsFieldPropsForAnyOf(params, uri)

  return (
    Object.assign(
      field,
      minProperties,
      maxProperties,
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
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {OneOfType}
 */
export function renderObjectElementsFieldForOneOf (field, params, uri, minProperties, maxProperties) {
  /*
   *  log('renderObjectElementsFieldForOneOf')
   */

  const fieldProps = getElementsFieldPropsForOneOf(params, uri)

  return (
    Object.assign(
      field,
      minProperties,
      maxProperties,
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
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {FieldType}
 */
export function renderObjectElementsFieldForAllOf (field, params, uri, minProperties, maxProperties) {
  /*
   *  log('renderObjectElementsFieldForAllOf')
   */

  const fieldProps = getElementsFieldPropsForAllOf(params, uri)

  return (
    Object.assign(
      field,
      minProperties,
      maxProperties,
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
export function getObjectElements (elements, schema) {
  /*
   *  log('getObjectElements')
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
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {ZashikiObjectElementsType}
 */
export function renderObjectElementsForEnum (schema, params, uri, minProperties, maxProperties) {
  /*
   *  log('renderObjectElementsForEnum')
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
      getObjectElements(elements, schema),
      {
        enum: renderObjectElementsFieldForEnum(field, params, uri, minProperties, maxProperties)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {ZashikiObjectElementsType}
 */
export function renderObjectElementsForAnyOf (schema, params, uri, minProperties, maxProperties) {
  /*
   *  log('renderObjectElementsForAnyOf')
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
      getObjectElements(elements, schema),
      {
        anyOf: renderObjectElementsFieldForAnyOf(field, params, uri, minProperties, maxProperties)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {ZashikiObjectElementsType}
 */
export function renderObjectElementsForOneOf (schema, params, uri, minProperties, maxProperties) {
  /*
   *  log('renderObjectElementsForOneOf')
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
      getObjectElements(elements, schema),
      {
        oneOf: renderObjectElementsFieldForOneOf(field, params, uri, minProperties, maxProperties)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @param {string} uri
 *  @param {{ minProperties?: number }} minProperties
 *  @param {{ maxProperties?: number }} maxProperties
 *  @returns {ZashikiObjectElementsType}
 */
export function renderObjectElementsForAllOf (schema, params, uri, minProperties, maxProperties) {
  /*
   *  log('renderObjectElementsForAllOf')
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
      getObjectElements(elements, schema),
      {
        field: renderObjectElementsFieldForAllOf(field, params, uri, minProperties, maxProperties)
      }
    )
  )
}

/**
 *  @param {SchemaType} schema
 *  @param {ParamsType} params
 *  @returns {ZashikiObjectElementsType}
 */
export function renderObjectElements (schema, params) {
  /*
   *  log('renderObjectElements')
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
      getObjectElements(elements, schema),
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
 *  @returns {ZashikiObjectType}
 */
export function renderObjectForEnum (schema, values, params) {
  /*
   *  log('renderObjectForEnum')
   */

  const {
    uri = '#/'
  } = params

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const meta = renderObjectMetaForEnum(params, uri, minProperties, maxProperties)
  const elements = renderObjectElementsForEnum(schema, params, uri, minProperties, maxProperties)

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
 *  @returns {ZashikiObjectType}
 */
export function renderObjectForAnyOf (schema, values, params) {
  /*
   *  log('renderObjectForAnyOf')
   */

  const {
    uri = '#/'
  } = params

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const meta = renderObjectMetaForAnyOf(params, uri, minProperties, maxProperties)
  const elements = renderObjectElementsForAnyOf(schema, params, uri, minProperties, maxProperties)

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
 *  @returns {ZashikiObjectType}
 */
export function renderObjectForOneOf (schema, values, params) {
  /*
   *  log('renderObjectForOneOf')
   */

  const {
    uri = '#/'
  } = params

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const meta = renderObjectMetaForOneOf(params, uri, minProperties, maxProperties)
  const elements = renderObjectElementsForOneOf(schema, params, uri, minProperties, maxProperties)

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
 *  @returns {ZashikiObjectType}
 */
export function renderObjectForAllOf (schema, values, params) {
  /*
   *  log('renderObjectForAllOf')
   */

  const {
    uri = '#/'
  } = params

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const meta = renderObjectMetaForAllOf(params, uri, minProperties, maxProperties)
  const elements = renderObjectElementsForAllOf(schema, params, uri, minProperties, maxProperties)

  return {
    meta,
    elements
  }
}

/**
 *  @param {SchemaType} schema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ZashikiObjectType}
 */
export function renderObject (schema, values, params) {
  /*
   *  log('renderObject')
   */

  const {
    uri = '#/'
  } = params

  const minProperties = getMinProperties(schema)
  const maxProperties = getMaxProperties(schema)

  const meta = renderObjectMeta(params, uri, minProperties, maxProperties)
  const elements = renderObjectElements(schema, params)

  return {
    meta,
    elements
  }
}
