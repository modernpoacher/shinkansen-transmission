export type SchemaType = TransmissionTypes.SchemaType
export type DocumentType = TransmissionTypes.DocumentType
export type HashType = TransmissionTypes.HashType

export type ZashikiType = TransmissionTypes.Zashiki.ZashikiType

// @ts-expect-error MJS
export * as common from '#transmission/transmission/common' // @ts-expect-error MJS
export { default as fromDocumentToHash } from '#transmission/transmission/from-document-to-hash' // @ts-expect-error MJS
export { default as fromHashToDocument } from '#transmission/transmission/from-hash-to-document'// @ts-expect-error MJS
export { default as toZashiki } from '#transmission/transmission/to-zashiki'
