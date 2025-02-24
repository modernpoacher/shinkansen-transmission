/**
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.ValuesType} ValuesType
 *  @typedef {TransmissionTypes.ParamsType} ParamsType
 */

import debug from 'debug'

import {
  normaliseUri,
  getUri,
  getMetaProps,
  getElementsFieldPropsForEnum,
  getElementsFieldPropsForAnyOf,
  getElementsFieldPropsForOneOf,
  getElementsFieldPropsForAllOf,
  getElementsFieldProps,
  getElementsProps
} from '#transmission/transmission/common'

const log = debug('shinkansen-transmission/to-zashiki/render-params/schema')

log('`shinkansen` is awake')

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsByKeyForEnum (schema, rootSchema, params) {
  /**
   *  log('getRenderParamsByKeyForEnum')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = '',
    required = [],
    selectedItems = [],
    items = []
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri,
    uri,
    selectedItems,
    items,
    name: fieldKey,
    isRequired: required.includes(fieldKey)
  })
  const elements = {
    enum: Object.assign(getElementsFieldPropsForEnum(params, uri), {
      selectedItems,
      items
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsByKeyForAnyOf (schema, rootSchema, params) {
  /**
   *  log('getRenderParamsByKeyForAnyOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = '',
    required = [],
    selectedItems = [],
    items = []
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri,
    uri,
    selectedItems,
    items,
    name: fieldKey,
    isRequired: required.includes(fieldKey)
  })
  const elements = {
    anyOf: Object.assign(getElementsFieldPropsForAnyOf(params, uri), {
      selectedItems,
      items
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsByKeyForOneOf (schema, rootSchema, params) {
  /**
   *  log('getRenderParamsByKeyForOneOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = '',
    required = [],
    selectedItems = [],
    items = []
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri,
    uri,
    selectedItems,
    items,
    name: fieldKey,
    isRequired: required.includes(fieldKey)
  })
  const elements = {
    oneOf: Object.assign(getElementsFieldPropsForOneOf(params, uri), {
      selectedItems,
      items
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsByKeyForAllOf (schema, rootSchema, params) {
  /**
   *  log('getRenderParamsByKeyForAllOf')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = '',
    required = []
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri,
    uri,
    name: fieldKey,
    isRequired: required.includes(fieldKey)
  })

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements: getElementsProps(params, uri)
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsByKey (schema, rootSchema, params) {
  /**
   *  log('getRenderParamsByKey')
   */

  const {
    parentUri: fieldParentUri = '#',
    key: fieldKey = '',
    required = []
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(fieldParentUri)
  const uri = getUri(fieldParentUri, fieldKey)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri,
    uri,
    name: fieldKey,
    isRequired: required.includes(fieldKey)
  })
  const elements = {
    field: getElementsFieldProps(params, uri)
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsByIndexForEnum (schema, rootSchema, params) {
  /**
   *  log('getRenderParamsByIndexForEnum')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0,
    selectedItems = [],
    items = []
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri,
    uri,
    selectedItems,
    items,
    item: arrayIndex
  })
  const elements = {
    enum: Object.assign(getElementsFieldPropsForEnum(params, uri), {
      selectedItems,
      items
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsByIndexForAnyOf (schema, rootSchema, params) {
  /**
   *  log('getRenderParamsByIndexForAnyOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0,
    selectedItems = [],
    items = []
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri,
    uri,
    selectedItems,
    items,
    item: arrayIndex
  })
  const elements = {
    anyOf: Object.assign(getElementsFieldPropsForAnyOf(params, uri), {
      selectedItems,
      items
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsByIndexForOneOf (schema, rootSchema, params) {
  /**
   *  log('getRenderParamsByIndexForOneOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0,
    selectedItems = [],
    items = []
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri,
    uri,
    selectedItems,
    items,
    item: arrayIndex
  })
  const elements = {
    oneOf: Object.assign(getElementsFieldPropsForOneOf(params, uri), {
      selectedItems,
      items
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsByIndexForAllOf (schema, rootSchema, params) {
  /**
   *  log('getRenderParamsByIndexForAllOf')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri,
    uri,
    item: arrayIndex
  })
  const elements = {
    field: getElementsFieldPropsForAllOf(params, uri)
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsByIndex (schema, rootSchema, params) {
  /**
   *  log('getRenderParamsByIndex')
   */

  const {
    parentUri: arrayParentUri = '#',
    index: arrayIndex = 0
  } = params

  /*
   *  Resolve `parentUri` and `uri`
   */
  const parentUri = normaliseUri(arrayParentUri)
  const uri = getUri(arrayParentUri, arrayIndex)

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri,
    uri,
    item: arrayIndex
  })
  const elements = {
    field: getElementsFieldProps(params, uri)
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsForEnum (schema, rootSchema, params) {
  /**
   *  log('getRenderParamsForEnum')
   */

  const {
    parentUri = '#',
    uri = '#/',
    selectedItems = [],
    items = []
  } = params

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri,
    selectedItems,
    items
  })
  const elements = {
    enum: Object.assign(getElementsFieldPropsForEnum(params, uri), {
      selectedItems,
      items
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsForAnyOf (schema, rootSchema, params) {
  /**
   *  log('getRenderParamsForAnyOf')
   */

  const {
    parentUri = '#',
    uri = '#/',
    selectedItems = [],
    items = []
  } = params

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri,
    selectedItems,
    items
  })
  const elements = {
    anyOf: Object.assign(getElementsFieldPropsForAnyOf(params, uri), {
      selectedItems,
      items
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsForOneOf (schema, rootSchema, params) {
  /**
   *  log('getRenderParamsForOneOf')
   */

  const {
    parentUri = '#',
    uri = '#/',
    selectedItems = [],
    items = []
  } = params

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri,
    selectedItems,
    items
  })
  const elements = {
    oneOf: Object.assign(getElementsFieldPropsForOneOf(params, uri), {
      selectedItems,
      items
    })
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsForAllOf (schema, rootSchema, params) {
  /**
   *  log('getRenderParamsForAllOf')
   */

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri
  })
  const elements = {
    field: getElementsFieldPropsForAllOf(params, uri)
  }

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}

/**
 *  @param {SchemaType} schema
 *  @param {SchemaType} rootSchema
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParams (schema, rootSchema, params) {
  /**
   *  log('getRenderParams')
   */

  const {
    parentUri = '#',
    uri = '#/',
    fields = []
  } = params

  const meta = Object.assign(getMetaProps(params, uri), {
    schema,
    rootSchema,
    parentUri: normaliseUri(parentUri),
    uri
  })
  const elements = Object.assign(getElementsFieldProps(params, uri), {
    fields
  })

  return Object.assign(params, {
    fields // yep!
  },
  {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}
