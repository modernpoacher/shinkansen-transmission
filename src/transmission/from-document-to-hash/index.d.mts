export type DocumentType = TransmissionTypes.DocumentType
export type SchemaType = TransmissionTypes.SchemaType
export type HashType = TransmissionTypes.HashType

export function transformArrayFor (document: DocumentType[], schema: { type: string }, hash: HashType, parentUri: string): HashType
export function transformObjectFor (document: Record<string, DocumentType>, schema: { type: string }, hash: HashType, parentUri: string): HashType

export function transformArray (document: DocumentType[], schema: { type: string }, hash: HashType, parentUri: string, uri: string): HashType
export function transformObject (document: Record<string, DocumentType>, schema: { type: string }, hash: HashType, parentUri: string, uri: string): HashType

export default function transform (document?: DocumentType, schema?: SchemaType, hash?: HashType, parentUri?: string, uri?: string): HashType
