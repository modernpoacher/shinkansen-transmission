/**
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.ValuesType} ValuesType
 *  @typedef {TransmissionTypes.ParamsType} ParamsType
 */

import debug from 'debug'

import {
  getSelectedItems,
  normaliseUri,
  getUri,
  getMetaProps,
  getElementsFieldPropsForEnum,
  getElementsFieldPropsForAnyOf,
  getElementsFieldPropsForOneOf,
  getElementsFieldPropsForAllOf,
  getElementsProps
} from '#transmission/transmission/common'

const log = debug('shinkansen-transmission/to-zashiki/params')

log('`shinkansen` is awake')

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getParamsByKeyForEnum (schema, rootSchema, values, params) {
  /**
   *  log('getParamsByKeyForAnyOf')
   */

  const {
    parentUri = '#',
    key = '',
    required = []
  } = params

  const isRequired = key ? required.includes(key) : false

  const uri = getUri(parentUri, key)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri,
    selectedItems,
    isRequired
  })
  const elements = {
    enum: Object.assign(getElementsFieldPropsForEnum(params, uri), {
      selectedItems,
      isRequired
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    key,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getParamsByKeyForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('getParamsByKeyForAnyOf')
   */

  const {
    parentUri = '#',
    key = '',
    required = []
  } = params

  const isRequired = key ? required.includes(key) : false

  const uri = getUri(parentUri, key)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri,
    selectedItems,
    isRequired
  })
  const elements = {
    anyOf: Object.assign(getElementsFieldPropsForAnyOf(params, uri), {
      selectedItems,
      isRequired
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    key,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getParamsByKeyForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('getParamsByKeyForOneOf')
   */

  const {
    parentUri = '#',
    key = '',
    required = []
  } = params

  const isRequired = key ? required.includes(key) : false

  const uri = getUri(parentUri, key)

  const {
    selectedItems = getSelectedItems(values, uri) // uri
  } = getMetaProps(params, uri)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri,
    selectedItems,
    isRequired
  })
  const elements = {
    oneOf: Object.assign(getElementsFieldPropsForOneOf(params, uri), {
      selectedItems,
      isRequired
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    key,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getParamsByKey (schema, rootSchema, values, params) {
  /**
   *  log('getParamsByKey')
   */

  const {
    parentUri = '#',
    key = '',
    required = []
  } = params

  const isRequired = key ? required.includes(key) : false

  const uri = getUri(parentUri, key)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri,
    isRequired
  })
  const elements = {
    field: Object.assign(getElementsFieldPropsForAllOf(params, uri), {
      isRequired
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    key,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getParamsByIndexForEnum (schema, rootSchema, values, params) {
  /**
   *  log('getParamsByIndexForEnum')
   */

  const {
    parentUri = '#',
    index = 0
  } = params

  const uri = getUri(parentUri, index)

  const {
    selectedItems = getSelectedItems(values, parentUri), // parent uri,
    ...metaProps
  } = getMetaProps(params, uri)

  const meta = Object.assign(metaProps, {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri,
    selectedItems
  })
  const elements = {
    enum: Object.assign(getElementsFieldPropsForEnum(params, uri), {
      selectedItems
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    index,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getParamsByIndexForAnyOf (schema, rootSchema, values, params) {
  /**
   *  log('getParamsByIndexForAnyOf')
   */

  const {
    parentUri = '#',
    index = 0
  } = params

  const uri = getUri(parentUri, index)

  const {
    selectedItems = getSelectedItems(values, parentUri), // parent uri,
    ...metaProps
  } = getMetaProps(params, uri)

  const meta = Object.assign(metaProps, {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri,
    selectedItems
  })
  const elements = {
    anyOf: Object.assign(getElementsFieldPropsForAnyOf(params, uri), {
      selectedItems
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    index,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getParamsByIndexForOneOf (schema, rootSchema, values, params) {
  /**
   *  log('getParamsByIndexForOneOf')
   */

  const {
    parentUri = '#',
    index = 0
  } = params

  const uri = getUri(parentUri, index)

  const {
    selectedItems = getSelectedItems(values, parentUri), // parent uri,
    ...metaProps
  } = getMetaProps(params, uri)

  const meta = Object.assign(metaProps, {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri,
    selectedItems
  })
  const elements = {
    oneOf: Object.assign(getElementsFieldPropsForOneOf(params, uri), {
      selectedItems
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    index,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ValuesType} values
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getParamsByIndex (schema, rootSchema, values, params) {
  /**
   *  log('getParamsByIndex')
   */

  const {
    parentUri = '#',
    index = 0
  } = params

  const uri = getUri(parentUri, index)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri
  })

  return Object.assign(params, {
    parentUri,
    uri,
    index,
    [uri]: {
      meta,
      elements: getElementsProps(params, uri)
    }
  })
}
