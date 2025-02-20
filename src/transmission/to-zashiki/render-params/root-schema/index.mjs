/**
 *  @typedef {TransmissionTypes.SchemaType} SchemaType
 *  @typedef {TransmissionTypes.ValuesType} ValuesType
 *  @typedef {TransmissionTypes.ParamsType} ParamsType
 *
 *  @typedef {TransmissionTypes.Zashiki.ZashikiType} ZashikiType
 */

import debug from 'debug'

import {
  normaliseUri,
  getMetaProps,
  getElementsFieldPropsForEnum,
  getElementsFieldPropsForAnyOf,
  getElementsFieldPropsForOneOf,
  getElementsFieldPropsForAllOf,
  getElementsProps
} from '#transmission/transmission/common'

const log = debug('shinkansen-transmission/to-zashiki/render-params/root-schema')

log('`shinkansen` is awake')

/**
 *  @param {SchemaType} rootSchema
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsForEnum (rootSchema, params) {
  /*
   *  log('getRenderParamsForEnum')
   */

  const {
    parentUri = '#',
    uri = '#/',
    selectedItems = [],
    items = []
  } = params

  const meta = Object.assign(getMetaProps(params, uri), {
    schema: rootSchema,
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
 *  @param {SchemaType} rootSchema
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsForAnyOf (rootSchema, params) {
  /*
   *  log('getRenderParamsForAnyOf')
   */

  const {
    parentUri = '#',
    uri = '#/',
    selectedItems = [],
    items = []
  } = params

  const meta = Object.assign(getMetaProps(params, uri), {
    schema: rootSchema,
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
 *  @param {SchemaType} rootSchema
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsForOneOf (rootSchema, params) {
  /*
   *  log('getRenderParamsForOneOf')
   */

  const {
    parentUri = '#',
    uri = '#/',
    selectedItems = [],
    items = []
  } = params

  const meta = Object.assign(getMetaProps(params, uri), {
    schema: rootSchema,
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
 *  @param {SchemaType} rootSchema
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParamsForAllOf (rootSchema, params) {
  /*
   *  log('getRenderParamsForAllOf')
   */

  const {
    parentUri = '#',
    uri = '#/'
  } = params

  const meta = Object.assign(getMetaProps(params, uri), {
    schema: rootSchema
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
 *  @param {SchemaType} rootSchema
 *  @param {ParamsType} params
 *  @returns {ParamsType}
 */
export function getRenderParams (rootSchema, params) {
  /*
   *  log('getRenderParams')
   */

  const {
    parentUri = '#',
    uri = '#/',
    fields = []
  } = params

  const meta = Object.assign(getMetaProps(params, uri), {
    schema: rootSchema,
    parentUri: normaliseUri(parentUri),
    uri
  })

  const elements = Object.assign(getElementsProps(params, uri), {
    fields
  })

  return Object.assign(params, {
    parentUri,
    uri,
    [uri]: {
      meta,
      elements
    }
  })
}
