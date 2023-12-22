import {Layout, theme} from "antd"
import {ScrollRestoration} from "react-router-dom";
import SidePanel from "@/components/layouts/MainLayout/SidePanel/SidePanel.tsx";
import ContentWrapper from "@/components/layouts/MainLayout/ContentWrapper/ContentWrapper.tsx";
import $styles from './mainLayout.module.scss';
import type {FC} from "react";

const MainLayout: FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className={$styles.layout}>
        <Layout.Content className={$styles.layoutContentWrapper}>
          <ScrollRestoration />
          <Layout
            style={{ background: colorBgContainer }}
            className={$styles.layoutContent}
          >
            <SidePanel />

            <ContentWrapper />
          </Layout>
        </Layout.Content>
    </Layout>
  )
}

export default MainLayout;
