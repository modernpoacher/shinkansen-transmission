type MemberArrayType = TransmissionTypes.MemberArrayType
type MemberType = TransmissionTypes.MemberType

type HashType = TransmissionTypes.HashType
type SchemaType = TransmissionTypes.SchemaType
type ParamsType = TransmissionTypes.ParamsType
type DocumentType = TransmissionTypes.DocumentType

export function toString (v: unknown) : string
export function toNumber (v: unknown): number
export function toBoolean (v: unknown) : boolean
export function toNull (v: unknown): null

export function mapToValue (array: MemberArrayType): (document: DocumentType | undefined) => MemberType | undefined

export function fromDocumentToArray (document: DocumentType | undefined, array: MemberArrayType) : MemberType

export function fromHashToArray (hash: HashType, uri: string, array: MemberArrayType): MemberType
