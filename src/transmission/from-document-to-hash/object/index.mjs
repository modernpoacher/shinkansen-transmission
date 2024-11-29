import debug from 'debug'

import {
  toString,
  isObject,
  getUri
} from '#transmission/transmission/common'

import {
  transformObject
} from '#transmission/transmission/from-document-to-hash'

const log = debug('shinkansen-transmission/from-document-to-hash/object')

log('`shinkansen` is awake')

export default function transformObjectSchema (document, schema = {}, values = {}, parentUri = '#', uri = getUri(parentUri)) {
  log('transformObjectSchema')

  /*
   *  Is `document` an object?
   */
  if (isObject(document)) {
    /*
      *  Yes, `document` is an object
      */
    return transformObject(document, schema, values, parentUri, uri)
  }

  /*
   *  The hash should contain only strings
   */
  values[uri] = toString(document)

  return values
}
