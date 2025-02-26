export type SchemaType = TransmissionTypes.SchemaType
export type ParamsType = TransmissionTypes.ParamsType
export type DocumentType = TransmissionTypes.DocumentType
export type HashType = TransmissionTypes.HashType

export function transformString (hash: HashType, schema: SchemaType, parentUri: string, uri: string): string | undefined

export default function transformStringSchema (hash?: HashType, schema?: SchemaType, params?: ParamsType): DocumentType | undefined
