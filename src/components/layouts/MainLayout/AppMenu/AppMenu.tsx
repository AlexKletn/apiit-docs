import {Affix, Menu} from "antd"

import {useLocation} from "react-router-dom";
import {useMemo} from "react";
import useIsMobile from "@/hooks/useIsMobile.ts";
import $styles from './AppMenu.module.scss';
import type {FC} from "react";
import type {AppMenuProps} from "@/components/layouts/MainLayout/AppMenu/types.ts";
import type {ItemType, SubMenuType} from "antd/es/menu/hooks/useItems";

function parseMenuConfig(items: ItemType[]) {
  const mapItemHandler = (item: ItemType) => {
    if(!item) return [];

    const keys = [item.key];

    if((item as SubMenuType).children) {
      keys.push(...parseMenuConfig((item as SubMenuType).children));
    }

    return keys;
  }

  return items.map((item) => mapItemHandler(item)).flat().filter((key) => !!key)
}

const AppMenu: FC<AppMenuProps> = ({config, prepend, append, pinned = false }) => {
  const {pathname} = useLocation();

  const selected = useMemo(() => {
    if(pathname === '/') return ['/'];

    const keys = parseMenuConfig(config ?? []);
    const selectedKeys = keys.filter((key) => {
      if(!key) return false;
      if(key.toString() === '/' && pathname !== '/') return false;

      const keyRegex = new RegExp(key.toString() + '\\b.*')

      return keyRegex.test(pathname);
    })

    return selectedKeys as string[];
  }, [pathname])

  const isMobile = useIsMobile();

  const menu = (

    <Menu
      className={$styles.menu}
      selectedKeys={selected}
      items={config}
    />
  )

  return (
    <div className={$styles.appMenuWrapper}>
      {prepend}

      {
        !pinned || isMobile ? (
          menu
        ) : (
          <Affix offsetTop={0}>
            {menu}
          </Affix>
        )
      }

      {append && (
        <div className={$styles.appMenuAppend}>
          {
            isMobile ? (
              append
            ) : (
              <Affix offsetBottom={0}>
                {append}
              </Affix>
            )
          }
        </div>
      )}
    </div>
  )
}

export default AppMenu;
