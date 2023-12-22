import {RouterProvider} from "react-router-dom";
import appRoutes from "@/routes/AppRoutes.ts";
import ThemeProvider from "@/context/ThemeProvider/ThemeProvider.tsx";
import {Settings} from "./context/SettingsContext/SettingsContext";
import type {FC} from "react";

const App: FC = () => {
  return (
    <Settings.Provider>
      <ThemeProvider>
          <RouterProvider router={appRoutes()} />
      </ThemeProvider>
    </Settings.Provider>
  )
}

export default App
