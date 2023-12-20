import {Affix, Menu} from "antd"

import {useLocation, useNavigate} from "react-router-dom";
import {useMemo} from "react";
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

const AppMenu: FC<AppMenuProps> = ({config, prepend, append}) => {
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const changePageHandler = ({ key }: { key: string }) => {
    navigate(key);
  }

  const defaultSelected = useMemo(() => {
    if(pathname === '/') return ['/'];

    const keys = parseMenuConfig(config);
    const selectedKeys = keys.filter((key) => {
      if(!key) return false;
      if(key.toString() === '/' && pathname !== '/') return false;

      const keyRegex = new RegExp(key.toString())

      return keyRegex.test(pathname);
    })

    return selectedKeys as string[];
  }, [])

  return (
    <div className={$styles.appMenuWrapper}>
      {prepend}


      <Affix offsetTop={0}>
        <Menu
          className={$styles.menu}
          defaultSelectedKeys={defaultSelected}
          items={config}
          onSelect={changePageHandler}
        />
      </Affix>

      {append && (

        <div className={$styles.appMenuAppend}>
          <Affix offsetBottom={0}>
              {append}
          </Affix>
        </div>
      )}
    </div>
  )
}

export default AppMenu;
