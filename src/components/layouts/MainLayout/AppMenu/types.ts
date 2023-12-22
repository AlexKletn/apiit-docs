import type {MenuProps} from "antd";
import type {ReactNode} from "react";

interface AppMenuProps {
  config: MenuProps['items']
  prepend?: ReactNode
  append?: ReactNode
  pinned?: boolean
}

export type {
  AppMenuProps
}
