import debug from 'debug'

import {
  getUri
} from 'shinkansen-transmission/transmission/common'

import {
  transformNumber
} from 'shinkansen-transmission/transmission/from-hash-to-document'

const log = debug('shinkansen-transmission/from-hash-to-document/number')

log('`shinkansen` is awake')

export default function transformNumberSchema (values = {}, schema = {}, params = {}) {
  log('transformNumberSchema')

  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  if (type === 'number') {
    const {
      uri: parentUri
    } = params

    return transformNumber(values, schema, parentUri, getUri(parentUri))
  }

  throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
}
