declare module '#transmission/transmission/to-zashiki' {
  type SchemaType = Zashiki.SchemaType

  type ObjectLiteralType = Zashiki.ObjectLiteralType
  type ObjectType = Zashiki.ObjectType

  type ZashikiType = Zashiki.ZashikiType

  export default function toZashiki (rootSchema: SchemaType | undefined, values: ObjectType | ObjectLiteralType | undefined, params: ObjectType | ObjectLiteralType | undefined): ZashikiType | undefined
}

declare module 'shinkansen-transmission/transmission/to-zashiki' {
  export { default } from '#transmission/transmission/to-zashiki'
  export * from '#transmission/transmission/to-zashiki'
}
