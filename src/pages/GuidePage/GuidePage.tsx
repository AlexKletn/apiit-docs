import {Outlet, useRoutes} from "react-router-dom"
import guideMenuConfig from "@/pages/GuidePage/guideMenuConfig.tsx";
import useMenuConfig from "@/hooks/useMenuConfig.ts";
import useSectionMenu from "@/hooks/useSectionMenu.ts";


const GuidePage = () => {
  const { menu, router: routerConf } = useMenuConfig(guideMenuConfig, '/guide')
  const Router = useRoutes(routerConf);

  useSectionMenu(menu);

  return (
    <div>
      {Router}

      <Outlet />
    </div>
  )
}

export default GuidePage;
