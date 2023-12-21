import {useMemo} from "react";
import {Layout} from "antd"
import useSettingsContext from "@/context/SettingsContext/useSettingsContext.ts";
import MainMenu from "@/components/layouts/MainLayout/MainMenu/MainMenu.tsx";
import MobileMenuDrawer from "@/components/layouts/MainLayout/MobileMenuDrawer/MobileMenuDrawer.tsx";
import useIsMobile from "@/hooks/useIsMobile.ts";
import $styles from './SidePanel.module.scss';

const SidePanel = () => {
  const { state} = useSettingsContext();
  // const [collapsed, setCollapsed] = useState(true);

  const collapsed = useMemo(() => !!state.sectionMenu, [state.sectionMenu]);

  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileMenuDrawer />
  }

  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      trigger={null}
      theme="light"
      className={$styles.sidePanel}
      width="200px"
    >
      <MainMenu />
    </Layout.Sider>
  )
}

export default SidePanel;
