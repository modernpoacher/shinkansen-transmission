export type DocumentType = TransmissionTypes.DocumentType
export type SchemaType = TransmissionTypes.SchemaType
export type HashType = TransmissionTypes.HashType

export function transformArrayFor (document: DocumentType[], schema: SchemaType, hash: HashType, parentUri: string): HashType
export function transformArray (document: DocumentType[], schema: SchemaType, hash: HashType, parentUri: string, uri: string): HashType
export function transformArraySchema (document?: DocumentType, schema?: SchemaType, hash?: HashType, parentUri?: string, uri?: string): HashType

export function transformObjectFor (document: Record<string, DocumentType>, schema: SchemaType, hash: HashType, parentUri: string): HashType
export function transformObject (document: Record<string, DocumentType>, schema: SchemaType, hash: HashType, parentUri: string, uri: string): HashType
export function transformObjectSchema (document?: DocumentType, schema?: SchemaType, hash?: HashType, parentUri?: string, uri?: string): HashType

export { default as transformStringSchema } from './string/index.mjs'
export { default as transformNumberSchema } from './number/index.mjs'
export { default as transformBooleanSchema } from './boolean/index.mjs'
export { default as transformNullSchema } from './null/index.mjs'

export default function fromDocumentToHash (document?: DocumentType, schema?: SchemaType, hash?: HashType, parentUri?: string, uri?: string): HashType
