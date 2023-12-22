import {Divider, Menu} from "antd"
import Icon, {GithubOutlined} from "@ant-design/icons";
import AppMenu from "@/components/layouts/MainLayout/AppMenu/AppMenu.tsx";
import $styles from "@/components/layouts/MainLayout/SidePanel/SidePanel.module.scss";
import VersionBadge from "@/components/VersionBadge/VersionBadge.tsx";
import menuConfig from "@/components/layouts/MainLayout/MainMenu/menuConfig.tsx";
import useIsMobile from "@/hooks/useIsMobile.ts";
import useSettingsContext from "@/context/SettingsContext/useSettingsContext.ts";

import SvgDayNight from '@/assets/images/icons/day-night.svg'
import SvgNpmIcon from '@/assets/images/icons/npm-outlined.svg'

const MainMenu = () => {
  const { actions} = useSettingsContext();
  const isMobile = useIsMobile();

  return (
    <AppMenu
      pinned
      append={(
        <Menu selectedKeys={[]}>
          <Menu.Item
            icon={
              // @ts-ignore
              <Icon component={SvgDayNight} />
            }
            onClick={actions.switchUiMode}
          >
            Ui Mode
          </Menu.Item>
          <Menu.Item icon={
              // @ts-ignore
              <Icon component={SvgNpmIcon} />
            }
          >
            <a
              href="https://www.npmjs.com/package/apiit"
              target="_blank"
              rel="noopener noreferrer"
            >
              npm
            </a>
          </Menu.Item>
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
