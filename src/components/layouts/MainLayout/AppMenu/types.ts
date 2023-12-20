import type {ItemType} from "antd/es/menu/hooks/useItems";
import type {ReactNode} from "react";

interface AppMenuProps {
  config: ItemType[]
  prepend?: ReactNode
  append?: ReactNode
}

export type {
  AppMenuProps
}
