import {Layout} from 'antd'
import {useOutlet} from "react-router-dom";
import SectionMenu from "@/components/layouts/MainLayout/SectionMenu/SectionMenu.tsx";
import useIsMobile from "@/hooks/useIsMobile.ts";
import $styles from './ContentWrapper.module.scss';
import type {FC} from "react";

const ContentWrapper: FC = () => {
  const Outlet = useOutlet();
  const isMobile = useIsMobile();

  return (
    <Layout.Content className={$styles.contentWrapper}>
      {!isMobile && <SectionMenu/>}

      <div className={$styles.contentWrapperContent}>
        {Outlet}
      </div>
    </Layout.Content>
  )
}

export default ContentWrapper;
