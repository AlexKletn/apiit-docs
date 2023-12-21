import {createBrowserRouter} from "react-router-dom";
import lazyRoute from "@/components/TypeDoc/components/LazyRoute/LazyRoute.tsx";
import type {RouteObject} from "react-router-dom";

const AppRoutes = () => {
  const routesConfig: RouteObject[] = [
    {
      path: '/',
      lazy: () => lazyRoute(import("../components/layouts/MainLayout/MainLayout.tsx")),

      children: [
        {
          index: true,
          lazy: () => lazyRoute(import("../pages/HomePage/MainPage.tsx")),
        },
        {
          path: 'installation',
          lazy: () => lazyRoute(import("../pages/InstallationPage/InstallationPage.tsx")),
        },
        {
          path: 'guide',
          lazy: () => lazyRoute(import("../pages/GuidePage/GuidePage.tsx")),

          children: [
            {
              index: true,
              lazy: () => lazyRoute(import("../pages/GuidePage/GuidePage.tsx")),
            },
            {
              path: ":section",
              lazy: () => lazyRoute(import("../pages/GuidePage/GuidePage.tsx")),
              children: [
                {
                  index: true,
                  lazy: () => lazyRoute(import("../pages/GuidePage/GuidePage.tsx")),
                },

                {
                  path: ":subSection",
                  lazy: () => lazyRoute(import("../pages/GuidePage/GuidePage.tsx")),
                }
              ]
            },
          ]
        },
        {
          path: 'api-description',
          lazy: () => lazyRoute(import("../pages/ApiPage/ApiPage.tsx")),

          children: [
            {
              index: true,
              lazy: () => lazyRoute(import("../pages/ApiPage/ApiPage.tsx")),
            },
            {
              path: ":section",
              lazy: () => lazyRoute(import("../pages/ApiPage/ApiPage.tsx")),
              children: [
                {
                  index: true,
                  lazy: () => lazyRoute(import("../pages/ApiPage/ApiPage.tsx")),
                },

                {
                  path: ":name",
                  lazy: () => lazyRoute(import("../pages/ApiPage/ApiPage.tsx")),
                }
              ]
            },
          ]
        }
      ]
    }
  ]

  return createBrowserRouter(routesConfig);
}

export default AppRoutes;
