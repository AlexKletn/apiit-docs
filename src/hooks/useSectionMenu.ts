import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import useSettingsContext from "@/context/SettingsContext/useSettingsContext.ts";
import type {ItemType} from "antd/es/menu/hooks/useItems";

const useSectionMenu = (menu: ItemType[]) => {
  const { actions } = useSettingsContext();
  const { pathname } = useLocation();

  useEffect(() => {
    actions.setSectionMenu(menu);

    return () => {
      actions.cleanSectionMenu();
    }
  }, [pathname])
}

export default useSectionMenu;
