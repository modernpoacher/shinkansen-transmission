import debug from 'debug'

import {
  getUri
} from '#transmission/transmission/common'

import {
  transformString
} from '#transmission/transmission/from-hash-to-document'

const log = debug('shinkansen-transmission/from-hash-to-document/string')

log('`shinkansen` is awake')

export default function transformStringSchema (values = {}, schema = {}, params = {}) {
  log('transformStringSchema')

  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  if (type === 'string') {
    const {
      uri: parentUri
    } = params

    return transformString(values, schema, parentUri, getUri(parentUri))
  }

  throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
}
