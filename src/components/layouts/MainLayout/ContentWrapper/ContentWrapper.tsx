import {Layout} from 'antd'
import {useOutlet} from "react-router-dom";

import useSettingsContext from "@/context/SettingsContext/useSettingsContext.ts";
import AppMenu from "@/components/layouts/MainLayout/AppMenu/AppMenu.tsx";
import $styles from './ContentWrapper.module.scss';
import type {FC} from "react";

const ContentWrapper: FC = () => {
  const { state } = useSettingsContext();

  const Outlet = useOutlet();

  return (
    <Layout.Content className={$styles.contentWrapper}>
      {
        state.sectionMenu && (
          <div className={$styles.contentWrapperMenu}>
            <AppMenu config={state.sectionMenu}/>
          </div>
        )
      }

      <div className={$styles.contentWrapperContent}>
        {Outlet}
      </div>
    </Layout.Content>
  )
}

export default ContentWrapper;
