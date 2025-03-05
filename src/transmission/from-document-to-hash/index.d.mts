export type DocumentType = TransmissionTypes.DocumentType
export type SchemaType = TransmissionTypes.SchemaType
export type HashType = TransmissionTypes.HashType

export function transformArrayFor (document: DocumentType[], schema: SchemaType, hash: HashType, parentUri: string): HashType
export function transformArray (document: DocumentType[], schema: SchemaType, hash: HashType, parentUri: string, uri: string): HashType
export function transformArraySchema (document?: DocumentType, schema?: SchemaType, hash?: HashType, parentUri?: string, uri?: string): HashType

export function transformObjectFor (document: Record<string, DocumentType>, schema: SchemaType, hash: HashType, parentUri: string): HashType
export function transformObject (document: Record<string, DocumentType>, schema: SchemaType, hash: HashType, parentUri: string, uri: string): HashType
export function transformObjectSchema (document?: DocumentType, schema?: SchemaType, hash?: HashType, parentUri?: string, uri?: string): HashType

export { default as transformStringSchema } from '#transmission/transmission/from-document-to-hash/string'
export { default as transformNumberSchema } from '#transmission/transmission/from-document-to-hash/number'
export { default as transformBooleanSchema } from '#transmission/transmission/from-document-to-hash/boolean'
export { default as transformNullSchema } from '#transmission/transmission/from-document-to-hash/null'

export default function fromDocumentToHash (document?: DocumentType, schema?: SchemaType, hash?: HashType, parentUri?: string, uri?: string): HashType
