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

const log = debug('shinkansen-transmission/from-hash-to-document/transform-object-schema')

log('`shinkansen` is awake')

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformObjectSchemaNull (values, schema, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) {
  /*
   *  log('transformObjectSchemaNull')
   */

  return transformNull(values, schema, parentUri, uri)
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6
export function transformObjectSchemaBoolean (values, schema, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) {
  /*
   *  log('transformObjectSchemaBoolean')
   */

  return transformBoolean(values, schema, parentUri, uri)
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.5
export function transformObjectSchemaObject (values, schema, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) {
  /*
   *  log('transformObjectSchemaObject')
   */

  return transformObject(values, schema, uri, uri) // uri is parentUri and uri
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.4
export function transformObjectSchemaArray (values, schema, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) {
  /*
   *  log('transformObjectSchemaArray')
   */

  return transformArray(values, schema, uri, uri) // uri is parentUri and uri
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.2
export function transformObjectSchemaNumber (values, schema, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) {
  /*
   *  log('transformObjectSchemaNumber')
   */

  return transformNumber(values, schema, parentUri, uri)
}

// https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.6.3
export function transformObjectSchemaString (values, schema, { uri: parentUri, key: fieldKey }, uri = getUri(parentUri, fieldKey)) {
  /*
   *  log('transformObjectSchemaString')
   */

  return transformString(values, schema, parentUri, uri)
}

export default function transformObjectSchema (values = {}, schema = {}, params = {}) {
  log('transformObjectSchema')

  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  switch (type) {
    case 'null':
      return transformObjectSchemaNull(values, schema, params)

    case 'boolean':
      return transformObjectSchemaBoolean(values, schema, params)

    case 'object':
      return transformObjectSchemaObject(values, schema, params)

    case 'array':
      return transformObjectSchemaArray(values, schema, params)

    case 'number':
      return transformObjectSchemaNumber(values, schema, params)

    case 'string':
      return transformObjectSchemaString(values, schema, params)

    default:
      throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
  }
}
