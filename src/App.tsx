import {RouterProvider} from "react-router-dom";
import {ConfigProvider, theme} from "antd";
import {Settings} from "@/context/SettingsContext/SettingsContext.tsx";
import appRoutes from "@/routes/AppRoutes.ts";
import type {FC} from "react";

const App: FC = () => {
  return (
    <ConfigProvider theme={{cssVar: true, algorithm: theme.compactAlgorithm}}>
    <Settings.Provider>
      <RouterProvider router={appRoutes()} />
    </Settings.Provider>
    </ConfigProvider>
  )
}

export default App
