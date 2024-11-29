declare module '#transmission/transmission' {
  export * as common from '#transmission/transmission/common'
  export { default as fromDocumentToHash } from '#transmission/transmission/from-document-to-hash'
  export { default as fromHashToDocument } from '#transmission/transmission/from-hash-to-document'
  export { default as toZashiki } from '#transmission/transmission/to-zashiki'
}

declare module 'shinkansen-transmission/transmission' {
  export * from '#transmission/transmission'
}
