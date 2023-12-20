import {useMemo} from "react";
import {
Divider,
Layout,
Menu
} from "antd"
import {GithubOutlined} from "@ant-design/icons";

import AppMenu from "@/components/layouts/MainLayout/AppMenu/AppMenu.tsx";
import VersionBadge from "@/components/VersionBadge/VersionBadge.tsx";
import useSettingsContext from "@/context/SettingsContext/useSettingsContext.ts";
import $styles from './SidePanel.module.scss';
import menuConfig from "./menuConfig.tsx";

const SidePanel = () => {
  const { state} = useSettingsContext();
  // const [collapsed, setCollapsed] = useState(true);

  const collapsed = useMemo(() => !!state.sectionMenu, [state.sectionMenu]);

  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      trigger={null}
      theme="light"
      className={$styles.sidePanel}
      width="250px"
    >
      <AppMenu
        append={(
          <Menu selectedKeys={[]}>
            <Menu.Item icon={<GithubOutlined />}>
              <a
                href="https://github.com/AlexKletn/apiit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>

            </Menu.Item>
          </Menu>
        )}
        prepend={(
          <>
            <div className={$styles.libName}>
              Apiit

              <VersionBadge />
            </div>

            <Divider />
          </>
        )}
        config={menuConfig}
      />

      {/* <Button */}
      {/*  className={$styles.sidePanelCollapseBtn} */}
      {/*  size="large" */}
      {/*  shape="circle" */}
      {/*  onClick={switchCollapsedHandler} */}
      {/*  icon={<LeftOutlined */}
      {/*    rotate={collapsed ? 180 : 0} */}
      {/*  />} */}
      {/*/ > */}
    </Layout.Sider>
  )
}

export default SidePanel;
