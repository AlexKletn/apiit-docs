import type {PropertiesItem} from "@/components/TypeDoc/api-docs.types.ts";

interface PropertiesTableProps {
  properties: PropertiesItem[]
  className?: string
  isNested?: boolean
  withTitle?: boolean
}

export type {
  PropertiesTableProps,
}
