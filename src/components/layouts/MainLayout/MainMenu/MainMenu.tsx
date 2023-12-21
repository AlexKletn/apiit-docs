import {Divider, Menu} from "antd";
import {GithubOutlined} from "@ant-design/icons";
import AppMenu from "@/components/layouts/MainLayout/AppMenu/AppMenu.tsx";
import $styles from "@/components/layouts/MainLayout/SidePanel/SidePanel.module.scss";
import VersionBadge from "@/components/VersionBadge/VersionBadge.tsx";
import menuConfig from "@/components/layouts/MainLayout/MainMenu/menuConfig.tsx";
import useIsMobile from "@/hooks/useIsMobile.ts";

const MainMenu = () => {
  const isMobile = useIsMobile();

  return (
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
      prepend={ !isMobile && (
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
  )
}

export default MainMenu;
