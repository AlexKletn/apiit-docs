import type {ReactNode} from "react";
import type {RouteObject} from "react-router-dom";
import type {
ItemType,
MenuDividerType,
MenuItemGroupType,
MenuItemType,
SubMenuType
} from "antd/es/menu/hooks/useItems"

interface MenuConfItemType extends Omit<MenuItemType, 'key'>, Omit<SubMenuType, 'children' | 'key'>, Partial<Pick<MenuItemGroupType, 'type'>> {
  key?: string
  icon?: ReactNode;
  label?: string;
  index?: boolean
  component?: ReactNode;
  children?: MenuConfItemType[]
}

type MenuRouteItemType = MenuConfItemType | MenuDividerType;

interface GeneratedConfigs {
  menu: ItemType[]
  router: RouteObject[]
}

export type {
  MenuConfItemType,
  MenuRouteItemType,
  GeneratedConfigs
}
