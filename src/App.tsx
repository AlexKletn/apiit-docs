import {BrowserRouter} from "react-router-dom";
import {ConfigProvider, theme} from "antd";
import AppRoutes from "@/routes/AppRoutes.tsx";
import {Settings} from "@/context/SettingsContext/SettingsContext.tsx";
import type {FC} from "react";

const App: FC = () => {
  return (
    <ConfigProvider theme={{cssVar: true, algorithm: theme.compactAlgorithm}}>
    <Settings.Provider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Settings.Provider>
    </ConfigProvider>
  )
}

export default App
