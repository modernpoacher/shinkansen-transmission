export type SchemaType = TransmissionTypes.SchemaType
export type ParamsType = TransmissionTypes.ParamsType
export type DocumentType = TransmissionTypes.DocumentType
export type HashType = TransmissionTypes.HashType

export function transformNumber (hash: HashType, schema: SchemaType, parentUri: string, uri: string): number | undefined

export default function transformNumberSchema (hash?: HashType, schema?: SchemaType, params?: ParamsType): DocumentType | undefined
