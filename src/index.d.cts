declare module 'shinkansen-transmission/transmission/common' {
  export * from './transmission/common/index.mjs'
}

declare module 'shinkansen-transmission/transmission/from-document-to-hash' {
  export * from './transmission/from-document-to-hash/index.mjs'
}

declare module 'shinkansen-transmission/transmission/from-hash-to-document' {
  export * from './transmission/from-hash-to-document.mjs'
}

declare module 'shinkansen-transmission/transmission/to-zashiki' {
  export * from './transmission/to-zashiki/index.mjs'
}

declare module 'shinkansen-transmission/transmission' {
  export * as common from 'shinkansen-transmission/transmission/common'
  export { default as fromDocumentToHash } from 'shinkansen-transmission/transmission/from-document-to-hash'
  export { default as fromHashToDocument } from 'shinkansen-transmission/transmission/from-hash-to-document'
  export { default as toZashiki } from 'shinkansen-transmission/transmission/to-zashiki'
}
