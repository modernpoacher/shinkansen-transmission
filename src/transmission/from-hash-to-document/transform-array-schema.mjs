import debug from 'debug'

import {
  getUri
} from 'shinkansen-transmission/transmission/common'

import {
  transformNull,
  transformBoolean,
  transformObject,
  transformArray,
  transformNumber,
  transformString
} from 'shinkansen-transmission/transmission/from-hash-to-document'

const log = debug('shinkansen-transmission/from-hash-to-document/transform-array-schema')

log('`shinkansen` is awake')

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformArraySchemaNull (values, schema, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) {
  /*
   *  log('transformArraySchemaNull')
   */

  return transformNull(values, schema, parentUri, uri)
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformArraySchemaBoolean (values, schema, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) {
  /*
   *  log('transformArraySchemaBoolean')
   */

  return transformBoolean(values, schema, parentUri, uri)
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformArraySchemaObject (values, schema, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) {
  /*
   *  log('transformArraySchemaObject')
   */

  return transformObject(values, schema, uri, uri) // uri is parentUri and uri
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformArraySchemaArray (values, schema, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) {
  /*
   *  log('transformArraySchemaArray')
   */

  return transformArray(values, schema, uri, uri) // uri is parentUri and uri
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformArraySchemaNumber (values, schema, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) {
  /*
   *  log('transformArraySchemaNumber')
   */

  return transformNumber(values, schema, parentUri, uri)
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformArraySchemaString (values, schema, { uri: parentUri, index: arrayIndex }, uri = getUri(parentUri, arrayIndex)) {
  /*
   *  log('transformArraySchemaString')
   */

  return transformString(values, schema, parentUri, uri)
}

export default function transformArraySchema (values = {}, schema = {}, params = {}) {
  log('transformArraySchema')

  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformArraySchemaNull(values, schema, params)

    case 'boolean':
      return transformArraySchemaBoolean(values, schema, params)

    case 'object':
      return transformArraySchemaObject(values, schema, params)

    case 'array':
      return transformArraySchemaArray(values, schema, params)

    case 'number':
      return transformArraySchemaNumber(values, schema, params)

    case 'string':
      return transformArraySchemaString(values, schema, params)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}
