import debug from 'debug'

import {
  getUri
} from '#transmission/transmission/common'

import {
  transformObject
} from '#transmission/transmission/from-hash-to-document'

const log = debug('shinkansen-transmission/from-hash-to-document/object')

log('`shinkansen` is awake')

export default function transformObjectSchema (values = {}, schema = {}, params = {}) {
  log('transformObjectSchema')

  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  if (type === 'object') {
    const {
      uri: parentUri,
      key: fieldKey
    } = params

    return transformObject(values, schema, parentUri, getUri(parentUri, fieldKey))
  }

  throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
}
