import {RouterProvider} from "react-router-dom";
import {ConfigProvider, theme} from "antd";
import {useMemo} from "react";
import {Settings} from "@/context/SettingsContext/SettingsContext.tsx";
import appRoutes from "@/routes/AppRoutes.ts";
import useIsMobile from "@/hooks/useIsMobile.ts";
import type {FC} from "react";

const App: FC = () => {
  const isMobile = useIsMobile();
  const algorithm = useMemo(() => {

    return [isMobile ? theme.defaultAlgorithm : theme.compactAlgorithm]
  }, [isMobile])

  return (
    <ConfigProvider theme={{cssVar: true, algorithm}}>
    <Settings.Provider>
      <RouterProvider router={appRoutes()} />
    </Settings.Provider>
    </ConfigProvider>
  )
}

export default App
