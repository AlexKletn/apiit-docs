import {updateUrl} from "url-fns";
import {useMemo} from "react";
import type {
GeneratedConfigs,
MenuConfItemType,
MenuRouteItemType
} from "@/hooks/types.ts"
import type {ItemType, SubMenuType} from "antd/es/menu/hooks/useItems";
import type {RouteObject} from "react-router-dom";

const menuItemsMapper = (items: MenuRouteItemType[], base: string): ItemType[] => {
  const itemMapper = (item: MenuConfItemType): ItemType => {
    // @ts-ignore
    const menuItem: Partial<ItemType & SubMenuType> = {
      ...item,
    };

    if(item.children) {
      menuItem.children = menuItemsMapper(item.children as MenuRouteItemType[], base)
    }

    if(item.key) {
      menuItem.key = updateUrl({
        from: base,
        with: {
          path: `./${item.key}`
        }
      })
    }

    return menuItem as ItemType;
  }

  return items.map((item) => itemMapper(item as MenuConfItemType))
}
const routerItemsMapper = (items: MenuRouteItemType[], base: string): RouteObject[] => {
  const itemMapper = (item: MenuConfItemType): RouteObject => {
    const routeItem: RouteObject = {
      element: item.component,
      index: item.index
    };

    if(item.children) {
      routeItem.children = routerItemsMapper(item.children as MenuRouteItemType[], base)
    }

    if(item.key) {
      routeItem.path = item.key
    }

    return routeItem;
  }

  return items
    .map(
      (item) => itemMapper(item as MenuConfItemType)
    )
    .flatMap(({ children, ...item}) => children ? [item, ...(children)] : item)
    .filter((item) => !!item.element && !!item.element)
}

const mapper = (items: MenuRouteItemType[], base: string): GeneratedConfigs => {
  const menuConfig = menuItemsMapper(items, base);
  const routerConfig = routerItemsMapper(items, base);

  return {
    menu: menuConfig,
    router: routerConfig,
  }
}

const useMenuConfig = (items: MenuRouteItemType[], base: string) => {
  return useMemo(() => mapper(items, base), [JSON.stringify(items), base])
}

export default useMenuConfig;
