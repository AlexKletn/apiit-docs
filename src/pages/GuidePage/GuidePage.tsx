import {
Outlet,
useNavigate,
useParams,
useRoutes
} from "react-router-dom"
import {useEffect} from "react";
import guideMenuConfig from "@/pages/GuidePage/guideMenuConfig.tsx";
import useMenuConfig from "@/hooks/useMenuConfig.ts";
import useSectionMenu from "@/hooks/useSectionMenu.ts";


const GuidePage = () => {
  const { menu, router: routerConf } = useMenuConfig(guideMenuConfig, '/guide')
  const Router = useRoutes(routerConf);
  const navigate = useNavigate();

  const {
    section,
    subSection,
  } = useParams();

  useEffect(() => {
    if(!section && !subSection) {
      // @ts-ignore
      if (menu[0]?.type) {
        // @ts-ignore
        navigate(menu[0]?.children[0].key as string, {
          replace: true
        })
      } else {
        navigate(menu[0]?.key as string, {
          replace: true
        })
      }
    }
  }, [section, subSection, menu])

  useSectionMenu(menu);

  return (
    <div>
      {Router}

      <Outlet />
    </div>
  )
}

export default GuidePage;
