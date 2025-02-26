type HashType = TransmissionTypes.HashType
type SchemaType = TransmissionTypes.SchemaType
type ParamsType = TransmissionTypes.ParamsType
type DocumentType = TransmissionTypes.DocumentType

export function toString (v: unknown) : string

export function toNumber (v: unknown): number

export function toBoolean (v: unknown) : boolean

export function toNull (v: unknown): null

export function mapToValue (array: string[] | number[] | object[] | boolean[] | null[]): (document: DocumentType | undefined) => string | number | object | boolean | null | undefined

export function fromDocumentToArray (document: DocumentType | undefined, array: string[] | number[] | object[] | boolean[] | null[]) : string | number | object | boolean | null

export function fromHashToArray (hash: HashType, uri: string, array: string[] | number[] | object[] | boolean[] | null[]): string | number | object | boolean | null
