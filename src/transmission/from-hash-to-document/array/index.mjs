import debug from 'debug'

import {
  getUri
} from 'shinkansen-transmission/transmission/common'

import {
  transformArray
} from 'shinkansen-transmission/transmission/from-hash-to-document'

const log = debug('shinkansen-transmission/from-hash-to-document/array')

log('`shinkansen` is awake')

export default function transformArraySchema (values = {}, schema = {}, params = {}) {
  log('transformArraySchema')

  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  if (type === 'array') {
    const {
      uri: parentUri,
      index: arrayIndex
    } = params

    return transformArray(values, schema, parentUri, getUri(parentUri, arrayIndex))
  }

  throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
}
