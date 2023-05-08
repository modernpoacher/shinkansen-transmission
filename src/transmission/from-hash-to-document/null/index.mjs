import debug from 'debug'

import {
  getUri
} from 'shinkansen-transmission/transmission/common'

import {
  transformNull
} from 'shinkansen-transmission/transmission/from-hash-to-document'

const log = debug('shinkansen-transmission/from-hash-to-document/null')

log('`shinkansen` is awake')

export default function transformNullSchema (values = {}, schema = {}, params = {}) {
  log('transformNullSchema')

  const { type } = schema

  // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1
  if (type === 'null') {
    const {
      uri: parentUri
    } = params

    return transformNull(values, schema, parentUri, getUri(parentUri))
  }

  throw new Error('Schema does not conform to Instance Data Model, https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.2.1')
}
