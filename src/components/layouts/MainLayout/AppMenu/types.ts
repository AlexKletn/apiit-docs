import type {MenuProps} from "antd";
import type {ReactNode} from "react";

interface AppMenuProps {
  config: MenuProps['items']
  prepend?: ReactNode
  append?: ReactNode
  pinned?: boolean
}

interface AppMenuLinkProps {
  to: string
}

export type {
  AppMenuProps,
  AppMenuLinkProps
}
