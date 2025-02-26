export type SchemaType = TransmissionTypes.SchemaType
export type ParamsType = TransmissionTypes.ParamsType
export type DocumentType = TransmissionTypes.DocumentType
export type HashType = TransmissionTypes.HashType

export function transformBoolean (hash: HashType, schema: SchemaType, parentUri: string, uri: string): boolean | undefined

export default function transformBooleanSchema (hash?: HashType, schema?: SchemaType, params?: ParamsType): DocumentType | undefined
