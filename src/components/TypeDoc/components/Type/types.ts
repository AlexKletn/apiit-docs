import type {
ReturnType,
TypeArgumentsItem,
TypesItem
} from "@/components/TypeDoc/api-docs.types.ts"

interface TypeProps {
  typeItem: TypesItem | ReturnType | TypeArgumentsItem
  withTitle?: boolean
}

export type {
  TypeProps
}
