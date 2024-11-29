import debug from 'debug'

import {
  toString,
  isArray,
  getUri
} from '#transmission/transmission/common'

import {
  transformArray
} from '#transmission/transmission/from-document-to-hash'

const log = debug('shinkansen-transmission/from-document-to-hash/array')

log('`shinkansen` is awake')

export default function transformArraySchema (document, schema = {}, values = {}, parentUri = '#', uri = getUri(parentUri)) {
  log('transformArraySchema')

  /*
   *  Is `document` an array?
   */
  if (isArray(document)) {
    /*
     *  Yes, `document` is an array
     */
    return transformArray(document, schema, values, parentUri, uri)
  }

  /*
   *  The hash should contain only strings
   */
  values[uri] = toString(document)

  return values
}
